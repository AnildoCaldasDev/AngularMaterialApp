import { Component, OnInit } from '@angular/core';
import { SubjectTesteService } from 'src/app/services/subject-teste.service';

@Component({
  selector: 'app-subject-teste-tres',
  templateUrl: './subject-teste-tres.component.html'
})
export class SubjectTesteTresComponent implements OnInit {

  constructor(private subjectTestService: SubjectTesteService) { }

  public valorSubjectTeste: number = 0;
  public valorBehaviorSubjectTeste: number = 0;
  subscriptionSubjectValor: any;
  subscriptionBehaviorSubjectValor: any;

  ngOnInit(): void {
    this.subscriptionSubjectValor = this.subjectTestService.subjectTesteValor.subscribe({
      next: (number) => {
        console.log(`observerTRES: ${number}`);
        this.valorSubjectTeste = number;
      }
    });
    this.subscriptionBehaviorSubjectValor = this.subjectTestService.behaviorSubjectTeste.subscribe({
      next: (number) => {
        console.log(`observer subscriptionBehaviorSubjectValor TRES: ${number}`);
        this.valorBehaviorSubjectTeste = number;
      }
    });
  }

  adicionarValor() {
    this.subjectTestService.adicionarValor(this.valorSubjectTeste + 1);
  }

  removerSubscription() {
    this.subscriptionSubjectValor.unsubscribe();
    this.subscriptionBehaviorSubjectValor.unsubscribe();

    console.log("SubjectTesteTRESComponent desinscrito");
  }

}
