import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';



import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HeaderComponent } from './components/body/header/header.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/body/home/home.component';
import { FooterComponent } from './components/body/footer/footer.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { InicioPanelComponent } from './components/inicio-panel/inicio-panel.component';
import { SeguimientoComponent } from './components/inicio-panel/seguimiento/seguimiento.component';
import { GuiasComponent } from './components/inicio-panel/recursos/guias/guias.component';
import { LudicasComponent } from './components/inicio-panel/recursos/ludicas/ludicas.component';
import { NormaComponent } from './components/inicio-panel/recursos/norma/norma.component';
import { PlanearComponent } from './components/inicio-panel/planear/planear.component';
import { HacerComponent } from './components/inicio-panel/hacer/hacer.component';
import { VerificarComponent } from './components/inicio-panel/verificar/verificar.component';
import { ActuarComponent } from './components/inicio-panel/actuar/actuar.component';




@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ServiciosComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ContactanosComponent,
    InicioPanelComponent,
    SeguimientoComponent,
    GuiasComponent,
    LudicasComponent,
    NormaComponent,
    PlanearComponent,
    HacerComponent,
    VerificarComponent,
    ActuarComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    YouTubePlayerModule,
    BrowserAnimationsModule,
    NgxChartsModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
