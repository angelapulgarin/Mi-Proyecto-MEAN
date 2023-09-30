import { Component, signal } from '@angular/core';
import { UsersService } from "src/app/service/users.service";
import { inject } from '@angular/core';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  UsersService = inject(UsersService);

  arrUsers: any[] = [];


  


  
  async ngOnInit() {

    const user = await this.UsersService.getAll();
    this.arrUsers = user;
    //  console.table(user);
  }

}





