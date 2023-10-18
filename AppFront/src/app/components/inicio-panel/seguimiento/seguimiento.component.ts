import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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



    

    generarPdf() {
      
      const DATA: any = document.getElementById('contenidoPdf');
    
      
      const doc = new jsPDF('p', 'pt', 'letter');
    
      const options = {
        background: 'white',
        scale: 3
      };
    
      
      html2canvas(DATA, options).then((canvas) => {
        const img = canvas.toDataURL('image/PNG');
        
      
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('informe.pdf');
    });



    }
    




};








