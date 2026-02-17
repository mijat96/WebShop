import { Routes } from '@angular/router';
import { CompaniesListPageComponent } from './pages/companies-list-page/companies-list-page.component';
import { CompanyDetailsPageComponent } from './pages/company-details-page/company-details-page.component';

export const routes: Routes = [
  {
    path: 'companies',
    component: CompaniesListPageComponent,
  },
  {
    path: 'company/:id',
    component: CompanyDetailsPageComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
