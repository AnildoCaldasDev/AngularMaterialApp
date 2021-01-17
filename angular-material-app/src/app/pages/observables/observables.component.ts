import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Country } from 'src/app/services/models/user-location-manager.model';
import { UserGitHubModel } from 'src/app/services/models/users.github.model';
import { ObservablesService } from 'src/app/services/observables.service';
import { TesteUserSubscriptionService } from 'src/app/services/teste-user-subscription-service';
import { UserLocationManagerService } from 'src/app/services/user-location-manager.service';
@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit, OnDestroy {

  public users$: Observable<UserGitHubModel[]>;
  public users: UserGitHubModel[];

  public obs1: Observable<any>;
  public anySubscriber: any;
  public userGitModel: UserGitHubModel;
  public mostrarDetalhesTela: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private observablesService: ObservablesService,
    private testeUserSubscriptioService: TesteUserSubscriptionService,
    private userLocationManagerService: UserLocationManagerService) { }

  ngOnInit(): void {

    this.obs1 = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('Testeeee')
      }, 1000);
    });

    this.subscriptions.push(this.testeUserSubscriptioService.subscribe((userSelecionado: UserGitHubModel) => {
      this.userGitModel = userSelecionado;
    }));

    this.subscriptions.push(this.userLocationManagerService
      .subscribe((country: Country) => {
        this.mostrarDetalhesTela = country && country.citySelected ? true : false;
      }));


  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
    }
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
}
