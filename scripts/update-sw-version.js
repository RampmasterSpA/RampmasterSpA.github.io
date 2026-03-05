import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const swPath = path.join(__dirname, '../public/sw.js');

try {
  let swContent = fs.readFileSync(swPath, 'utf8');
  
  // Generar una versión basada en la fecha y hora actual (YYYYMMDD-HHMM)
  const now = new Date();
  const version = `v${now.getFullYear()}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}-${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
  
  // Reemplazar la línea del CACHE_NAME
  // Busca: const CACHE_NAME = '...';
  const updatedContent = swContent.replace(
    /const CACHE_NAME = ['"].*['"];/,
    `const CACHE_NAME = 'rampmaster-${version}';`
  );

  if (swContent !== updatedContent) {
    fs.writeFileSync(swPath, updatedContent);
    console.log(`✅ Service Worker actualizado a la versión: rampmaster-${version}`);
  } else {
    console.log('ℹ️ No se encontraron cambios en la definición de CACHE_NAME.');
  }

} catch (error) {
  console.error('❌ Error actualizando el Service Worker:', error);
  process.exit(1);
}
