<?php
/**
 * Formulaire de réservation : reçoit la demande envoyée par la page Contact (JSON),
 * la transmet par e-mail à contact@meissambaye.com et envoie un accusé de réception.
 * Solution d'attente sur l'hébergement IONOS, avant l'administration Directus.
 *
 * Réponses : 200 {"ok":true} · 400 champs invalides · 403 autre site · 405 mauvaise méthode
 *            413 trop long · 429 trop d'envois · 500 échec de l'envoi.
 */

declare(strict_types=1);

const DESTINATAIRE = 'contact@meissambaye.com';
const EXPEDITEUR = 'contact@meissambaye.com';
const NOM_EXPEDITEUR = 'Site Meïssa Mbaye';
const TAILLE_MAX = 20000; // octets
const ENVOIS_MAX = 5; // par adresse IP…
const FENETRE = 3600; // …et par heure

const OFFRES = [
    'borom-ndeer' => 'Meïssa Mbaye Boroom Ndeer (concert)',
    'conteur' => 'Meïssa conteur',
    'atelier' => "Atelier d'art oratoire",
    'bokk-baat' => 'Bokk Baat (chant)',
    'kaay-wax' => 'Kaay Wax (paroles partagées)',
    'formation' => 'Formation, coaching ou cours de chant',
    'indecis' => 'Ne sait pas encore',
];
const TYPES = [
    'festival' => 'Festival',
    'mediatheque' => 'Médiathèque',
    'ecole' => 'École, collège, lycée',
    'centre_culturel' => 'Centre culturel, salle',
    'institut' => 'Institut, Alliance française',
    'autre' => 'Autre',
];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function repondre(int $code, array $corps = []): void
{
    http_response_code($code);
    echo json_encode(['ok' => $code === 200] + $corps, JSON_UNESCAPED_UNICODE);
    exit;
}

/** Texte d'une ligne : sans retour à la ligne ni caractère de contrôle, tronqué. */
function ligne($v, int $max = 200): string
{
    $v = is_string($v) ? $v : '';
    $v = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $v) ?? '';
    return tronquer(trim($v), $max);
}

/** Texte sur plusieurs lignes (message) : garde les retours à la ligne. */
function bloc($v, int $max = 5000): string
{
    $v = is_string($v) ? str_replace("\r\n", "\n", $v) : '';
    $v = preg_replace('/[\x00-\x09\x0B-\x1F\x7F]+/u', ' ', $v) ?? '';
    return tronquer(trim($v), $max);
}

function tronquer(string $v, int $max): string
{
    return preg_match('/^.{0,' . $max . '}/us', $v, $m) ? $m[0] : '';
}

/** En-tête encodé en UTF-8 (objet, nom de l'expéditeur), sans dépendre de mbstring. */
function entete(string $v): string
{
    return '=?UTF-8?B?' . base64_encode($v) . '?=';
}

function envoyer(string $a, string $objet, string $texte, string $repondreA = ''): bool
{
    $entetes = [
        'From: ' . entete(NOM_EXPEDITEUR) . ' <' . EXPEDITEUR . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];
    if ($repondreA !== '') {
        $entetes[] = 'Reply-To: ' . $repondreA;
    }
    // -f : adresse d'enveloppe sur le domaine du site (recommandé par IONOS, limite le classement en spam).
    return mail($a, entete($objet), $texte, implode("\r\n", $entetes), '-f' . EXPEDITEUR);
}

/** Limite d'envois par IP, dans un dossier hors du site public. */
function tropDEnvois(): bool
{
    $dossier = dirname(__DIR__, 2) . '/donnees-formulaire';
    if (!is_dir($dossier) && !@mkdir($dossier, 0700, true)) {
        $dossier = sys_get_temp_dir() . '/meissa-formulaire';
        if (!is_dir($dossier) && !@mkdir($dossier, 0700, true)) {
            return false; // pas de stockage possible : on ne bloque pas les vraies demandes
        }
    }
    $fichier = $dossier . '/' . hash('sha256', 'meissa|' . ($_SERVER['REMOTE_ADDR'] ?? '')) . '.json';
    $maintenant = time();
    $envois = is_file($fichier) ? (json_decode((string) file_get_contents($fichier), true) ?: []) : [];
    $envois = array_values(array_filter($envois, function ($t) use ($maintenant) {
        return is_int($t) && $t > $maintenant - FENETRE;
    }));
    if (count($envois) >= ENVOIS_MAX) {
        return true;
    }
    $envois[] = $maintenant;
    @file_put_contents($fichier, json_encode($envois), LOCK_EX);
    return false;
}

// 1. Requête
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    repondre(405);
}
$origine = $_SERVER['HTTP_ORIGIN'] ?? '';
$hote = preg_replace('/:\d+$/', '', strtolower($_SERVER['HTTP_HOST'] ?? ''));
if ($origine !== '' && strtolower((string) parse_url($origine, PHP_URL_HOST)) !== $hote) {
    repondre(403);
}
$brut = file_get_contents('php://input', false, null, 0, TAILLE_MAX + 1);
if ($brut === false || strlen($brut) > TAILLE_MAX) {
    repondre(413);
}
$d = json_decode($brut, true);
if (!is_array($d)) {
    repondre(400, ['erreur' => 'format']);
}

