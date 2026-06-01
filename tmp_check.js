const fs = require('fs');
const html = fs.readFileSync('frontend/index.html','utf8');
const m = html.match(/<script type="text\/babel">([\s\S]*)<\/script>/);
if(!m){ console.error('NO_SCRIPT'); process.exit(1); }
const code = m[1];
try {
  new Function(code.replace(/<[^>]+>/g, ''));
  console.log('ROUGH_OK');
} catch (e) {
  console.error(e.message);
}
