import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-observabletutorial',
  templateUrl: './observabletutorial.component.html',
  styleUrls: ['./observabletutorial.component.css']
})
export class ObservabletutorialComponent implements OnInit {

  subscriptions: Subscription[] = [];
  //observableTutorial$ = new Observable<number>();
  public valorInput: number = 0;
  //observer: any;

  constructor() { }

  ngOnInit(): void {
    // this.observer = this.observableTutorial$.subscribe((value: number) => {
    //   this.valorInput = this.valorInput + value;
    // }, (error: any) => {
    //   window.alert('Erro: ' + error);
    // }, () => {
    //   window.alert('Observable completed!!!');
    // });

    // this.subscriptions.push(this.observer);

    var observableTeste = new Observable((observer) => {
      console.log("Observable starts")
      setTimeout(() => { observer.next(1) }, 1000);
      setTimeout(() => { observer.next(2) }, 2000);
      setTimeout(() => { observer.next(3) }, 3000);
      setTimeout(() => { observer.next(4) }, 4000);
      setTimeout(() => { observer.next(5) }, 5000);
      setTimeout(() => { observer.error("error emitted") }, 6000);
      setTimeout(() => { observer.next("7") }, 7000);
    });

    var observerTest = observableTeste.subscribe(
      val => { console.log(val) },
      error => { console.log("error") },
      () => { console.log("Completed") }
    );

    var observerTesteTkeOne = observableTeste
      .pipe(take(3))
      .subscribe(x => console.log('take 1 valor: ', x));


    this.subscriptions.push(observerTest);

  }

  dispararEvento() {
    //setTimeout(() => { this.observer.next(this.valorInput + 1); }, 2000)
  }


}
