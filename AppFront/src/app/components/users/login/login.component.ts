import { Component, inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup

  userService =inject(UsersService)


  constructor() {
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),

    })
  }

 async onSubmit(){
    const res = await this.userService.login(this.formulario.value);
    console.log(res)
  }





}
