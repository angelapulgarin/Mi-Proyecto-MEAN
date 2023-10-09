import { Component } from '@angular/core';

import { ListaServiciosService } from 'src/app/service/lista-servicios.service';

@Component({
  selector: 'app-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.css']
})

export class SeguimientoComponent {




  constructor(public servicio: ListaServiciosService) { }

  arrServicios: any[] = [];

  single: any[] = [];


  async ngOnInit() {
    const listaServicios = await this.servicio.traerSeguimientos();
    this.arrServicios = listaServicios;

    console.log(listaServicios);

    this.single = [
      {
        "name": "Planear",
        "value": this.arrServicios[0].planear
      },
      {
        "name": "Hacer",
        "value": this.arrServicios[0].hacer
      },
      {
        "name": "Verificar",
        "value": this.arrServicios[0].verificar
      },
      {
        "name": "Actuar",
        "value": this.arrServicios[0].actuar
      }
    ];


    

  }




  view: [number, number] = [750, 300];

  

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  // colorScheme = {
    
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

 

    onSelect(data: any): void {
      console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    }

    onActivate(data: any): void {
      console.log('Activate', JSON.parse(JSON.stringify(data)));
    }

    onDeactivate(data: any): void {
      console.log('Deactivate', JSON.parse(JSON.stringify(data)));
    }

  };













