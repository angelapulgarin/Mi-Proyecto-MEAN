import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListaServiciosService {

  constructor(public httpClient: HttpClient) { }

  
  
  headers() {
    return {
      headers: new HttpHeaders({ 'autorizado': localStorage.getItem('user_token')! })
    }
  }


  traerAsesorias() {

    return firstValueFrom(
      this.httpClient.get<any[]>('http://localhost:9000/api/servicios', this.headers()));
  }





  // traerInhouse(){
  //   return 	this.httpClient.get("http://localhost:9000/api/inhouse");}




}