// 2. Robot : le champ piège est rempli → on répond « ok » sans rien envoyer.
if (ligne($d['site_web'] ?? '') !== '') {
    repondre(200);
}

// 3. Champs
$f = [
    'offre' => ligne($d['offre'] ?? '', 40),
    'structure' => ligne($d['structure'] ?? ''),
    'type' => ligne($d['type_structure'] ?? '', 40),
    'ville' => ligne($d['ville'] ?? '', 120),
    'pays' => ligne($d['pays'] ?? '', 120),
    'nom' => ligne($d['nom'] ?? '', 120),
    'fonction' => ligne($d['fonction'] ?? '', 120),
    'email' => ligne($d['email'] ?? '', 254),
    'telephone' => ligne($d['telephone'] ?? '', 40),
    'date' => ligne($d['date_souhaitee'] ?? ''),
    'public' => ligne($d['public'] ?? ''),
    'message' => bloc($d['message'] ?? ''),
    'langue' => ($d['langue'] ?? '') === 'en' ? 'en' : 'fr',
    'page' => ligne($d['page'] ?? '', 300),
];
$manquants = [];
foreach (['structure', 'pays', 'nom'] as $c) {
    if ($f[$c] === '') {
        $manquants[] = $c;
    }
}
if (!isset(OFFRES[$f['offre']])) {
    $manquants[] = 'offre';
}
if (!filter_var($f['email'], FILTER_VALIDATE_EMAIL)) {
    $manquants[] = 'email';
}
if (empty($d['consentement'])) {
    $manquants[] = 'consentement';
}
if ($manquants) {
    repondre(400, ['erreur' => 'champs', 'champs' => $manquants]);
}

if (tropDEnvois()) {
    repondre(429);
}

// 4. E-mail à l'équipe
$offre = OFFRES[$f['offre']];
$type = TYPES[$f['type']] ?? '';
$lieu = implode(', ', array_filter([$f['ville'], $f['pays']]));
$lignes = [
    'Nouvelle demande reçue par le formulaire du site.',
    '',
    'Spectacle : ' . $offre,
    '',
    'STRUCTURE',
    'Nom : ' . $f['structure'],
    'Type : ' . ($type ?: '—'),
    'Lieu : ' . $lieu,
    '',
    'CONTACT',
    'Nom : ' . $f['nom'],
    'Fonction : ' . ($f['fonction'] ?: '—'),
    'E-mail : ' . $f['email'],
    'Téléphone : ' . ($f['telephone'] ?: '—'),
    '',
    'PROJET',
    'Date ou période : ' . ($f['date'] ?: '—'),
    'Public attendu : ' . ($f['public'] ?: '—'),
    '',
    'Message :',
    $f['message'] ?: '—',
    '',
    '—',
    'Langue de la page : ' . strtoupper($f['langue']),
    'Envoyé le ' . gmdate('d/m/Y à H:i') . ' (heure de Dakar, UTC+0)',
    'Pour répondre, utilisez simplement « Répondre » : la réponse part vers ' . $f['email'] . '.',
];
$objet = 'Demande de réservation — ' . $offre . ' — ' . $f['structure'];
if (!envoyer(DESTINATAIRE, $objet, implode("\n", $lignes), $f['email'])) {
    repondre(500);
}

// 5. Accusé de réception, volontairement sans reprendre le texte saisi (évite tout usage du formulaire pour du spam).
if ($f['langue'] === 'en') {
    $objetAr = 'We have received your request — Meïssa Mbaye';
    $texteAr = "Hello,\n\nThank you for your interest in Meïssa Mbaye's shows. We have received your request and will reply within 48 hours (working days, Dakar time).\n\nMeanwhile, the press kit, technical riders and videos are available in the pro area: https://meissambaye.com/en/pro\n\nKind regards,\nMeïssa Mbaye's team\ncontact@meissambaye.com · WhatsApp +221 77 706 06 97";
} else {
    $objetAr = 'Nous avons bien reçu votre demande — Meïssa Mbaye';
    $texteAr = "Bonjour,\n\nMerci de votre intérêt pour les spectacles de Meïssa Mbaye. Votre demande est bien arrivée : nous vous répondons sous 48 heures (jours ouvrés, heure de Dakar).\n\nEn attendant, le dossier de presse, les fiches techniques et les vidéos sont disponibles dans l'espace pro : https://meissambaye.com/pro\n\nBien cordialement,\nL'équipe de Meïssa Mbaye\ncontact@meissambaye.com · WhatsApp +221 77 706 06 97";
}
envoyer($f['email'], $objetAr, $texteAr); // un échec ici ne doit pas faire croire que la demande est perdue

repondre(200);
