import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';



import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-inicio-panel',
  templateUrl: './inicio-panel.component.html',
  styleUrls: ['./inicio-panel.component.css']
})
export class InicioPanelComponent {

  router = inject(Router);
  userService = inject(UsersService);

  onClickLogout () {
    localStorage.removeItem('user_token');
    this.router.navigate(['/home']);
  }







}
