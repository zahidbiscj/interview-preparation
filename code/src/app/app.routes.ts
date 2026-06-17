import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./question-bank/question-bank.page').then(m => m.QuestionBankPage)
  },
  {
    path: 'simulator',
    loadComponent: () =>
      import('./mock-exam/mock-exam.page').then(m => m.MockExamPage)
  },
  { path: '**', redirectTo: '' }
];
