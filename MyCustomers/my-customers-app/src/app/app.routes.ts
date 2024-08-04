import { Routes } from '@angular/router';
import { CustomersComponent } from './components/customers/customers.component';
import { ChalllengeRequirement } from './components/challenge-requirements/challenge-requirements.component';

export const routes: Routes = [
  { path: '', component: ChalllengeRequirement},
  { path: 'customers', component: CustomersComponent }
];
