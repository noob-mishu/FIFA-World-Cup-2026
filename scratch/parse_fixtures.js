const fs = require('fs');

const rawFixtures = `June 12	Mexico vs South Africa	A	Mexico City	1:00 am
June 12	South Korea vs Czechia	A	Guadalajara	8:00 am
June 13	Canada vs Bosnia and Herzegovina	B	Toronto	1:00 am
June 13	USA vs Paraguay	D	Los Angeles	7:00 am
June 14	Qatar vs Switzerland	B	San Francisco	1:00 am
June 14	Brazil vs Morocco	C	New Jersey	4:00 am
June 14	Haiti vs Scotland	C	Boston	7:00 am
June 14	Australia vs Turkey	D	Vancouver	10:00 am
June 14	Germany vs Curacao	E	Houston	11:00 pm
June 15	Netherlands vs Japan	F	Dallas	2:00 am
June 15	Ivory Coast vs Ecuador	E	Philadelphia	5:00 am
June 15	Sweden vs Tunisia	F	Monterrey	8:00 am
June 15	Spain vs Cape Verde	H	Atlanta	10:00 pm
June 16	Belgium vs Egypt	G	Seattle	1:00 am
June 16	Saudi Arabia vs Uruguay	H	Miami	4:00 am
June 16	Iran vs New Zealand	G	Los Angeles	7:00 am
June 17	France vs Senegal	I	New Jersey	1:00 am
June 17	Iraq vs Norway	I	Boston	4:00 am
June 17	Argentina vs Algeria	J	Kansas City	7:00 am
June 17	Austria vs Jordan	J	San Francisco	10:00 am
June 17	Portugal vs DR Congo	K	Houston	11:00 pm
June 18	England vs Croatia	L	Dallas	2:00 am
June 18	Ghana vs Panama	L	Toronto	5:00 am
June 18	Uzbekistan vs Colombia	K	Mexico City	8:00 am
June 18	Czechia vs South Africa	A	Atlanta	10:00 pm
June 19	Switzerland vs Bosnia and Herzegovina	B	Los Angeles	1:00 am
June 19	Canada vs Qatar	B	Vancouver	4:00 am
June 19	Mexico vs South Korea	A	Guadalajara	7:00 am
June 20	USA vs Australia	D	Seattle	1:00 am
June 20	Scotland vs Morocco	C	Boston	4:00 am
June 20	Brazil vs Haiti	C	Philadelphia	6:30 am
June 20	Turkey vs Paraguay	D	San Francisco	9:00 am
June 20	Netherlands vs Sweden	F	Houston	11:00 pm
June 21	Germany vs Ivory Coast	E	Toronto	2:00 am
June 21	Ecuador vs Curacao	E	Kansas City	6:00 am
June 21	Tunisia vs Japan	F	Monterrey	10:00 am
June 21	Spain vs Saudi Arabia	H	Atlanta	10:00 pm
June 22	Belgium vs Iran	G	Los Angeles	1:00 am
June 22	Uruguay vs Cape Verde	H	Miami	4:00 am
June 22	New Zealand vs Egypt	G	Vancouver	7:00 am
June 22	Argentina vs Austria	J	Dallas	11:00 pm
June 23	France vs Iraq	I	Philadelphia	3:00 am
June 23	Norway vs Senegal	I	New Jersey	6:00 am
June 23	Jordan vs Algeria	J	San Francisco	9:00 am
June 23	Portugal vs Uzbekistan	K	Houston	11:00 pm
June 24	England vs Ghana	L	Boston	2:00 am
June 24	Panama vs Croatia	L	Toronto	5:00 am
June 24	Colombia vs DR Congo	K	Guadalajara	8:00 am
June 25	Switzerland vs Canada	B	Vancouver	1:00 am
June 25	Bosnia and Herzegovina vs Qatar	B	Seattle	1:00 am
June 25	Morocco vs Haiti	C	Atlanta	4:00 am
June 25	Scotland vs Brazil	C	Miami	4:00 am
June 25	South Africa vs South Korea	A	Monterrey	7:00 am
June 25	Czechia vs Mexico	A	Mexico City	7:00 am
June 26	Curacao vs Ivory Coast	E	Philadelphia	2:00 am
June 26	Ecuador vs Germany	E	New Jersey	2:00 am
June 26	Tunisia vs Netherlands	F	Kansas City	5:00 am
June 26	Japan vs Sweden	F	Dallas	5:00 am
June 26	Turkey vs USA	D	Los Angeles	8:00 am
June 26	Paraguay vs Australia	D	San Francisco	8:00 am
June 27	Norway vs France	I	Boston	1:00 am
June 27	Senegal vs Iraq	I	Toronto	1:00 am
June 27	Cape Verde vs Saudi Arabia	H	Houston	6:00 am
June 27	Uruguay vs Spain	H	Guadalajara	6:00 am
June 27	New Zealand vs Belgium	G	Vancouver	9:00 am
June 27	Egypt vs Iran	G	Seattle	9:00 am
June 28	Panama vs England	L	New Jersey	3:00 am
June 28	Croatia vs Ghana	L	Philadelphia	3:00 am
June 28	Colombia vs Portugal	K	Miami	5:30 am
June 28	DR Congo vs Uzbekistan	K	Atlanta	5:30 am
June 28	Algeria vs Austria	J	Kansas City	8:00 am
June 28	Jordan vs Argentina	J	Dallas	8:00 am`;

