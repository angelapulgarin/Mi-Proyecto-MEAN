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



  footer() {
    document.getElementById("footer1")?.scrollIntoView({behavior:"smooth"});
  }









  
}
