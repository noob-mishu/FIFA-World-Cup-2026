const fixtures = [
  {
    "id": 1,
    "homeTeam": {
      "name": "Mexico",
      "code": "MEX",
      "flag": "🇲🇽"
    },
    "awayTeam": {
      "name": "South Africa",
      "code": "RSA",
      "flag": "🇿🇦"
    },
    "date": "June 11, 2026",
    "time": "01:00",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 2,
    "homeTeam": {
      "name": "Korea Republic",
      "code": "KOR",
      "flag": "🇰🇷"
    },
    "awayTeam": {
      "name": "Czechia",
      "code": "CZE",
      "flag": "🇨🇿"
    },
    "date": "June 11, 2026",
    "time": "08:00",
    "stadium": "Estadio Guadalajara",
    "city": "Guadalajara, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 3,
    "homeTeam": {
      "name": "Canada",
      "code": "CAN",
      "flag": "🇨🇦"
    },
    "awayTeam": {
      "name": "Bosnia and Herzegovina",
      "code": "BIH",
      "flag": "🇧🇦"
    },
    "date": "June 12, 2026",
    "time": "01:00",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 4,
    "homeTeam": {
      "name": "USA",
      "code": "USA",
      "flag": "🇺🇸"
    },
    "awayTeam": {
      "name": "Paraguay",
      "code": "PAR",
      "flag": "🇵🇾"
    },
    "date": "June 12, 2026",
    "time": "07:00",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 5,
    "homeTeam": {
      "name": "Haiti",
      "code": "HAI",
      "flag": "🇭🇹"
    },
    "awayTeam": {
      "name": "Scotland",
      "code": "SCO",
      "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    },
    "date": "June 13, 2026",
    "time": "07:00",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 6,
    "homeTeam": {
      "name": "Australia",
      "code": "AUS",
      "flag": "🇦🇺"
    },
    "awayTeam": {
      "name": "Türkiye",
      "code": "TUR",
      "flag": "🇹🇷"
    },
    "date": "June 13, 2026",
    "time": "10:00",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 7,
    "homeTeam": {
      "name": "Brazil",
      "code": "BRA",
      "flag": "🇧🇷"
    },
    "awayTeam": {
      "name": "Morocco",
      "code": "MAR",
      "flag": "🇲🇦"
    },
    "date": "June 13, 2026",
    "time": "04:00",
    "stadium": "MetLife Stadium",
    "city": "New York / New Jersey",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 8,
    "homeTeam": {
      "name": "Qatar",
      "code": "QAT",
      "flag": "🇶🇦"
    },
    "awayTeam": {
      "name": "Switzerland",
      "code": "SUI",
      "flag": "🇨🇭"
    },
    "date": "June 13, 2026",
    "time": "01:00",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 9,
    "homeTeam": {
      "name": "Côte d'Ivoire",
      "code": "CIV",
      "flag": "🇨🇮"
    },
    "awayTeam": {
      "name": "Ecuador",
      "code": "ECU",
      "flag": "🇪🇨"
    },
    "date": "June 14, 2026",
    "time": "05:00",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 10,
    "homeTeam": {
      "name": "Germany",
      "code": "GER",
      "flag": "🇩🇪"
    },
    "awayTeam": {
      "name": "Curaçao",
      "code": "CUW",
      "flag": "🇨🇼"
    },
    "date": "June 14, 2026",
    "time": "23:00",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 11,
    "homeTeam": {
      "name": "Netherlands",
      "code": "NED",
      "flag": "🇳🇱"
    },
    "awayTeam": {
      "name": "Japan",
      "code": "JPN",
      "flag": "🇯🇵"
    },
    "date": "June 14, 2026",
    "time": "02:00",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 12,
    "homeTeam": {
      "name": "Sweden",
      "code": "SWE",
      "flag": "🇸🇪"
    },
    "awayTeam": {
      "name": "Tunisia",
      "code": "TUN",
      "flag": "🇹🇳"
    },
    "date": "June 14, 2026",
    "time": "08:00",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 13,
    "homeTeam": {
      "name": "Saudi Arabia",
      "code": "KSA",
      "flag": "🇸🇦"
    },
    "awayTeam": {
      "name": "Uruguay",
      "code": "URU",
      "flag": "🇺🇾"
    },
    "date": "June 15, 2026",
    "time": "04:00",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 14,
    "homeTeam": {
      "name": "Spain",
      "code": "ESP",
      "flag": "🇪🇸"
    },
    "awayTeam": {
      "name": "Cabo Verde",
      "code": "CPV",
      "flag": "🇨🇻"
    },
    "date": "June 15, 2026",
    "time": "22:00",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 15,
    "homeTeam": {
      "name": "IR Iran",
      "code": "IRN",
      "flag": "🇮🇷"
    },
    "awayTeam": {
      "name": "New Zealand",
      "code": "NZL",
      "flag": "🇳🇿"
    },
    "date": "June 15, 2026",
    "time": "07:00",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 16,
    "homeTeam": {
      "name": "Belgium",
      "code": "BEL",
      "flag": "🇧🇪"
    },
    "awayTeam": {
      "name": "Egypt",
      "code": "EGY",
      "flag": "🇪🇬"
    },
    "date": "June 15, 2026",
    "time": "01:00",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 17,
    "homeTeam": {
      "name": "France",
      "code": "FRA",
      "flag": "🇫🇷"
    },
    "awayTeam": {
      "name": "Senegal",
      "code": "SEN",
      "flag": "🇸🇳"
    },
    "date": "June 16, 2026",
    "time": "01:00",
    "stadium": "MetLife Stadium",
    "city": "New York / New Jersey",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 18,
    "homeTeam": {
      "name": "Iraq",
      "code": "IRQ",
      "flag": "🇮🇶"
    },
    "awayTeam": {
      "name": "Norway",
      "code": "NOR",
      "flag": "🇳🇴"
    },
    "date": "June 16, 2026",
    "time": "04:00",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 19,
    "homeTeam": {
      "name": "Argentina",
      "code": "ARG",
      "flag": "🇦🇷"
    },
    "awayTeam": {
      "name": "Algeria",
      "code": "ALG",
      "flag": "🇩🇿"
    },
    "date": "June 16, 2026",
    "time": "07:00",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 20,
    "homeTeam": {
      "name": "Austria",
      "code": "AUT",
      "flag": "🇦🇹"
    },
    "awayTeam": {
      "name": "Jordan",
      "code": "JOR",
      "flag": "🇯🇴"
    },
    "date": "June 16, 2026",
    "time": "10:00",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 21,
    "homeTeam": {
      "name": "Ghana",
      "code": "GHA",
      "flag": "🇬🇭"
    },
    "awayTeam": {
      "name": "Panama",
      "code": "PAN",
      "flag": "🇵🇦"
    },
    "date": "June 17, 2026",
    "time": "01:00",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 22,
    "homeTeam": {
      "name": "England",
      "code": "ENG",
      "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    },
    "awayTeam": {
      "name": "Croatia",
      "code": "CRO",
      "flag": "🇭🇷"
    },
    "date": "June 17, 2026",
    "time": "04:00",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 23,
    "homeTeam": {
      "name": "Portugal",
      "code": "POR",
      "flag": "🇵🇹"
    },
    "awayTeam": {
      "name": "Congo DR",
      "code": "COD",
      "flag": "🇨🇩"
    },
    "date": "June 17, 2026",
    "time": "23:00",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 24,
    "homeTeam": {
      "name": "Uzbekistan",
      "code": "UZB",
      "flag": "🇺🇿"
    },
    "awayTeam": {
      "name": "Colombia",
      "code": "COL",
      "flag": "🇨🇴"
    },
    "date": "June 17, 2026",
    "time": "07:00",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 25,
    "homeTeam": {
      "name": "Czechia",
      "code": "CZE",
      "flag": "🇨🇿"
    },
    "awayTeam": {
      "name": "South Africa",
      "code": "RSA",
      "flag": "🇿🇦"
    },
    "date": "June 18, 2026",
    "time": "01:00",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 26,
    "homeTeam": {
      "name": "Switzerland",
      "code": "SUI",
      "flag": "🇨🇭"
    },
    "awayTeam": {
      "name": "Bosnia and Herzegovina",
      "code": "BIH",
      "flag": "🇧🇦"
    },
    "date": "June 18, 2026",
    "time": "04:00",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 27,
    "homeTeam": {
      "name": "Canada",
      "code": "CAN",
      "flag": "🇨🇦"
    },
    "awayTeam": {
      "name": "Qatar",
      "code": "QAT",
      "flag": "🇶🇦"
    },
    "date": "June 18, 2026",
    "time": "07:00",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 28,
    "homeTeam": {
      "name": "Mexico",
      "code": "MEX",
      "flag": "🇲🇽"
    },
    "awayTeam": {
      "name": "Korea Republic",
      "code": "KOR",
      "flag": "🇰🇷"
    },
    "date": "June 18, 2026",
    "time": "10:00",
    "stadium": "Estadio Guadalajara",
    "city": "Guadalajara, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 29,
    "homeTeam": {
      "name": "Brazil",
      "code": "BRA",
      "flag": "🇧🇷"
    },
    "awayTeam": {
      "name": "Haiti",
      "code": "HAI",
      "flag": "🇭🇹"
    },
    "date": "June 19, 2026",
    "time": "06:30",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 30,
    "homeTeam": {
      "name": "Scotland",
      "code": "SCO",
      "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    },
    "awayTeam": {
      "name": "Morocco",
      "code": "MAR",
      "flag": "🇲🇦"
    },
    "date": "June 19, 2026",
    "time": "04:00",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 31,
    "homeTeam": {
      "name": "Türkiye",
      "code": "TUR",
      "flag": "🇹🇷"
    },
    "awayTeam": {
      "name": "Paraguay",
      "code": "PAR",
      "flag": "🇵🇾"
    },
    "date": "June 19, 2026",
    "time": "09:00",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 32,
    "homeTeam": {
      "name": "USA",
      "code": "USA",
      "flag": "🇺🇸"
    },
    "awayTeam": {
      "name": "Australia",
      "code": "AUS",
      "flag": "🇦🇺"
    },
    "date": "June 19, 2026",
    "time": "01:00",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 33,
    "homeTeam": {
      "name": "Germany",
      "code": "GER",
      "flag": "🇩🇪"
    },
    "awayTeam": {
      "name": "Côte d'Ivoire",
      "code": "CIV",
      "flag": "🇨🇮"
    },
    "date": "June 20, 2026",
    "time": "02:00",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 34,
    "homeTeam": {
      "name": "Ecuador",
      "code": "ECU",
      "flag": "🇪🇨"
    },
    "awayTeam": {
      "name": "Curaçao",
      "code": "CUW",
      "flag": "🇨🇼"
    },
    "date": "June 20, 2026",
    "time": "06:00",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 35,
    "homeTeam": {
      "name": "Netherlands",
      "code": "NED",
      "flag": "🇳🇱"
    },
    "awayTeam": {
      "name": "Sweden",
      "code": "SWE",
      "flag": "🇸🇪"
    },
    "date": "June 20, 2026",
    "time": "23:00",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 36,
    "homeTeam": {
      "name": "Tunisia",
      "code": "TUN",
      "flag": "🇹🇳"
    },
    "awayTeam": {
      "name": "Japan",
      "code": "JPN",
      "flag": "🇯🇵"
    },
    "date": "June 20, 2026",
    "time": "10:00",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 37,
    "homeTeam": {
      "name": "Uruguay",
      "code": "URU",
      "flag": "🇺🇾"
    },
    "awayTeam": {
      "name": "Cabo Verde",
      "code": "CPV",
      "flag": "🇨🇻"
    },
    "date": "June 21, 2026",
    "time": "04:00",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 38,
    "homeTeam": {
      "name": "Spain",
      "code": "ESP",
      "flag": "🇪🇸"
    },
    "awayTeam": {
      "name": "Saudi Arabia",
      "code": "KSA",
      "flag": "🇸🇦"
    },
    "date": "June 21, 2026",
    "time": "22:00",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 39,
    "homeTeam": {
      "name": "Belgium",
      "code": "BEL",
      "flag": "🇧🇪"
    },
    "awayTeam": {
      "name": "IR Iran",
      "code": "IRN",
      "flag": "🇮🇷"
    },
    "date": "June 21, 2026",
    "time": "01:00",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 40,
    "homeTeam": {
      "name": "New Zealand",
      "code": "NZL",
      "flag": "🇳🇿"
    },
    "awayTeam": {
      "name": "Egypt",
      "code": "EGY",
      "flag": "🇪🇬"
    },
    "date": "June 21, 2026",
    "time": "07:00",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 41,
    "homeTeam": {
      "name": "Norway",
      "code": "NOR",
      "flag": "🇳🇴"
    },
    "awayTeam": {
      "name": "Senegal",
      "code": "SEN",
      "flag": "🇸🇳"
    },
    "date": "June 22, 2026",
    "time": "06:00",
    "stadium": "MetLife Stadium",
    "city": "New York / New Jersey",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 42,
    "homeTeam": {
      "name": "France",
      "code": "FRA",
      "flag": "🇫🇷"
    },
    "awayTeam": {
      "name": "Iraq",
      "code": "IRQ",
      "flag": "🇮🇶"
    },
    "date": "June 22, 2026",
    "time": "03:00",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 43,
    "homeTeam": {
      "name": "Argentina",
      "code": "ARG",
      "flag": "🇦🇷"
    },
    "awayTeam": {
      "name": "Austria",
      "code": "AUT",
      "flag": "🇦🇹"
    },
    "date": "June 22, 2026",
    "time": "23:00",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 44,
    "homeTeam": {
      "name": "Jordan",
      "code": "JOR",
      "flag": "🇯🇴"
    },
    "awayTeam": {
      "name": "Algeria",
      "code": "ALG",
      "flag": "🇩🇿"
    },
    "date": "June 22, 2026",
    "time": "09:00",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 45,
    "homeTeam": {
      "name": "England",
      "code": "ENG",
      "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    },
    "awayTeam": {
      "name": "Ghana",
      "code": "GHA",
      "flag": "🇬🇭"
    },
    "date": "June 23, 2026",
    "time": "02:00",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 46,
    "homeTeam": {
      "name": "Panama",
      "code": "PAN",
      "flag": "🇵🇦"
    },
    "awayTeam": {
      "name": "Croatia",
      "code": "CRO",
      "flag": "🇭🇷"
    },
    "date": "June 23, 2026",
    "time": "05:00",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 47,
    "homeTeam": {
      "name": "Portugal",
      "code": "POR",
      "flag": "🇵🇹"
    },
    "awayTeam": {
      "name": "Uzbekistan",
      "code": "UZB",
      "flag": "🇺🇿"
    },
    "date": "June 23, 2026",
    "time": "23:00",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 48,
    "homeTeam": {
      "name": "Colombia",
      "code": "COL",
      "flag": "🇨🇴"
    },
    "awayTeam": {
      "name": "Congo DR",
      "code": "COD",
      "flag": "🇨🇩"
    },
    "date": "June 23, 2026",
    "time": "08:00",
    "stadium": "Estadio Guadalajara",
    "city": "Guadalajara, Mexico",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 49,
    "homeTeam": {
      "name": "Scotland",
      "code": "SCO",
      "flag": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
    },
    "awayTeam": {
      "name": "Brazil",
      "code": "BRA",
      "flag": "🇧🇷"
    },
    "date": "June 24, 2026",
    "time": "04:00",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 50,
    "homeTeam": {
      "name": "Morocco",
      "code": "MAR",
      "flag": "🇲🇦"
    },
    "awayTeam": {
      "name": "Haiti",
      "code": "HAI",
      "flag": "🇭🇹"
    },
    "date": "June 24, 2026",
    "time": "04:00",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 51,
    "homeTeam": {
      "name": "Switzerland",
      "code": "SUI",
      "flag": "🇨🇭"
    },
    "awayTeam": {
      "name": "Canada",
      "code": "CAN",
      "flag": "🇨🇦"
    },
    "date": "June 24, 2026",
    "time": "01:00",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 52,
    "homeTeam": {
      "name": "Bosnia and Herzegovina",
      "code": "BIH",
      "flag": "🇧🇦"
    },
    "awayTeam": {
      "name": "Qatar",
      "code": "QAT",
      "flag": "🇶🇦"
    },
    "date": "June 24, 2026",
    "time": "01:00",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 53,
    "homeTeam": {
      "name": "Czechia",
      "code": "CZE",
      "flag": "🇨🇿"
    },
    "awayTeam": {
      "name": "Mexico",
      "code": "MEX",
      "flag": "🇲🇽"
    },
    "date": "June 24, 2026",
    "time": "07:00",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 54,
    "homeTeam": {
      "name": "South Africa",
      "code": "RSA",
      "flag": "🇿🇦"
    },
    "awayTeam": {
      "name": "Korea Republic",
      "code": "KOR",
      "flag": "🇰🇷"
    },
    "date": "June 24, 2026",
    "time": "07:00",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 55,
    "homeTeam": {
      "name": "Curaçao",
      "code": "CUW",
      "flag": "🇨🇼"
    },
    "awayTeam": {
      "name": "Côte d'Ivoire",
      "code": "CIV",
      "flag": "🇨🇮"
    },
    "date": "June 25, 2026",
    "time": "02:00",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 56,
    "homeTeam": {
      "name": "Ecuador",
      "code": "ECU",
      "flag": "🇪🇨"
    },
    "awayTeam": {
      "name": "Germany",
      "code": "GER",
      "flag": "🇩🇪"
    },
    "date": "June 25, 2026",
    "time": "02:00",
    "stadium": "MetLife Stadium",
    "city": "New York / New Jersey",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 57,
    "homeTeam": {
      "name": "Japan",
      "code": "JPN",
      "flag": "🇯🇵"
    },
    "awayTeam": {
      "name": "Sweden",
      "code": "SWE",
      "flag": "🇸🇪"
    },
    "date": "June 25, 2026",
    "time": "05:00",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 58,
    "homeTeam": {
      "name": "Tunisia",
      "code": "TUN",
      "flag": "🇹🇳"
    },
    "awayTeam": {
      "name": "Netherlands",
      "code": "NED",
      "flag": "🇳🇱"
    },
    "date": "June 25, 2026",
    "time": "05:00",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 59,
    "homeTeam": {
      "name": "Türkiye",
      "code": "TUR",
      "flag": "🇹🇷"
    },
    "awayTeam": {
      "name": "USA",
      "code": "USA",
      "flag": "🇺🇸"
    },
    "date": "June 25, 2026",
    "time": "08:00",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 60,
    "homeTeam": {
      "name": "Paraguay",
      "code": "PAR",
      "flag": "🇵🇾"
    },
    "awayTeam": {
      "name": "Australia",
      "code": "AUS",
      "flag": "🇦🇺"
    },
    "date": "June 25, 2026",
    "time": "08:00",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 61,
    "homeTeam": {
      "name": "Norway",
      "code": "NOR",
      "flag": "🇳🇴"
    },
    "awayTeam": {
      "name": "France",
      "code": "FRA",
      "flag": "🇫🇷"
    },
    "date": "June 26, 2026",
    "time": "01:00",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 62,
    "homeTeam": {
      "name": "Senegal",
      "code": "SEN",
      "flag": "🇸🇳"
    },
    "awayTeam": {
      "name": "Iraq",
      "code": "IRQ",
      "flag": "🇮🇶"
    },
    "date": "June 26, 2026",
    "time": "01:00",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "I",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 63,
    "homeTeam": {
      "name": "Egypt",
      "code": "EGY",
      "flag": "🇪🇬"
    },
    "awayTeam": {
      "name": "IR Iran",
      "code": "IRN",
      "flag": "🇮🇷"
    },
    "date": "June 26, 2026",
    "time": "09:00",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 64,
    "homeTeam": {
      "name": "New Zealand",
      "code": "NZL",
      "flag": "🇳🇿"
    },
    "awayTeam": {
      "name": "Belgium",
      "code": "BEL",
      "flag": "🇧🇪"
    },
    "date": "June 26, 2026",
    "time": "09:00",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 65,
    "homeTeam": {
      "name": "Cabo Verde",
      "code": "CPV",
      "flag": "🇨🇻"
    },
    "awayTeam": {
      "name": "Saudi Arabia",
      "code": "KSA",
      "flag": "🇸🇦"
    },
    "date": "June 26, 2026",
    "time": "06:00",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 66,
    "homeTeam": {
      "name": "Uruguay",
      "code": "URU",
      "flag": "🇺🇾"
    },
    "awayTeam": {
      "name": "Spain",
      "code": "ESP",
      "flag": "🇪🇸"
    },
    "date": "June 26, 2026",
    "time": "06:00",
    "stadium": "Estadio Guadalajara",
    "city": "Guadalajara, Mexico",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 67,
    "homeTeam": {
      "name": "Panama",
      "code": "PAN",
      "flag": "🇵🇦"
    },
    "awayTeam": {
      "name": "England",
      "code": "ENG",
      "flag": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
    },
    "date": "June 27, 2026",
    "time": "03:00",
    "stadium": "MetLife Stadium",
    "city": "New York / New Jersey",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 68,
    "homeTeam": {
      "name": "Croatia",
      "code": "CRO",
      "flag": "🇭🇷"
    },
    "awayTeam": {
      "name": "Ghana",
      "code": "GHA",
      "flag": "🇬🇭"
    },
    "date": "June 27, 2026",
    "time": "03:00",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 69,
    "homeTeam": {
      "name": "Algeria",
      "code": "ALG",
      "flag": "🇩🇿"
    },
    "awayTeam": {
      "name": "Austria",
      "code": "AUT",
      "flag": "🇦🇹"
    },
    "date": "June 27, 2026",
    "time": "08:00",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 70,
    "homeTeam": {
      "name": "Jordan",
      "code": "JOR",
      "flag": "🇯🇴"
    },
    "awayTeam": {
      "name": "Argentina",
      "code": "ARG",
      "flag": "🇦🇷"
    },
    "date": "June 27, 2026",
    "time": "08:00",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 71,
    "homeTeam": {
      "name": "Colombia",
      "code": "COL",
      "flag": "🇨🇴"
    },
    "awayTeam": {
      "name": "Portugal",
      "code": "POR",
      "flag": "🇵🇹"
    },
    "date": "June 27, 2026",
    "time": "05:30",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 72,
    "homeTeam": {
      "name": "Congo DR",
      "code": "COD",
      "flag": "🇨🇩"
    },
    "awayTeam": {
      "name": "Uzbekistan",
      "code": "UZB",
      "flag": "🇺🇿"
    },
    "date": "June 27, 2026",
    "time": "05:30",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ ROUND OF 32 ═══ */
  {
    "id": 73,
    "homeTeam": { "name": "Group A runners-up", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group B runners-up", "code": "TBD", "flag": null },
    "date": "June 28, 2026",
    "time": "15:00",
    "stadium": "Los Angeles Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 74,
    "homeTeam": { "name": "Group E winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group A/B/C/D/F third place", "code": "TBD", "flag": null },
    "date": "June 29, 2026",
    "time": "13:00",
    "stadium": "Boston Stadium",
    "city": "Boston, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 75,
    "homeTeam": { "name": "Group F winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group C runners-up", "code": "TBD", "flag": null },
    "date": "June 29, 2026",
    "time": "17:00",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 76,
    "homeTeam": { "name": "Group C winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group F runners-up", "code": "TBD", "flag": null },
    "date": "June 29, 2026",
    "time": "20:00",
    "stadium": "Houston Stadium",
    "city": "Houston, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 77,
    "homeTeam": { "name": "Group I winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group C/D/F/G/H third place", "code": "TBD", "flag": null },
    "date": "June 30, 2026",
    "time": "14:00",
    "stadium": "New York New Jersey Stadium",
    "city": "New York New Jersey, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 78,
    "homeTeam": { "name": "Group E runners up", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group I runners-up", "code": "TBD", "flag": null },
    "date": "June 30, 2026",
    "time": "18:00",
    "stadium": "Dallas Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 79,
    "homeTeam": { "name": "Group A winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group C/E/F/H/I third place", "code": "TBD", "flag": null },
    "date": "June 30, 2026",
    "time": "21:00",
    "stadium": "Mexico City Stadium",
    "city": "Mexico City, Mexico",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 80,
    "homeTeam": { "name": "Group L winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group E/H/I/J/K third place", "code": "TBD", "flag": null },
    "date": "July 1, 2026",
    "time": "13:00",
    "stadium": "Atlanta Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 81,
    "homeTeam": { "name": "Group D winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group B/E/F/I/J third place", "code": "TBD", "flag": null },
    "date": "July 1, 2026",
    "time": "17:00",
    "stadium": "San Francisco Bay Area Stadium",
    "city": "San Francisco, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 82,
    "homeTeam": { "name": "Group G winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group A/E/H/I/J third place", "code": "TBD", "flag": null },
    "date": "July 1, 2026",
    "time": "20:00",
    "stadium": "Seattle Stadium",
    "city": "Seattle, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 83,
    "homeTeam": { "name": "Group K runners-up", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group L runners-up", "code": "TBD", "flag": null },
    "date": "July 2, 2026",
    "time": "14:00",
    "stadium": "Toronto Stadium",
    "city": "Toronto, Canada",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 84,
    "homeTeam": { "name": "Group H winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group J runners-up", "code": "TBD", "flag": null },
    "date": "July 2, 2026",
    "time": "18:00",
    "stadium": "Los Angeles Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 85,
    "homeTeam": { "name": "Group B winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group E/F/G/I/J third place", "code": "TBD", "flag": null },
    "date": "July 2, 2026",
    "time": "21:00",
    "stadium": "BC Place Vancouver",
    "city": "Vancouver, Canada",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 86,
    "homeTeam": { "name": "Group J winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group H runners-up", "code": "TBD", "flag": null },
    "date": "July 3, 2026",
    "time": "13:00",
    "stadium": "Miami Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 87,
    "homeTeam": { "name": "Group K winners", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group D/E/I/J/L third place", "code": "TBD", "flag": null },
    "date": "July 3, 2026",
    "time": "17:00",
    "stadium": "Kansas City Stadium",
    "city": "Kansas City, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 88,
    "homeTeam": { "name": "Group D runners-up", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Group G runners-up", "code": "TBD", "flag": null },
    "date": "July 3, 2026",
    "time": "20:00",
    "stadium": "Dallas Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ ROUND OF 16 ═══ */
  {
    "id": 89,
    "homeTeam": { "name": "Winner match 74", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 77", "code": "TBD", "flag": null },
    "date": "July 4, 2026",
    "time": "14:00",
    "stadium": "Philadelphia Stadium",
    "city": "Philadelphia, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 90,
    "homeTeam": { "name": "Winner match 73", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 75", "code": "TBD", "flag": null },
    "date": "July 4, 2026",
    "time": "18:00",
    "stadium": "Houston Stadium",
    "city": "Houston, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 91,
    "homeTeam": { "name": "Winner match 76", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 78", "code": "TBD", "flag": null },
    "date": "July 5, 2026",
    "time": "14:00",
    "stadium": "New York New Jersey Stadium",
    "city": "New York New Jersey, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 92,
    "homeTeam": { "name": "Winner match 79", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 80", "code": "TBD", "flag": null },
    "date": "July 5, 2026",
    "time": "18:00",
    "stadium": "Mexico City Stadium",
    "city": "Mexico City, Mexico",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 93,
    "homeTeam": { "name": "Winner match 83", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 84", "code": "TBD", "flag": null },
    "date": "July 6, 2026",
    "time": "14:00",
    "stadium": "Dallas Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 94,
    "homeTeam": { "name": "Winner match 81", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 82", "code": "TBD", "flag": null },
    "date": "July 6, 2026",
    "time": "18:00",
    "stadium": "Seattle Stadium",
    "city": "Seattle, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 95,
    "homeTeam": { "name": "Winner match 86", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 88", "code": "TBD", "flag": null },
    "date": "July 7, 2026",
    "time": "14:00",
    "stadium": "Atlanta Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 96,
    "homeTeam": { "name": "Winner match 85", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 87", "code": "TBD", "flag": null },
    "date": "July 7, 2026",
    "time": "18:00",
    "stadium": "BC Place Vancouver",
    "city": "Vancouver, Canada",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ QUARTER-FINALS ═══ */
  {
    "id": 97,
    "homeTeam": { "name": "Winner match 89", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 90", "code": "TBD", "flag": null },
    "date": "July 9, 2026",
    "time": "14:00",
    "stadium": "Boston Stadium",
    "city": "Boston, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 98,
    "homeTeam": { "name": "Winner match 93", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 94", "code": "TBD", "flag": null },
    "date": "July 10, 2026",
    "time": "18:00",
    "stadium": "Los Angeles Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 99,
    "homeTeam": { "name": "Winner match 91", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 92", "code": "TBD", "flag": null },
    "date": "July 11, 2026",
    "time": "14:00",
    "stadium": "Miami Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 100,
    "homeTeam": { "name": "Winner match 95", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 96", "code": "TBD", "flag": null },
    "date": "July 11, 2026",
    "time": "18:00",
    "stadium": "Kansas City Stadium",
    "city": "Kansas City, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ SEMI-FINALS ═══ */
  {
    "id": 101,
    "homeTeam": { "name": "Winner match 97", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 98", "code": "TBD", "flag": null },
    "date": "July 14, 2026",
    "time": "18:00",
    "stadium": "Dallas Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Semi-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 102,
    "homeTeam": { "name": "Winner match 99", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 100", "code": "TBD", "flag": null },
    "date": "July 15, 2026",
    "time": "18:00",
    "stadium": "Atlanta Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Semi-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ BRONZE FINAL ═══ */
  {
    "id": 103,
    "homeTeam": { "name": "Runner-up match 101", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Runner-up match 102", "code": "TBD", "flag": null },
    "date": "July 18, 2026",
    "time": "16:00",
    "stadium": "Miami Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Bronze Final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  /* ═══ THE FINAL ═══ */
  {
    "id": 104,
    "homeTeam": { "name": "Winner match 101", "code": "TBD", "flag": null },
    "awayTeam": { "name": "Winner match 102", "code": "TBD", "flag": null },
    "date": "July 19, 2026",
    "time": "14:00",
    "stadium": "New York New Jersey Stadium",
    "city": "New York New Jersey, USA",
    "group": "Final",
    "stage": "Final",
    "score": null,
    "isLive": false,
    "minute": null
  }
];

export default fixtures;
