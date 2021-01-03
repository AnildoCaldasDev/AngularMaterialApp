import { Injectable } from '@angular/core';
import { Observable, from, pipe, fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserGitHubModel } from './models/users.github.model';

@Injectable({
  providedIn: 'root'
})
export class ObservablesService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserGitHubModel[]> {
    return this.http.get<UserGitHubModel[]>("https://api.github.com/users")
      .pipe(map((res: any) => { return res }));
  }
}
