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
      headers: new HttpHeaders({ 'authorization': localStorage.getItem('user_token')! })
    }
  }


  traerSeguimientos() {
    return firstValueFrom(
      this.httpClient.get<any[]>('http://localhost:9000/api/seguimiento', this.headers()));
  }

}
