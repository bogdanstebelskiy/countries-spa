declare global {
  interface CountryShort {
    capital: string;
    flags: { png: string; svg: string };
    name: string;
    population: number;
    region: string;
    info: { title: string; description: string }[];
  }

  interface Country {
    name: string;
    nativeName: string;
    flags: { svg: string; png: string };
    capital: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: { code: string; name: string; symbol: string }[];
    languages: {
      iso639_1: string;
      iso639_2: string;
      name: string;
      nativeName: string;
    }[];
    borders: string[];
  }

  interface Region {
    value: string;
    label: string;
  }
}

export {};
