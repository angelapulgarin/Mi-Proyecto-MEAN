import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderComponent } from './components/body/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/body/home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ServiciosComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
