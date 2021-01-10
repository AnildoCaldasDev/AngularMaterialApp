import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectTesteService } from 'src/app/services/subject-teste.service';

@Component({
  selector: 'app-subject-teste-um',
  templateUrl: './subject-teste-um.component.html'
})
export class SubjectTesteUmComponent implements OnInit, OnDestroy {

  constructor(private subjectTestService: SubjectTesteService) { }

  public valorSubjectTeste: number = 0;
  public valorBehaviorSubjectTeste: number = 0;
  // subscriptionSubjectValor: any;
  // subscriptionBehaviorSubjectValor: any;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    // this.subscriptionSubjectValor = this.subjectTestService.subjectTesteValor.subscribe({
    //   next: (number) => {
    //     console.log(`observerUM: ${number}`);
    //     this.valorSubjectTeste = number;
    //   }
    // });
    // this.subscriptionBehaviorSubjectValor = this.subjectTestService.behaviorSubjectTeste.subscribe({
    //   next: (number) => {
    //     console.log(`observer subscriptionBehaviorSubjectValor UM: ${number}`);
    //     this.valorBehaviorSubjectTeste = number;
    //   }
    // });
    this.subscriptions.push(this.subjectTestService.subjectTesteValor.subscribe({
      next: (number) => {
        console.log(`observerUM: ${number}`);
        this.valorSubjectTeste = number;
      }
    }));
    this.subscriptions.push(this.subjectTestService.behaviorSubjectTeste.subscribe({
      next: (number) => {
        console.log(`observer subscriptionBehaviorSubjectValor UM: ${number}`);
        this.valorBehaviorSubjectTeste = number;
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
      console.log("SubjectTesteUmComponent desinscrito");
    }
  }


  adicionarValor() {
    this.subjectTestService.adicionarValor(this.valorBehaviorSubjectTeste + 1);
  }

  //removerSubscription() {
  // this.subscriptionSubjectValor.unsubscribe();
  // this.subscriptionBehaviorSubjectValor.unsubscribe();
  //console.log("SubjectTesteUmComponent desinscrito");
  //}

}
