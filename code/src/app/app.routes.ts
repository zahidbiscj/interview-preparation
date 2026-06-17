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
  {
    path: 'sets',
    loadComponent: () =>
      import('./sets/sets.page').then(m => m.SetsPage)
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'live-interview',
    loadComponent: () =>
      import('./live-interview/live-interview.page').then(m => m.LiveInterviewPage)
  },
  {
    path: 'feynman',
    loadComponent: () =>
      import('./feynman/feynman.page').then(m => m.FeynmanPage)
  },
  { path: '**', redirectTo: '' }
];
