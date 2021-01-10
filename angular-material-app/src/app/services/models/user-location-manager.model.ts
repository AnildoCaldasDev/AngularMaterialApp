// interface Country {
//   id: number;
//   label: string;
//   states: State[];
// }

// interface State {
//   id: number;
//   label: string;
//   cityes: City[];
// }

// interface City {
//   id: number;
//   label: string;
// }


export class Country {
  id: number;
  label: string;
  states: State[];
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
