import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  { path: '',component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'people', component: PeopleComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent, DashboardComponent, PeopleComponent]
