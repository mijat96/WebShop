import { Routes } from '@angular/router';
import { CompaniesListPageComponent } from './pages/companies-list-page/companies-list-page.component';

export const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesListPageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
