import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserGitHubModel } from 'src/app/services/models/users.github.model';
import { ObservablesService } from 'src/app/services/observables.service';
import { TesteUserSubscriptionService } from 'src/app/services/teste-user-subscription-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { City, Country, CountryDetail, State } from 'src/app/services/models/user-location-manager.model';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';
import { CustomErrorStateMatcher } from 'src/app/core/shared/error-state-matcher';


@Component({
  selector: 'app-user-location-manager',
  templateUrl: './user-location-manager.component.html',
  styleUrls: ['./user-location-manager.component.css']
})
export class UserLocationManagerComponent implements OnInit, OnDestroy {

  formMatCountrySelect = new FormControl('0', [
    Validators.required,
    Validators.min(1)
  ]);

  formMatStatesSelect = new FormControl('0', [
    Validators.required,
    Validators.min(1)
  ]);

  formMatCitiesSelect = new FormControl('0', [
    Validators.required,
    Validators.min(1)
  ]);

  matcherCustom = new CustomErrorStateMatcher();

  //AQUI!!!!!
  //IMPLEMENTAR ALGUMA IDEIA LEGAL COM ESTA API:
  //https://restcountries.eu/rest/v2/alpha/USA
  countries: Country[];
  states: State[];
  cities: City[];
  selectedCountryId: number;
  selectedStateId: number;
  selectedCityId: number;
  countryMenu: Country;
  countryDetail: CountryDetail = {};
  private subscriptions: Subscription[] = [];

  constructor(private userLocationManagerService: UserLocationManagerService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.userLocationManagerService.getAllCountries().subscribe(
      (data: Country[]) => {
        this.countries = data;
      },
      (error: any) => {
        console.log('Erro ao buscar Países' + error);
      }));
  }

  changeCountry(countryId: number) {
    this.selectedCountryId = countryId;
    let country = this.countries.find((country: Country) => country.id == countryId);
    this.states = country.states;
    this.countryMenu = country;
    this.resetLocationLevel2();
    this.loadCountryByCode(country.countryCode);
    //this.userLocationManagerService.emit(this.countryMenu);
  }

  changeState(stateId: number) {
    this.selectedStateId = stateId;
    let state = this.states.find((state: State) => state.id == stateId);
    this.cities = [];
    this.cities = state.cities;
    this.countryMenu.stateSelected = state;
    this.resetLocationLevel3();
    this.userLocationManagerService.emit(this.countryMenu);
  }

  changeCity(cityId: number) {
    this.selectedCityId = cityId;
    let city = this.cities.find((city: City) => city.id == cityId);
    this.countryMenu.citySelected = city;
    this.userLocationManagerService.emit(this.countryMenu);
  }

  resetLocationLevel2() {
    this.selectedStateId = undefined;
    this.selectedCityId = undefined;
    this.countryMenu.stateSelected = null;
    this.countryMenu.citySelected = null;
  }

  resetLocationLevel3() {
    this.selectedCityId = undefined;
    this.countryMenu.citySelected = null;
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
      console.log("SubjectTesteDOISComponent desinscrito");
    }
  }

  loadCountryByCode(code: string) {
    this.userLocationManagerService.getCountryByCode(code).subscribe(
      (data: any) => {
        if (data) {
          this.countryDetail.countryCode = data.alpha3Code;
          this.countryDetail.countryName = data.name;
          this.countryDetail.countryRegion = data.region;
          this.countryDetail.postalCode = data.area;
          this.countryDetail.countryFlag = data.flag;
          this.countryDetail.countryCapital = data.capital;
          this.countryMenu.countryDetail = this.countryDetail;
          this.userLocationManagerService.emit(this.countryMenu);
        } else {
          this.userLocationManagerService.emit(this.countryMenu);
        }
      },
      (error: any) => {
        console.log('Erro ao buscar Países' + error);
        this.userLocationManagerService.emit(this.countryMenu);
      });
  }

}
