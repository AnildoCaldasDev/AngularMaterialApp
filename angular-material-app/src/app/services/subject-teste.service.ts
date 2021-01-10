import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectTesteService {

  //fonte de subject e behavior subject:
  //https://rxjs-dev.firebaseapp.com/guide/subject


  constructor() {
    this.subjectTesteValor.next(0);
  }

  public subjectTesteValor = new Subject<number>();
  public behaviorSubjectTeste = new BehaviorSubject<number>(1);

  public adicionarValor(valor: number) {
    this.subjectTesteValor.next(valor);
    this.behaviorSubjectTeste.next(valor * 2);
  }

}
