// Met en ligne le site chez IONOS : envoie le contenu de dist/ dans le dossier /public de l'espace web, par SFTP.
// Identifiants lus dans .env (jamais versionné) : SFTP_HOST, SFTP_USER, SFTP_PASSWORD, et facultatifs SFTP_PORT, SFTP_DIR.
// Usage : npm run deploy (construit le site puis l'envoie).
import fs from 'node:fs';
import path from 'node:path';
import SftpClient from 'ssh2-sftp-client';

const { SFTP_HOST, SFTP_USER, SFTP_PASSWORD, SFTP_PORT = '22', SFTP_DIR = '/public' } = process.env;
const manquants = ['SFTP_HOST', 'SFTP_USER', 'SFTP_PASSWORD'].filter((k) => !process.env[k]);
if (manquants.length) {
  console.error(`Il manque dans .env : ${manquants.join(', ')}. Voir .env.example.`);
  process.exit(1);
}

const local = path.resolve('dist');
if (!fs.existsSync(path.join(local, 'index.html'))) {
  console.error('dist/ est vide : lancez d’abord « npm run build ».');
  process.exit(1);
}

const sftp = new SftpClient();
let envoyes = 0;
sftp.on('upload', () => {
  envoyes += 1;
  if (envoyes % 50 === 0) console.log(`  ${envoyes} fichiers envoyés…`);
});

try {
  await sftp.connect({ host: SFTP_HOST, port: Number(SFTP_PORT), username: SFTP_USER, password: SFTP_PASSWORD, readyTimeout: 30000 });
  if (!(await sftp.exists(SFTP_DIR))) throw new Error(`Le dossier ${SFTP_DIR} n'existe pas sur l'espace web.`);
  console.log(`Connecté à ${SFTP_HOST}. Envoi de dist/ vers ${SFTP_DIR}…`);
  await sftp.uploadDir(local, SFTP_DIR);
  console.log(`Terminé : ${envoyes} fichiers envoyés.`);
} catch (e) {
  console.error(`Échec de l'envoi : ${e.message}`);
  process.exitCode = 1;
} finally {
  await sftp.end().catch(() => {});
}
