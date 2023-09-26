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



  async ngOnInit() {
    const listaServicios = await this.servicio.traerSeguimientos();
    this.arrServicios = listaServicios

  }

};











//   view: [number, number] = [700, 400];

//   // options
//   gradient: boolean = true;
//   showLegend: boolean = true;
//   showLabels: boolean = true;
//   isDoughnut: boolean = false;

//   // colorScheme: {domain: string[];} = {
//   //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
//   // };


//   single = [
//     {
//       "name": "Germany",
//       "value": 8940000
//     },
//     {
//       "name": "USA",
//       "value": 5000000
//     },
//     {
//       "name": "France",
//       "value": 7200000
//     },
//     {
//       "name": "UK",
//       "value": 6200000
//     }
//   ];



//   // constructor() {
//   //   Object.assign(this, { single });
//   // }

//   onSelect(data: any): void {
//     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
//   }

//   onActivate(data: any): void {
//     console.log('Activate', JSON.parse(JSON.stringify(data)));
//   }

//   onDeactivate(data: any): void {
//     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
//   }

// };













  

