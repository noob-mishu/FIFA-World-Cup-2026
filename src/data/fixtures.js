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
    "date": "June 12, 2026",
    "time": "1:00 AM",
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
    "date": "June 12, 2026",
    "time": "8:00 AM",
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
    "date": "June 13, 2026",
    "time": "1:00 AM",
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
    "date": "June 13, 2026",
    "time": "7:00 AM",
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
      "name": "Qatar",
      "code": "QAT",
      "flag": "🇶🇦"
    },
    "awayTeam": {
      "name": "Switzerland",
      "code": "SUI",
      "flag": "🇨🇭"
    },
    "date": "June 14, 2026",
    "time": "1:00 AM",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 6,
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
    "date": "June 14, 2026",
    "time": "4:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 7,
    "homeTeam": {
      "name": "Haiti",
      "code": "HAI",
      "flag": "🇭🇹"
    },
    "awayTeam": {
      "name": "Scotland",
      "code": "SCO",
      "flag": "🏴󠁧🏴󠁢🏴󠁳🏴󠁣🏴󠁴🏴󠁿"
    },
    "date": "June 14, 2026",
    "time": "7:00 AM",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 8,
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
    "date": "June 14, 2026",
    "time": "10:00 AM",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 9,
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
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 10,
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
    "date": "June 15, 2026",
    "time": "2:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 11,
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
    "date": "June 15, 2026",
    "time": "5:00 AM",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "E",
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
    "date": "June 15, 2026",
    "time": "8:00 AM",
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
    "time": "10:00 PM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 14,
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
    "date": "June 16, 2026",
    "time": "1:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 15,
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
    "date": "June 16, 2026",
    "time": "4:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 16,
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
    "date": "June 16, 2026",
    "time": "7:00 AM",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
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
    "date": "June 17, 2026",
    "time": "1:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
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
    "date": "June 17, 2026",
    "time": "4:00 AM",
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
    "date": "June 17, 2026",
    "time": "7:00 AM",
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
    "date": "June 17, 2026",
    "time": "10:00 AM",
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
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "K",
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
      "flag": "🏴󠁧🏴󠁢🏴󠁥🏴󠁮🏴󠁧🏴󠁿"
    },
    "awayTeam": {
      "name": "Croatia",
      "code": "CRO",
      "flag": "🇭🇷"
    },
    "date": "June 18, 2026",
    "time": "2:00 AM",
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
      "name": "Ghana",
      "code": "GHA",
      "flag": "🇬🇭"
    },
    "awayTeam": {
      "name": "Panama",
      "code": "PAN",
      "flag": "🇵🇦"
    },
    "date": "June 18, 2026",
    "time": "5:00 AM",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "L",
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
    "date": "June 18, 2026",
    "time": "8:00 AM",
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
    "time": "10:00 PM",
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
    "date": "June 19, 2026",
    "time": "1:00 AM",
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
    "date": "June 19, 2026",
    "time": "4:00 AM",
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
    "date": "June 19, 2026",
    "time": "7:00 AM",
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
      "name": "USA",
      "code": "USA",
      "flag": "🇺🇸"
    },
    "awayTeam": {
      "name": "Australia",
      "code": "AUS",
      "flag": "🇦🇺"
    },
    "date": "June 20, 2026",
    "time": "1:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "D",
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
      "flag": "🏴󠁧🏴󠁢🏴󠁳🏴󠁣🏴󠁴🏴󠁿"
    },
    "awayTeam": {
      "name": "Morocco",
      "code": "MAR",
      "flag": "🇲🇦"
    },
    "date": "June 20, 2026",
    "time": "4:00 AM",
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
      "name": "Brazil",
      "code": "BRA",
      "flag": "🇧🇷"
    },
    "awayTeam": {
      "name": "Haiti",
      "code": "HAI",
      "flag": "🇭🇹"
    },
    "date": "June 20, 2026",
    "time": "6:30 AM",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 32,
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
    "date": "June 20, 2026",
    "time": "9:00 AM",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "D",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 33,
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
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 34,
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
    "date": "June 21, 2026",
    "time": "2:00 AM",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 35,
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
    "date": "June 21, 2026",
    "time": "6:00 AM",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "E",
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
    "date": "June 21, 2026",
    "time": "10:00 AM",
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
    "time": "10:00 PM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 38,
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
    "date": "June 22, 2026",
    "time": "1:00 AM",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 39,
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
    "date": "June 22, 2026",
    "time": "4:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "H",
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
    "date": "June 22, 2026",
    "time": "7:00 AM",
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
    "time": "11:00 PM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "J",
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
    "date": "June 23, 2026",
    "time": "3:00 AM",
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
      "name": "Norway",
      "code": "NOR",
      "flag": "🇳🇴"
    },
    "awayTeam": {
      "name": "Senegal",
      "code": "SEN",
      "flag": "🇸🇳"
    },
    "date": "June 23, 2026",
    "time": "6:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "I",
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
    "date": "June 23, 2026",
    "time": "9:00 AM",
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
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 46,
    "homeTeam": {
      "name": "England",
      "code": "ENG",
      "flag": "🏴󠁧🏴󠁢🏴󠁥🏴󠁮🏴󠁧🏴󠁿"
    },
    "awayTeam": {
      "name": "Ghana",
      "code": "GHA",
      "flag": "🇬🇭"
    },
    "date": "June 24, 2026",
    "time": "2:00 AM",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "L",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 47,
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
    "date": "June 24, 2026",
    "time": "5:00 AM",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "L",
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
    "date": "June 24, 2026",
    "time": "8:00 AM",
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
      "name": "Switzerland",
      "code": "SUI",
      "flag": "🇨🇭"
    },
    "awayTeam": {
      "name": "Canada",
      "code": "CAN",
      "flag": "🇨🇦"
    },
    "date": "June 25, 2026",
    "time": "1:00 AM",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 50,
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
    "date": "June 25, 2026",
    "time": "1:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "B",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 51,
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
    "date": "June 25, 2026",
    "time": "4:00 AM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 52,
    "homeTeam": {
      "name": "Scotland",
      "code": "SCO",
      "flag": "🏴󠁧🏴󠁢🏴󠁳🏴󠁣🏴󠁴🏴󠁿"
    },
    "awayTeam": {
      "name": "Brazil",
      "code": "BRA",
      "flag": "🇧🇷"
    },
    "date": "June 25, 2026",
    "time": "4:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "C",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 53,
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
    "date": "June 25, 2026",
    "time": "7:00 AM",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "A",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 54,
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
    "date": "June 25, 2026",
    "time": "7:00 AM",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
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
    "date": "June 26, 2026",
    "time": "2:00 AM",
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
    "date": "June 26, 2026",
    "time": "2:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "E",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 57,
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
    "date": "June 26, 2026",
    "time": "5:00 AM",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "F",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 58,
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
    "date": "June 26, 2026",
    "time": "5:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
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
    "date": "June 26, 2026",
    "time": "8:00 AM",
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
    "date": "June 26, 2026",
    "time": "8:00 AM",
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
    "date": "June 27, 2026",
    "time": "1:00 AM",
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
    "date": "June 27, 2026",
    "time": "1:00 AM",
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
      "name": "Cabo Verde",
      "code": "CPV",
      "flag": "🇨🇻"
    },
    "awayTeam": {
      "name": "Saudi Arabia",
      "code": "KSA",
      "flag": "🇸🇦"
    },
    "date": "June 27, 2026",
    "time": "6:00 AM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 64,
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
    "date": "June 27, 2026",
    "time": "6:00 AM",
    "stadium": "Estadio Guadalajara",
    "city": "Guadalajara, Mexico",
    "group": "H",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 65,
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
    "date": "June 27, 2026",
    "time": "9:00 AM",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "G",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 66,
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
    "date": "June 27, 2026",
    "time": "9:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "G",
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
      "flag": "🏴󠁧🏴󠁢🏴󠁥🏴󠁮🏴󠁧🏴󠁿"
    },
    "date": "June 28, 2026",
    "time": "3:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
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
    "date": "June 28, 2026",
    "time": "3:00 AM",
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
      "name": "Colombia",
      "code": "COL",
      "flag": "🇨🇴"
    },
    "awayTeam": {
      "name": "Portugal",
      "code": "POR",
      "flag": "🇵🇹"
    },
    "date": "June 28, 2026",
    "time": "5:30 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 70,
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
    "date": "June 28, 2026",
    "time": "5:30 AM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "K",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 71,
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
    "date": "June 28, 2026",
    "time": "8:00 AM",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 72,
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
    "date": "June 28, 2026",
    "time": "8:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "J",
    "stage": "Group Stage",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 73,
    "homeTeam": {
      "name": "2A",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2B",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "June 29, 2026",
    "time": "1:00 AM",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 74,
    "homeTeam": {
      "name": "1C",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2F",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "June 29, 2026",
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 75,
    "homeTeam": {
      "name": "1E",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3A/B/C/D/F",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "June 30, 2026",
    "time": "2:30 AM",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 76,
    "homeTeam": {
      "name": "1F",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2C",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "June 30, 2026",
    "time": "7:00 AM",
    "stadium": "Estadio Monterrey",
    "city": "Monterrey, Mexico",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 77,
    "homeTeam": {
      "name": "2E",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2I",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "June 30, 2026",
    "time": "11:00 PM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 78,
    "homeTeam": {
      "name": "1I",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3C/D/F/G/H",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 1, 2026",
    "time": "3:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 79,
    "homeTeam": {
      "name": "1A",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3C/E/F/H/I",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 1, 2026",
    "time": "7:00 AM",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 80,
    "homeTeam": {
      "name": "1L",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3E/H/I/J/K",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 1, 2026",
    "time": "10:00 PM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 81,
    "homeTeam": {
      "name": "1G",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3A/E/H/I/J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 2, 2026",
    "time": "2:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 82,
    "homeTeam": {
      "name": "1D",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3B/E/F/I/J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 2, 2026",
    "time": "6:00 AM",
    "stadium": "Levi's Stadium",
    "city": "San Francisco, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 83,
    "homeTeam": {
      "name": "1H",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 3, 2026",
    "time": "1:00 AM",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 84,
    "homeTeam": {
      "name": "2K",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2L",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 3, 2026",
    "time": "5:00 AM",
    "stadium": "BMO Field",
    "city": "Toronto, Canada",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 85,
    "homeTeam": {
      "name": "1B",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3E/F/G/I/J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 3, 2026",
    "time": "9:00 AM",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 86,
    "homeTeam": {
      "name": "2D",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2G",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 4, 2026",
    "time": "12:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 87,
    "homeTeam": {
      "name": "1J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2H",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 4, 2026",
    "time": "4:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 88,
    "homeTeam": {
      "name": "1K",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "3D/E/I/J/L",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 4, 2026",
    "time": "7:30 AM",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "Final",
    "stage": "Round of 32",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 89,
    "homeTeam": {
      "name": "2A/2B",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1F/2C",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 4, 2026",
    "time": "11:00 PM",
    "stadium": "NRG Stadium",
    "city": "Houston, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 90,
    "homeTeam": {
      "name": "1E/3ABCDF",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1I/33CDFGH",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 5, 2026",
    "time": "3:00 AM",
    "stadium": "Lincoln Financial Field",
    "city": "Philadelphia, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 91,
    "homeTeam": {
      "name": "1C/2F",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2E/2I",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 6, 2026",
    "time": "2:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 92,
    "homeTeam": {
      "name": "1A/3CEFHI",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1L/3EHIJK",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 6, 2026",
    "time": "6:00 AM",
    "stadium": "Estadio Azteca",
    "city": "Mexico City, Mexico",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 93,
    "homeTeam": {
      "name": "2K/2L",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1H/2J",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 7, 2026",
    "time": "1:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 94,
    "homeTeam": {
      "name": "1D/3BEFIJ",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1G/3AEHIJ",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 7, 2026",
    "time": "6:00 AM",
    "stadium": "Lumen Field",
    "city": "Seattle, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 95,
    "homeTeam": {
      "name": "1J/2H",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "2D/2G",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 7, 2026",
    "time": "10:00 PM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 96,
    "homeTeam": {
      "name": "1B/3EFGIJ",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "1K/3DEIJL",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 8, 2026",
    "time": "2:00 AM",
    "stadium": "BC Place",
    "city": "Vancouver, Canada",
    "group": "Final",
    "stage": "Round of 16",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 97,
    "homeTeam": {
      "name": "Winner match 89",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 90",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 10, 2026",
    "time": "2:00 AM",
    "stadium": "Gillette Stadium",
    "city": "Boston, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 98,
    "homeTeam": {
      "name": "Winner match 93",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 94",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 11, 2026",
    "time": "1:00 AM",
    "stadium": "SoFi Stadium",
    "city": "Los Angeles, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 99,
    "homeTeam": {
      "name": "Winner match 91",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 92",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 12, 2026",
    "time": "3:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 100,
    "homeTeam": {
      "name": "Winner match 95",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 96",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 12, 2026",
    "time": "7:00 AM",
    "stadium": "GEHA Field at Arrowhead Stadium",
    "city": "Kansas City, USA",
    "group": "Final",
    "stage": "Quarter-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 101,
    "homeTeam": {
      "name": "Winner match 97",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 98",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 15, 2026",
    "time": "1:00 AM",
    "stadium": "AT&T Stadium",
    "city": "Dallas, USA",
    "group": "Final",
    "stage": "Semi-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 102,
    "homeTeam": {
      "name": "Winner match 99",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 100",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 16, 2026",
    "time": "1:00 AM",
    "stadium": "Mercedes-Benz Stadium",
    "city": "Atlanta, USA",
    "group": "Final",
    "stage": "Semi-final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 103,
    "homeTeam": {
      "name": "Loser match 101",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Loser match 102",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 19, 2026",
    "time": "3:00 AM",
    "stadium": "Hard Rock Stadium",
    "city": "Miami, USA",
    "group": "Final",
    "stage": "Bronze Final",
    "score": null,
    "isLive": false,
    "minute": null
  },
  {
    "id": 104,
    "homeTeam": {
      "name": "Winner match 101",
      "code": "TBD",
      "flag": "🏳️"
    },
    "awayTeam": {
      "name": "Winner match 102",
      "code": "TBD",
      "flag": "🏳️"
    },
    "date": "July 20, 2026",
    "time": "1:00 AM",
    "stadium": "MetLife Stadium",
    "city": "East Rutherford, USA",
    "group": "Final",
    "stage": "Final",
    "score": null,
    "isLive": false,
    "minute": null
  }
];

export default fixtures;
