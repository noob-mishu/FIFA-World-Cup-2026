const fs = require('fs');

const existingFixtures = require('../src/data/fixtures.js').default;

const rawKnockouts = `ROUND OF 32
June 29	2A vs 2B	Los Angeles	1:00 am
June 29	1C vs 2F	Houston	11:00 pm
June 30	1E vs 3A/B/C/D/F	Boston	2:30 am
June 30	1F vs 2C	Monterrey	7:00 am
June 30	2E vs 2I	Dallas	11:00 pm
July 1	1I vs 3C/D/F/G/H	New Jersey	3:00 am
July 1	1A vs 3C/E/F/H/I	Mexico City	7:00 am
July 1	1L vs 3E/H/I/J/K	Atlanta	10:00 pm
July 2	1G vs 3A/E/H/I/J	Seattle	2:00 am
July 2	1D vs 3B/E/F/I/J	San Francisco	6:00 am
July 3	1H vs 2J	Los Angeles	1:00 am
July 3	2K vs 2L	Toronto	5:00 am
July 3	1B vs 3E/F/G/I/J	Vancouver	9:00 am
July 4	2D vs 2G	Dallas	12:00 am
July 4	1J vs 2H	Miami	4:00 am
July 4	1K vs 3D/E/I/J/L	Kansas City	7:30 am

ROUND OF 16
July 4	2A/2B vs 1F/2C	Houston	11:00 pm
July 5	1E/3ABCDF vs 1I/33CDFGH	Philadelphia	3:00 am
July 6	1C/2F vs 2E/2I	New Jersey	2:00 am
July 6	1A/3CEFHI vs 1L/3EHIJK	Mexico City	6:00 am
July 7	2K/2L vs 1H/2J	Dallas	1:00 am
July 7	1D/3BEFIJ vs 1G/3AEHIJ	Seattle	6:00 am
July 7	1J/2H vs 2D/2G	Atlanta	10:00 pm
July 8	1B/3EFGIJ vs 1K/3DEIJL	Vancouver	2:00 am

QUARTERFINALS
July 10	Winner match 89 vs Winner match 90	Boston	2:00 am
July 11	Winner match 93 vs Winner match 94	Los Angeles	1:00 am
July 12	Winner match 91 vs Winner match 92	Miami	3:00 am
July 12	Winner match 95 vs Winner match 96	Kansas City	7:00 am

SEMIFINALS
July 15	Winner match 97 vs Winner match 98	Dallas	1:00 am
July 16	Winner match 99 vs Winner match 100	Atlanta	1:00 am

THIRD PLACE PLAY-OFF
July 19	Loser match 101 vs Loser match 102	Miami	3:00 am

FINAL
July 20	Winner match 101 vs Winner match 102	New Jersey	1:00 am`;

const venueMap = {
  'Mexico City': { stadium: 'Estadio Azteca', city: 'Mexico City, Mexico' },
  'Guadalajara': { stadium: 'Estadio Guadalajara', city: 'Guadalajara, Mexico' },
  'Toronto': { stadium: 'BMO Field', city: 'Toronto, Canada' },
  'Los Angeles': { stadium: 'SoFi Stadium', city: 'Los Angeles, USA' },
  'San Francisco': { stadium: "Levi's Stadium", city: 'San Francisco, USA' },
  'New Jersey': { stadium: 'MetLife Stadium', city: 'East Rutherford, USA' },
  'Boston': { stadium: 'Gillette Stadium', city: 'Boston, USA' },
  'Vancouver': { stadium: 'BC Place', city: 'Vancouver, Canada' },
  'Houston': { stadium: 'NRG Stadium', city: 'Houston, USA' },
  'Dallas': { stadium: 'AT&T Stadium', city: 'Dallas, USA' },
  'Philadelphia': { stadium: 'Lincoln Financial Field', city: 'Philadelphia, USA' },
  'Monterrey': { stadium: 'Estadio Monterrey', city: 'Monterrey, Mexico' },
  'Atlanta': { stadium: 'Mercedes-Benz Stadium', city: 'Atlanta, USA' },
  'Seattle': { stadium: 'Lumen Field', city: 'Seattle, USA' },
  'Miami': { stadium: 'Hard Rock Stadium', city: 'Miami, USA' },
  'Kansas City': { stadium: 'GEHA Field at Arrowhead Stadium', city: 'Kansas City, USA' }
};

const lines = rawKnockouts.trim().split('\n');
let currentStage = '';

const newFixtures = [...existingFixtures];
let currentId = existingFixtures.length + 1;

lines.forEach((line) => {
  line = line.trim();
  if (!line) return;

  if (line.startsWith('ROUND OF 32')) {
    currentStage = 'Round of 32';
    return;
  }
  if (line.startsWith('ROUND OF 16')) {
    currentStage = 'Round of 16';
    return;
  }
  if (line.startsWith('QUARTERFINALS')) {
    currentStage = 'Quarter-final';
    return;
  }
  if (line.startsWith('SEMIFINALS')) {
    currentStage = 'Semi-final';
    return;
  }
  if (line.startsWith('THIRD PLACE PLAY-OFF')) {
    currentStage = 'Bronze Final';
    return;
  }
  if (line.startsWith('FINAL')) {
    currentStage = 'Final';
    return;
  }

  const parts = line.split('\t');
  if (parts.length < 4) return;

  const dateStr = parts[0].trim();
  const matchStr = parts[1].trim();
  const venue = parts[2].trim();
  const time = parts[3].trim();

  const teamsPart = matchStr.split(' vs ');
  const homeName = teamsPart[0].trim();
  const awayName = teamsPart[1].trim();

  const venueInfo = venueMap[venue] || { stadium: venue, city: venue };

  newFixtures.push({
    id: currentId++,
    homeTeam: {
      name: homeName,
      code: 'TBD',
      flag: '🏳️'
    },
    awayTeam: {
      name: awayName,
      code: 'TBD',
      flag: '🏳️'
    },
    date: `${dateStr}, 2026`,
    time: time,
    stadium: venueInfo.stadium,
    city: venueInfo.city,
    group: 'Final',
    stage: currentStage,
    score: null,
    isLive: false,
    minute: null
  });
});

const fileContent = `const fixtures = ${JSON.stringify(newFixtures, null, 2)};\n\nexport default fixtures;\n`;
fs.writeFileSync('E:/React Practice/FIFA-World-Cup-2026/src/data/fixtures.js', fileContent);
console.log(`Successfully added knockout fixtures. Total fixtures: ${newFixtures.length}`);
