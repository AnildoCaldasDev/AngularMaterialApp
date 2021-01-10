import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGitHubModel } from 'src/app/services/models/users.github.model';
import { ObservablesService } from 'src/app/services/observables.service';
import { TesteUserSubscriptionService } from 'src/app/services/teste-user-subscription-service';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { City, Country, State } from 'src/app/services/models/user-location-manager.model';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  public users$: Observable<UserGitHubModel[]>;
  public users: UserGitHubModel[];

  public obs1: Observable<any>;
  public anySubscriber: any;
  public userGitModel: UserGitHubModel;

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

  matcherCustom = new MyErrorStateMatcher();

  countries: Country[];
  states: State[];
  cities: City[];
  selectedCountryId: number;
  selectedStateId: number;
  selectedCityId: number;
  selectedCountryLabel: string;
  selectedStateLabel: string;
  selectedCityLabel: string;

  constructor(private observablesService: ObservablesService,
    private testeUserSubscriptioService: TesteUserSubscriptionService,
    private userLocationManagerService: UserLocationManagerService) { }

  ngOnInit(): void {

    this.obs1 = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('Testeeee')
      }, 1000);
    });

    this.testeUserSubscriptioService.subscribe((userSelecionado: UserGitHubModel) => {
      this.userGitModel = userSelecionado;
    });

    this.userLocationManagerService.getAllCountries().subscribe(
      (data: Country[]) => { this.countries = data; },
      (error: any) => {
        console.log('Erro ao buscar Países' + error);
      });
  }

  inscreverEmEvento() {
    this.anySubscriber = this.obs1.subscribe(x => console.log("msg: " + x), error => console.log("error: " + error));
  }

  desinscrever() {
    this.anySubscriber.unsubscribe();
  }

  chamarSemSubscribe() {
    this.users$ = this.observablesService.getUsers();
  }

  chamarComSubscriber() {
    this.observablesService.getUsers().subscribe((data: UserGitHubModel[]) => {
      this.users = data.filter(x => x.id > 20);
    }, (error: any) => {
      console.log('erro disparado', error);
    });
  }

  changeCountry(countryId: number) {
    this.selectedCountryId = countryId;
    let country = this.countries.find((country: Country) => country.id == countryId);
    this.states = country.states;
    this.selectedCountryLabel = country.label;
    this.resetLocationLevel2();
  }

  changeState(stateId: number) {
    this.selectedStateId = stateId;
    let state = this.states.find((state: State) => state.id == stateId);
    this.cities = state.cities;
    this.selectedStateLabel = state.label;
    this.resetLocationLevel3();
  }

  changeCity(cityId: number) {
    this.selectedCityId = cityId;
    let city = this.cities.find((city: City) => city.id == cityId);
    this.selectedCityLabel = city.label;
  }

  resetLocationLevel2() {
    this.selectedStateId = undefined;
    this.selectedStateLabel = undefined;
    this.selectedCityId = undefined;
    this.selectedCityLabel = undefined;
  }

  resetLocationLevel3() {
    this.selectedCityId = undefined;
    this.selectedCityLabel = undefined;
  }

}
