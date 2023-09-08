import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaServiciosService {

  constructor(public httpClient: HttpClient) { }

  traerAsesorias(){

    return firstValueFrom(
      this.httpClient.get<any[]>('http://localhost:9000/api/asesorias'));}

  
  // traerInhouse(){
  //   return 	this.httpClient.get("http://localhost:9000/api/inhouse");}
  



}
