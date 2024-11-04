import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AsideComponent } from './components/aside/aside.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {path : '' , component : LoginComponent},
  {path : 'register' , component : RegisterComponent},
  {path : 'dashboard', component : DashboardComponent, canActivate: [authGuard]}
  /* {path : 'aside', component : AsideComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponent = [LoginComponent, RegisterComponent, DashboardComponent]

//AsideComponent