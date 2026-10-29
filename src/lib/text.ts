const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Échappe un texte et surligne les valeurs entre crochets ([JJ MMM]…)
 * pour qu'aucun emplacement réservé ne parte en ligne sans être vu.
 * Les mentions « À CONFIRMER » restent dans les données pour l'équipe mais ne s'affichent pas
 * (Nano, 29/10/2026) : « Dakar [À CONFIRMER] » → « Dakar », « [3 ans — À CONFIRMER] » → « 3 ans ».
 * À utiliser avec `set:html`.
 */
export function fmt(text: string) {
  return escape(text)
    .replace(/\s*\[À (?:CONFIRMER|COMPLÉTER)\]/gi, '')
    .replace(/\[([^\]]+?)\s*—\s*À (?:CONFIRMER|COMPLÉTER)\]/gi, '$1')
    .replace(/\[[^\]]+\]/g, (m) => `<mark class="todo">${m}</mark>`);
}
