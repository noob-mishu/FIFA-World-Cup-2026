const fs = require('fs');
const fixtures = require('../src/data/fixtures.js').default;

const updated = fixtures.map(f => {
  if (f.time) {
    let t = f.time.trim();
    if (t.toLowerCase().endsWith('am') || t.toLowerCase().endsWith('pm')) {
      f.time = t.toUpperCase();
    }
  }
  return f;
});

const fileContent = `const fixtures = ${JSON.stringify(updated, null, 2)};\n\nexport default fixtures;\n`;
fs.writeFileSync('E:/React Practice/FIFA-World-Cup-2026/src/data/fixtures.js', fileContent);
console.log('Successfully formatted all times to uppercase AM/PM inside fixtures.js!');