const teams = [
  { id: 1, name: 'Mexico', code: 'MEX', flag: '🇲🇽', group: 'A' },
  { id: 2, name: 'South Africa', code: 'RSA', flag: '🇿🇦', group: 'A' },
  { id: 3, name: 'Korea Republic', aliases: ['South Korea'], code: 'KOR', flag: '🇰🇷', group: 'A' },
  { id: 4, name: 'Czechia', code: 'CZE', flag: '🇨🇿', group: 'A' },
  { id: 5, name: 'Canada', code: 'CAN', flag: '🇨🇦', group: 'B' },
  { id: 6, name: 'Bosnia and Herzegovina', code: 'BIH', flag: '🇧🇦', group: 'B' },
  { id: 7, name: 'Qatar', code: 'QAT', flag: '🇶🇦', group: 'B' },
  { id: 8, name: 'Switzerland', code: 'SUI', flag: '🇨🇭', group: 'B' },
  { id: 9, name: 'Brazil', code: 'BRA', flag: '🇧🇷', group: 'C' },
  { id: 10, name: 'Morocco', code: 'MAR', flag: '🇲🇦', group: 'C' },
  { id: 11, name: 'Haiti', code: 'HAI', flag: '🇭🇹', group: 'C' },
  { id: 12, name: 'Scotland', code: 'SCO', flag: '🏴\u{e0067}🏴\u{e0062}🏴\u{e0073}🏴\u{e0063}🏴\u{e0074}🏴\u{e007f}', group: 'C' }, // Scotland emoji
  { id: 13, name: 'USA', code: 'USA', flag: '🇺🇸', group: 'D' },
  { id: 14, name: 'Paraguay', code: 'PAR', flag: '🇵🇾', group: 'D' },
  { id: 15, name: 'Australia', code: 'AUS', flag: '🇦🇺', group: 'D' },
  { id: 16, name: 'Türkiye', aliases: ['Turkey'], code: 'TUR', flag: '🇹🇷', group: 'D' },
  { id: 17, name: 'Germany', code: 'GER', flag: '🇩🇪', group: 'E' },
  { id: 18, name: 'Curaçao', aliases: ['Curacao'], code: 'CUW', flag: '🇨🇼', group: 'E' },
  { id: 19, name: 'Côte d\'Ivoire', aliases: ['Ivory Coast'], code: 'CIV', flag: '🇨🇮', group: 'E' },
  { id: 20, name: 'Ecuador', code: 'ECU', flag: '🇪🇨', group: 'E' },
  { id: 21, name: 'Netherlands', code: 'NED', flag: '🇳🇱', group: 'F' },
  { id: 22, name: 'Japan', code: 'JPN', flag: '🇯🇵', group: 'F' },
  { id: 23, name: 'Sweden', code: 'SWE', flag: '🇸🇪', group: 'F' },
  { id: 24, name: 'Tunisia', code: 'TUN', flag: '🇹🇳', group: 'F' },
  { id: 25, name: 'Belgium', code: 'BEL', flag: '🇧🇪', group: 'G' },
  { id: 26, name: 'Egypt', code: 'EGY', flag: '🇪🇬', group: 'G' },
  { id: 27, name: 'IR Iran', aliases: ['Iran'], code: 'IRN', flag: '🇮🇷', group: 'G' },
  { id: 28, name: 'New Zealand', code: 'NZL', flag: '🇳🇿', group: 'G' },
  { id: 29, name: 'Spain', code: 'ESP', flag: '🇪🇸', group: 'H' },
  { id: 30, name: 'Cabo Verde', aliases: ['Cape Verde'], code: 'CPV', flag: '🇨🇻', group: 'H' },
  { id: 31, name: 'Saudi Arabia', code: 'KSA', flag: '🇸🇦', group: 'H' },
  { id: 32, name: 'Uruguay', code: 'URU', flag: '🇺🇾', group: 'H' },
  { id: 33, name: 'France', code: 'FRA', flag: '🇫🇷', group: 'I' },
  { id: 34, name: 'Senegal', code: 'SEN', flag: '🇸🇳', group: 'I' },
  { id: 35, name: 'Iraq', code: 'IRQ', flag: '🇮🇶', group: 'I' },
  { id: 36, name: 'Norway', code: 'NOR', flag: '🇳🇴', group: 'I' },
  { id: 37, name: 'Argentina', code: 'ARG', flag: '🇦🇷', group: 'J' },
  { id: 38, name: 'Algeria', code: 'ALG', flag: '🇩🇿', group: 'J' },
  { id: 39, name: 'Austria', code: 'AUT', flag: '🇦🇹', group: 'J' },
  { id: 40, name: 'Jordan', code: 'JOR', flag: '🇯🇴', group: 'J' },
  { id: 41, name: 'Portugal', code: 'POR', flag: '🇵🇹', group: 'K' },
  { id: 42, name: 'Congo DR', aliases: ['DR Congo'], code: 'COD', flag: '🇨🇩', group: 'K' },
  { id: 43, name: 'Uzbekistan', code: 'UZB', flag: '🇺🇿', group: 'K' },
  { id: 44, name: 'Colombia', code: 'COL', flag: '🇨🇴', group: 'K' },
  { id: 45, name: 'England', code: 'ENG', flag: '🏴\u{e0067}🏴\u{e0062}🏴\u{e0065}🏴\u{e006e}🏴\u{e0067}🏴\u{e007f}', group: 'L' }, // England emoji
  { id: 46, name: 'Croatia', code: 'CRO', flag: '🇭🇷', group: 'L' },
  { id: 47, name: 'Ghana', code: 'GHA', flag: '🇬🇭', group: 'L' },
  { id: 48, name: 'Panama', code: 'PAN', flag: '🇵🇦', group: 'L' }
];

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

