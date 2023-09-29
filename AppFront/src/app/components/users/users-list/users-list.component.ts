
import { Component, signal } from '@angular/core';
import { UsersService } from "src/app/service/users.service";
import { inject } from '@angular/core';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent {

  arrUsers = signal<any[]>([])


  UsersService = inject(UsersService);


  
  async ngOnInit() {

    const user = await this.UsersService.getAll();
    this.arrUsers.set(user);
    //  console.table(user);
  }

}
