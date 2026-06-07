const API_URL = 'https://openapi.programming-hero.com/api/all';

let flagMap = null;
let initPromise = null;

const codeToCountry = {
  'USA': 'United States',
  'MEX': 'Mexico',
  'MAR': 'Morocco',
  'JAM': 'Jamaica',
  'CAN': 'Canada',
  'BRA': 'Brazil',
  'COL': 'Colombia',
  'ECU': 'Ecuador',
  'ARG': 'Argentina',
  'CHI': 'Chile',
  'PER': 'Peru',
  'PAR': 'Paraguay',
  'GER': 'Germany',
  'JPN': 'Japan',
  'KOR': 'South Korea',
  'KSA': 'Saudi Arabia',
  'FRA': 'France',
  'DEN': 'Denmark',
  'NED': 'Netherlands',
  'AUT': 'Austria',
  'ENG': 'United Kingdom',
  'ESP': 'Spain',
  'POR': 'Portugal',
  'BEL': 'Belgium',
  'ITA': 'Italy',
  'CRO': 'Croatia',
  'SRB': 'Serbia',
  'SUI': 'Switzerland',
  'URU': 'Uruguay',
  'SEN': 'Senegal',
  'CMR': 'Cameroon',
  'NGA': 'Nigeria',
  'AUS': 'Australia',
  'IRN': 'Iran',
  'QAT': 'Qatar',
  'TUN': 'Tunisia',
  'POL': 'Poland',
  'SWE': 'Sweden',
  'CZE': 'Czechia',
  'SCO': 'United Kingdom',
  'EGY': 'Egypt',
  'GHA': 'Ghana',
  'CIV': 'Ivory Coast',
  'MLI': 'Mali',
  'CRC': 'Costa Rica',
  'HON': 'Honduras',
  'PAN': 'Panama',
  'NZL': 'New Zealand',
  
  // Mappings for the new 2026 World Cup groups
  'RSA': 'South Africa',
  'BIH': 'Bosnia and Herzegovina',
  'HAI': 'Haiti',
  'TUR': 'Turkey',
  'CUW': 'Curaçao',
  'CPV': 'Cape Verde',
  'IRQ': 'Iraq',
  'NOR': 'Norway',
  'ALG': 'Algeria',
  'JOR': 'Jordan',
  'COD': 'DR Congo',
  'UZB': 'Uzbekistan',
};

/**
 * Fetches all country data from the API, builds the internal lookup map,
 * and caches the result so subsequent calls resolve immediately.
 * @returns {Promise<void>}
 */
export function initFlagService() {
  if (initPromise) return initPromise;

  initPromise = fetch(API_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`Flag API responded with ${res.status}`);
      return res.json();
    })
    .then((json) => {
      const countries = Array.isArray(json) ? json : json.data ?? json.countries ?? [];
      flagMap = new Map();

      countries.forEach((country) => {
        const name = country?.name?.common;
        // Access double-nested flags object from API or fallback
        const flagUrl = country?.flags?.flags?.png || country?.flags?.png || country?.flags?.flags?.svg || country?.flags?.svg || '';

        if (!name || !flagUrl) return;

        // Primary key: lowercase common name
        flagMap.set(name.toLowerCase(), flagUrl);

        // Also store the official name if available
        const official = country?.name?.official;
        if (official) {
          flagMap.set(official.toLowerCase(), flagUrl);
        }
      });

      // Map every team code to the resolved flag URL
      Object.entries(codeToCountry).forEach(([code, countryName]) => {
        const url = flagMap.get(countryName.toLowerCase());
        if (url) {
          flagMap.set(code.toLowerCase(), url);
        }
      });
    })
    .catch((err) => {
      console.error('Failed to initialise flag service:', err);
      flagMap = new Map();
    });

  return initPromise;
}

/**
 * Synchronous lookup — returns the flag image URL for a given country name
 * or team code, or an empty string if not found / service not yet initialised.
 * @param {string} nameOrCode - Country name (e.g. "Brazil") or team code (e.g. "BRA")
 * @returns {string} Flag image URL or ''
 */
export function getFlagUrl(nameOrCode) {
  if (!flagMap || !nameOrCode) return '';

  const key = nameOrCode.trim().toLowerCase();

  // Direct hit (covers both country names and pre-mapped codes)
  if (flagMap.has(key)) return flagMap.get(key);

  // Try resolving the input as a code through the codeToCountry table
  const upperKey = nameOrCode.trim().toUpperCase();
  if (codeToCountry[upperKey]) {
    const resolved = flagMap.get(codeToCountry[upperKey].toLowerCase());
    if (resolved) return resolved;
  }

  return '';
}
