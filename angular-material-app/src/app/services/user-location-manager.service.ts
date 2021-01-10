import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country, State } from './models/user-location-manager.model';

@Injectable({
  providedIn: 'root'
})
export class UserLocationManagerService {

  private static _locationSelected: Country;

  private _countryList: Country[] = [
    {
      id: 1,
      label: "Africa",
      states: [
        { id: 11, label: "Senegal", cities: [{ id: 111, label: "Cidade Senegal 1" }, { id: 112, label: "Cidade Senegal 2" }] },
        { id: 12, label: "Ghana", cities: [{ id: 121, label: "Cidade Ghana 1" }, { id: 122, label: "Cidade Ghana 2" }] },
        { id: 13, label: "Mali", cities: [{ id: 131, label: "Cidade Mali 1" }, { id: 132, label: "Cidade Mali 2" }] }]
    },
    {
      id: 2,
      label: "Brasil",
      states: [
        { id: 21, label: "Bahia", cities: [{ id: 211, label: "Salvador" }, { id: 212, label: "Ilhéus" }] },
        { id: 22, label: "São Paulo", cities: [{ id: 221, label: "Louveira" }, { id: 222, label: "Jundiai" }] },
        { id: 23, label: "Rio De Janeiro", cities: [{ id: 231, label: "Guanabara" }, { id: 232, label: "São Roque" }] }]
    },
    {
      id: 3,
      label: "Canada",
      states: [
        { id: 31, label: "Quebec", cities: [{ id: 311, label: "Cidade Quebec 1" }, { id: 312, label: "Cidade Quebec 2" }] },
        { id: 32, label: "Ontario", cities: [{ id: 321, label: "Cidade Ontario 1" }, { id: 322, label: "Cidade Ontario 2" }] },
        { id: 33, label: "Alberta", cities: [{ id: 331, label: "Cidade Alberta 1" }, { id: 332, label: "Cidade Alberta 2" }] }]
    },
    {
      id: 4,
      label: "Estados Unidos",
      states: [
        { id: 41, label: "Bahia", cities: [{ id: 411, label: "Salvador" }, { id: 412, label: "Ilhéus" }] },
        { id: 42, label: "São Paulo", cities: [{ id: 421, label: "Louveira" }, { id: 422, label: "Jundiai" }] },
        { id: 43, label: "Rio De Janeiro", cities: [{ id: 431, label: "Guanabara" }, { id: 432, label: "São Roque" }] }]
    }
  ]

  private countries = of(this._countryList);

  constructor() {
  }

  get getLocationSelected(): Country {
    return UserLocationManagerService._locationSelected;
  }

  private static change: EventEmitter<Country> = new EventEmitter();

  public emit(country: Country): void {
    UserLocationManagerService._locationSelected = country;
    UserLocationManagerService.change.emit(UserLocationManagerService._locationSelected);
  }

  public subscribe(next: (country: Country) => void): any {
    return UserLocationManagerService.change.subscribe(next);
  }

  public getAllCountries(): Observable<Country[]> {
    return this.countries;
  }
}
