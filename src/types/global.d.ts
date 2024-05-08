declare global {
  interface Info {
    title: string;
    descriptions: string;
  }

  interface Flags {
    png: string;
    svg: string;
  }

  interface CountryShort {
    capital: string;
    flags: Flags;
    name: string;
    population: number;
    region: string;
    info: Info[];
  }

  interface Languages {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }

  interface Currencies {
    code: string;
    name: string;
    symbol: string
  }

  interface Country {
    name: string;
    nativeName: string;
    flags: Flags;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    topLevelDomain: string[];
    currencies: Currencies[];
    languages: Languages[];
    borders: string[];
  }

  interface Region {
    value: string;
    label: string;
  }
}

export { };
