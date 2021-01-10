import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectTesteService } from 'src/app/services/subject-teste.service';

@Component({
  selector: 'app-subject-teste-dois',
  templateUrl: './subject-teste-dois.component.html'
})
export class SubjectTesteDoisComponent implements OnInit, OnDestroy {

  constructor(private subjectTestService: SubjectTesteService) { }

  public valorSubjectTeste: number = 0;
  public valorBehaviorSubjectTeste: number = 0;
  // subscriptionSubjectValor: any;
  // subscriptionBehaviorSubjectValor: any;
  private subscriptions: Subscription[] = [];

  ngOnInit(): void {
    // this.subscriptionSubjectValor = this.subjectTestService.subjectTesteValor.subscribe({
    //   next: (number) => {
    //     console.log(`observerDOIS: ${number}`);
    //     this.valorSubjectTeste = number;
    //   }
    // });
    // this.subscriptionBehaviorSubjectValor = this.subjectTestService.behaviorSubjectTeste.subscribe({
    //   next: (number) => {
    //     console.log(`observer subscriptionBehaviorSubjectValor DOIS: ${number}`);
    //     this.valorBehaviorSubjectTeste = number;
    //   }
    // });

    this.subscriptions.push(this.subjectTestService.subjectTesteValor.subscribe({
      next: (number) => {
        console.log(`observerDOIS: ${number}`);
        this.valorSubjectTeste = number;
      }
    }));
    this.subscriptions.push(this.subjectTestService.behaviorSubjectTeste.subscribe({
      next: (number) => {
        console.log(`observer subscriptionBehaviorSubjectValor DOIS: ${number}`);
        this.valorBehaviorSubjectTeste = number;
      }
    }));

  }

  ngOnDestroy(): void {
    if (this.subscriptions && this.subscriptions.length > 0) {
      this.subscriptions.forEach(x => x.unsubscribe());
      console.log("SubjectTesteDOISComponent desinscrito");
    }
  }


  adicionarValor() {
    this.subjectTestService.adicionarValor(this.valorBehaviorSubjectTeste + 1);
  }

  //removerSubscription() {
  //this.subscriptionSubjectValor.unsubscribe();
  //this.subscriptionBehaviorSubjectValor.unsubscribe();
  //console.log("SubjectTesteDOISComponent desinscrito");
  // }

}
