import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./question-bank/question-bank.page').then(m => m.QuestionBankPage)
  }
];
