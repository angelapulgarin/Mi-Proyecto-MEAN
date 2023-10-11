import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userService = inject(UsersService)



  home() {
    document.getElementById("home-inicio")?.scrollIntoView({behavior:"smooth"});
  };


  servicios() {
    document.getElementById("servicios-inicio")?.scrollIntoView({behavior:"smooth"});
  };


  contactanos(){
    document.getElementById("contacto-imagen")?.scrollIntoView({behavior:"smooth"});
  };


  // registro(){
  //   document.getElementById("registro-inicio")?.scrollIntoView({behavior:"smooth"});
  // };


  // login(){
  //   document.getElementById("login-inicio")?.scrollIntoView({behavior:"smooth"});
  // };
  





  
}
