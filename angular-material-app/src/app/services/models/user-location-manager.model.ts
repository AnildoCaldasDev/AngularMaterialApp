export class Country {
  id: number;
  label: string;
  states: State[];
  countryCode: string;
  stateSelected?: State;
  citySelected?: City;
  countryDetail?: CountryDetail
}

export class State {
  id: number;
  label: string;
  cities: City[];
}

export class City {
  id: number;
  label: string;
}

export class CountryDetail {
  postalCode?: string;
  countryName?: string;
  countryCode?: string;
  countryRegion?: string;
  countryFlag?: string;
  countryCapital?: string;
}
