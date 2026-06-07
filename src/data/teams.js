const teams = [
  // Group A
  { id: 1, name: 'Mexico', code: 'MEX', flag: '🇲🇽', group: 'A', region: 'CONCACAF' },
  { id: 2, name: 'South Africa', code: 'RSA', flag: '🇿🇦', group: 'A', region: 'CAF' },
  { id: 3, name: 'Korea Republic', code: 'KOR', flag: '🇰🇷', group: 'A', region: 'AFC' },
  { id: 4, name: 'Czechia', code: 'CZE', flag: '🇨🇿', group: 'A', region: 'UEFA' },

  // Group B
  { id: 5, name: 'Canada', code: 'CAN', flag: '🇨🇦', group: 'B', region: 'CONCACAF' },
  { id: 6, name: 'Bosnia and Herzegovina', code: 'BIH', flag: '🇧🇦', group: 'B', region: 'UEFA' },
  { id: 7, name: 'Qatar', code: 'QAT', flag: '🇶🇦', group: 'B', region: 'AFC' },
  { id: 8, name: 'Switzerland', code: 'SUI', flag: '🇨🇭', group: 'B', region: 'UEFA' },

  // Group C
  { id: 9, name: 'Brazil', code: 'BRA', flag: '🇧🇷', group: 'C', region: 'CONMEBOL' },
  { id: 10, name: 'Morocco', code: 'MAR', flag: '🇲🇦', group: 'C', region: 'CAF' },
  { id: 11, name: 'Haiti', code: 'HAI', flag: '🇭🇹', group: 'C', region: 'CONCACAF' },
  { id: 12, name: 'Scotland', code: 'SCO', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', region: 'UEFA' },

  // Group D
  { id: 13, name: 'USA', code: 'USA', flag: '🇺🇸', group: 'D', region: 'CONCACAF' },
  { id: 14, name: 'Paraguay', code: 'PAR', flag: '🇵🇾', group: 'D', region: 'CONMEBOL' },
  { id: 15, name: 'Australia', code: 'AUS', flag: '🇦🇺', group: 'D', region: 'AFC' },
  { id: 16, name: 'Türkiye', code: 'TUR', flag: '🇹🇷', group: 'D', region: 'UEFA' },

  // Group E
  { id: 17, name: 'Germany', code: 'GER', flag: '🇩🇪', group: 'E', region: 'UEFA' },
  { id: 18, name: 'Curaçao', code: 'CUW', flag: '🇨🇼', group: 'E', region: 'CONCACAF' },
  { id: 19, name: 'Côte d\'Ivoire', code: 'CIV', flag: '🇨🇮', group: 'E', region: 'CAF' },
  { id: 20, name: 'Ecuador', code: 'ECU', flag: '🇪🇨', group: 'E', region: 'CONMEBOL' },

  // Group F
  { id: 21, name: 'Netherlands', code: 'NED', flag: '🇳🇱', group: 'F', region: 'UEFA' },
  { id: 22, name: 'Japan', code: 'JPN', flag: '🇯🇵', group: 'F', region: 'AFC' },
  { id: 23, name: 'Sweden', code: 'SWE', flag: '🇸🇪', group: 'F', region: 'UEFA' },
  { id: 24, name: 'Tunisia', code: 'TUN', flag: '🇹🇳', group: 'F', region: 'CAF' },

  // Group G
  { id: 25, name: 'Belgium', code: 'BEL', flag: '🇧🇪', group: 'G', region: 'UEFA' },
  { id: 26, name: 'Egypt', code: 'EGY', flag: '🇪🇬', group: 'G', region: 'CAF' },
  { id: 27, name: 'IR Iran', code: 'IRN', flag: '🇮🇷', group: 'G', region: 'AFC' },
  { id: 28, name: 'New Zealand', code: 'NZL', flag: '🇳🇿', group: 'G', region: 'OFC' },

  // Group H
  { id: 29, name: 'Spain', code: 'ESP', flag: '🇪🇸', group: 'H', region: 'UEFA' },
  { id: 30, name: 'Cabo Verde', code: 'CPV', flag: '🇨🇻', group: 'H', region: 'CAF' },
  { id: 31, name: 'Saudi Arabia', code: 'KSA', flag: '🇸🇦', group: 'H', region: 'AFC' },
  { id: 32, name: 'Uruguay', code: 'URU', flag: '🇺🇾', group: 'H', region: 'CONMEBOL' },

  // Group I
  { id: 33, name: 'France', code: 'FRA', flag: '🇫🇷', group: 'I', region: 'UEFA' },
  { id: 34, name: 'Senegal', code: 'SEN', flag: '🇸🇳', group: 'I', region: 'CAF' },
  { id: 35, name: 'Iraq', code: 'IRQ', flag: '🇮🇶', group: 'I', region: 'AFC' },
  { id: 36, name: 'Norway', code: 'NOR', flag: '🇳🇴', group: 'I', region: 'UEFA' },

  // Group J
  { id: 37, name: 'Argentina', code: 'ARG', flag: '🇦🇷', group: 'J', region: 'CONMEBOL' },
  { id: 38, name: 'Algeria', code: 'ALG', flag: '🇩🇿', group: 'J', region: 'CAF' },
  { id: 39, name: 'Austria', code: 'AUT', flag: '🇦🇹', group: 'J', region: 'UEFA' },
  { id: 40, name: 'Jordan', code: 'JOR', flag: '🇯🇴', group: 'J', region: 'AFC' },

  // Group K
  { id: 41, name: 'Portugal', code: 'POR', flag: '🇵🇹', group: 'K', region: 'UEFA' },
  { id: 42, name: 'Congo DR', code: 'COD', flag: '🇨🇩', group: 'K', region: 'CAF' },
  { id: 43, name: 'Uzbekistan', code: 'UZB', flag: '🇺🇿', group: 'K', region: 'AFC' },
  { id: 44, name: 'Colombia', code: 'COL', flag: '🇨🇴', group: 'K', region: 'CONMEBOL' },

  // Group L
  { id: 45, name: 'England', code: 'ENG', flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', region: 'UEFA' },
  { id: 46, name: 'Croatia', code: 'CRO', flag: '🇭🇷', group: 'L', region: 'UEFA' },
  { id: 47, name: 'Ghana', code: 'GHA', flag: '🇬🇭', group: 'L', region: 'CAF' },
  { id: 48, name: 'Panama', code: 'PAN', flag: '🇵🇦', group: 'L', region: 'CONCACAF' },
];

export default teams;
