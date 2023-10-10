import { Component, inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  formulario: FormGroup

  router = inject(Router);

 

  constructor(private userService: UsersService ) {
    
    this.formulario = new FormGroup({
      nombreEmpresa: new FormControl(),
      nit: new FormControl(),
      numeroEmpleados: new FormControl(),
      representanteLegal: new FormControl(),
      actividadEconomica: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),

    })
  }

 async onSubmit(){
    const res = await this.userService.register(this.formulario.value);
    console.log(res)
  }


 redirigirLogin() {
    this.router.navigate(['/login']);
  }





}
