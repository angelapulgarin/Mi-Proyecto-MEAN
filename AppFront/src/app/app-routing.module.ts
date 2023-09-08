import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';


const routes: Routes = [
  {path: 'users', component: UsersListComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent}
  
  // {
  //   path: 'users/:id', component:UserDetails
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }