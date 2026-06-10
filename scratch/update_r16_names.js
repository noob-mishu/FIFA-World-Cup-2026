const fs = require('fs');
const fixtures = require('../src/data/fixtures.js').default;

const r16Updates = {
  89: {
    date: 'July 4, 2026',
    home: 'Winner match 74',
    away: 'Winner match 77',
    stadium: 'Lincoln Financial Field',
    city: 'Philadelphia, USA'
  },
  90: {
    date: 'July 4, 2026',
    home: 'Winner match 73',
    away: 'Winner match 75',
    stadium: 'NRG Stadium',
    city: 'Houston, USA'
  },
  91: {
    date: 'July 5, 2026',
    home: 'Winner match 76',
    away: 'Winner match 78',
    stadium: 'MetLife Stadium',
    city: 'East Rutherford, USA'
  },
  92: {
    date: 'July 5, 2026',
    home: 'Winner match 79',
    away: 'Winner match 80',
    stadium: 'Estadio Azteca',
    city: 'Mexico City, Mexico'
  },
  93: {
    date: 'July 6, 2026',
    home: 'Winner match 83',
    away: 'Winner match 84',
    stadium: 'AT&T Stadium',
    city: 'Dallas, USA'
  },
  94: {
    date: 'July 6, 2026',
    home: 'Winner match 81',
    away: 'Winner match 82',
    stadium: 'Lumen Field',
    city: 'Seattle, USA'
  },
  95: {
    date: 'July 7, 2026',
    home: 'Winner match 86',
    away: 'Winner match 88',
    stadium: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA'
  },
  96: {
    date: 'July 7, 2026',
    home: 'Winner match 85',
    away: 'Winner match 87',
    stadium: 'BC Place',
    city: 'Vancouver, Canada'
  }
};

const updated = fixtures.map(f => {
  if (r16Updates[f.id]) {
    const info = r16Updates[f.id];
    f.date = info.date;
    f.homeTeam.name = info.home;
    f.awayTeam.name = info.away;
    f.stadium = info.stadium;
    f.city = info.city;
  }
  return f;
});

const fileContent = `const fixtures = ${JSON.stringify(updated, null, 2)};\n\nexport default fixtures;\n`;
fs.writeFileSync('E:/React Practice/FIFA-World-Cup-2026/src/data/fixtures.js', fileContent);
console.log('Successfully updated Round of 16 names and dates!');
