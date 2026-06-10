const fs = require('fs');
const fixtures = require('../src/data/fixtures.js').default;

const r32Updates = {
  73: {
    date: 'June 28, 2026',
    home: 'Group A runners-up',
    away: 'Group B runners-up',
    stadium: 'SoFi Stadium',
    city: 'Los Angeles, USA'
  },
  74: {
    date: 'June 29, 2026',
    home: 'Group E winners',
    away: 'Group A/B/C/D/F third place',
    stadium: 'Gillette Stadium',
    city: 'Boston, USA'
  },
  75: {
    date: 'June 29, 2026',
    home: 'Group F winners',
    away: 'Group C runners-up',
    stadium: 'Estadio Monterrey',
    city: 'Monterrey, Mexico'
  },
  76: {
    date: 'June 29, 2026',
    home: 'Group C winners',
    away: 'Group F runners-up',
    stadium: 'NRG Stadium',
    city: 'Houston, USA'
  },
  77: {
    date: 'June 30, 2026',
    home: 'Group I winners',
    away: 'Group C/D/F/G/H third place',
    stadium: 'MetLife Stadium',
    city: 'East Rutherford, USA'
  },
  78: {
    date: 'June 30, 2026',
    home: 'Group E runners-up',
    away: 'Group I runners-up',
    stadium: 'AT&T Stadium',
    city: 'Dallas, USA'
  },
  79: {
    date: 'June 30, 2026',
    home: 'Group A winners',
    away: 'Group C/E/F/H/I third place',
    stadium: 'Estadio Azteca',
    city: 'Mexico City, Mexico'
  },
  80: {
    date: 'July 1, 2026',
    home: 'Group L winners',
    away: 'Group E/H/I/J/K third place',
    stadium: 'Mercedes-Benz Stadium',
    city: 'Atlanta, USA'
  },
  81: {
    date: 'July 1, 2026',
    home: 'Group D winners',
    away: 'Group B/E/F/I/J third place',
    stadium: "Levi's Stadium",
    city: 'San Francisco, USA'
  },
  82: {
    date: 'July 1, 2026',
    home: 'Group G winners',
    away: 'Group A/E/H/I/J third place',
    stadium: 'Lumen Field',
    city: 'Seattle, USA'
  },
  83: {
    date: 'July 2, 2026',
    home: 'Group K runners-up',
    away: 'Group L runners-up',
    stadium: 'BMO Field',
    city: 'Toronto, Canada'
  },
  84: {
    date: 'July 2, 2026',
    home: 'Group H winners',
    away: 'Group J runners-up',
    stadium: 'SoFi Stadium',
    city: 'Los Angeles, USA'
  },
  85: {
    date: 'July 2, 2026',
    home: 'Group B winners',
    away: 'Group E/F/G/I/J third place',
    stadium: 'BC Place',
    city: 'Vancouver, Canada'
  },
  86: {
    date: 'July 3, 2026',
    home: 'Group J winners',
    away: 'Group H runners-up',
    stadium: 'Hard Rock Stadium',
    city: 'Miami, USA'
  },
  87: {
    date: 'July 3, 2026',
    home: 'Group K winners',
    away: 'Group D/E/I/J/L third place',
    stadium: 'GEHA Field at Arrowhead Stadium',
    city: 'Kansas City, USA'
  },
  88: {
    date: 'July 3, 2026',
    home: 'Group D runners-up',
    away: 'Group G runners-up',
    stadium: 'AT&T Stadium',
    city: 'Dallas, USA'
  }
};

const updated = fixtures.map(f => {
  if (r32Updates[f.id]) {
    const info = r32Updates[f.id];
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
console.log('Successfully updated Round of 32 names and dates!');
