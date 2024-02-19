import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { HomeComponent } from './components/body/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { InicioPanelComponent } from './components/inicio-panel/inicio-panel.component';
import { loginGuard } from './guards/login.guard';
import { SeguimientoComponent } from './components/inicio-panel/seguimiento/seguimiento.component';
import { GuiasComponent } from './components/inicio-panel/recursos/guias/guias.component';
import { LudicasComponent } from './components/inicio-panel/recursos/ludicas/ludicas.component';
import { NormaComponent } from './components/inicio-panel/recursos/norma/norma.component';
import { PlanearComponent } from './components/inicio-panel/planear/planear.component';
import { HacerComponent } from './components/inicio-panel/hacer/hacer.component';
import { VerificarComponent } from './components/inicio-panel/verificar/verificar.component';
import { ActuarComponent } from './components/inicio-panel/actuar/actuar.component';



const routes: Routes = [

  { path: 'users', component: UsersListComponent, canActivate: [loginGuard] },
  { path: 'servicios', component: ServiciosComponent },

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contactanos', component: ContactanosComponent },

  {
    path: 'inicio-panel', component: InicioPanelComponent, canActivate: [loginGuard],
    children: [

      { path: '', component: SeguimientoComponent, canActivate: [loginGuard] },
      
      { path: 'planear', component: PlanearComponent, canActivate: [loginGuard] },
      { path: 'hacer', component: HacerComponent, canActivate: [loginGuard] },
      { path: 'verificar', component: VerificarComponent, canActivate: [loginGuard] },
      { path: 'actuar', component: ActuarComponent, canActivate: [loginGuard] },

      { path: 'seguimiento', component: SeguimientoComponent, canActivate: [loginGuard] },
      { path: 'guias', component: GuiasComponent, canActivate: [loginGuard] },
      { path: 'actividades-ludicas', component: LudicasComponent, canActivate: [loginGuard] },
      { path: 'normatividad', component: NormaComponent, canActivate: [loginGuard] },


    ]


  },



  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },

  // {
  //   path: 'users/:id', component:UserDetails
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
