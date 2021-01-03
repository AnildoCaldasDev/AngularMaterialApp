import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGitHubModel } from 'src/app/services/models/users.github.model';
import { ObservablesService } from 'src/app/services/observables.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html'
})
export class ObservablesComponent implements OnInit {

  public users$: Observable<UserGitHubModel[]>;
  public users: UserGitHubModel[];

  public obs1: Observable<any>;
  public anySubscriber: any;

  constructor(private observablesService: ObservablesService) { }

  ngOnInit(): void {

    this.obs1 = new Observable(function subscribe(subscriber) {
      const id = setInterval(() => {
        subscriber.next('Testeeee')
      }, 1000);
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




}