function findTeam(name) {
  const norm = name.trim().toLowerCase();
  const found = teams.find(t => 
    t.name.toLowerCase() === norm || 
    (t.aliases && t.aliases.some(a => a.toLowerCase() === norm))
  );
  if (!found) {
    console.error(`Team not found: ${name}`);
    return { name, code: 'TBD', flag: '🏳️' };
  }
  return {
    name: found.name,
    code: found.code,
    flag: found.flag
  };
}

const parsed = [];
const lines = rawFixtures.trim().split('\n');
lines.forEach((line, index) => {
  const parts = line.split('\t');
  if (parts.length < 5) return;
  const dateStr = parts[0].trim();
  const matchStr = parts[1].trim();
  const group = parts[2].trim();
  const venue = parts[3].trim();
  const time = parts[4].trim();

  const teamsPart = matchStr.split(' vs ');
  const home = findTeam(teamsPart[0]);
  const away = findTeam(teamsPart[1]);

  const venueInfo = venueMap[venue] || { stadium: venue, city: venue };

  parsed.push({
    id: index + 1,
    homeTeam: home,
    awayTeam: away,
    date: `${dateStr}, 2026`,
    time: time,
    stadium: venueInfo.stadium,
    city: venueInfo.city,
    group: group,
    stage: 'Group Stage',
    score: null,
    isLive: false,
    minute: null
  });
});

const fileContent = `const fixtures = ${JSON.stringify(parsed, null, 2)};\n\nexport default fixtures;\n`;
fs.writeFileSync('E:/React Practice/FIFA-World-Cup-2026/src/data/fixtures.js', fileContent);
console.log('Successfully wrote parsed fixtures to fixtures.js!');
