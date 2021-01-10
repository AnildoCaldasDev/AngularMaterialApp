import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserGitHubModel } from './models/users.github.model';

@Injectable({
  providedIn: 'root'
})
export class TesteUserSubscriptionService {

  private static _userSelecionado: UserGitHubModel;

  get getUserSelecionado(): UserGitHubModel {
    return TesteUserSubscriptionService._userSelecionado;
  }

  private static change: EventEmitter<UserGitHubModel> = new EventEmitter();

  public emit(user: UserGitHubModel): void {
    TesteUserSubscriptionService._userSelecionado = user;
    TesteUserSubscriptionService.change.emit(TesteUserSubscriptionService._userSelecionado);
  }

  public subscribe(next: (user: UserGitHubModel) => void): any {
    return TesteUserSubscriptionService.change.subscribe(next);
  }

}
