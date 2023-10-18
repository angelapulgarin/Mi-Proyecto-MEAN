import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  ngOnInit () {

    let form: any = document.getElementById("my-form");
    
    async function handleSubmit(event:any) {
      event.preventDefault();
      let status: any = document.getElementById("my-form-status");
      let data: any = new FormData(event.target);


      if (data && data.get('nombre') === '' && data.get('email') === '' && data.get('celular') === '' && data.get('empresa') === '' && data.get('mensaje') === '') 
      {
        status.innerHTML = "No se puede enviar un formulario vacío.";
        return; 
      }



      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Gracias, te contactaremos pronto!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map((error: { [x: string]: any; }) => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! Hay un problema al enviar el formulario"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! Hay un problema al enviar el formulario"
      });
    }
    form.addEventListener("submit", handleSubmit)

  }

}
