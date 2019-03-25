import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient : HttpClient) { }

  // OBTENER LOS DATOS DE LA CICLOVIA
  getAllCiclovias(){
    return this.httpClient.get('https://appvuejs-a0a4a.firebaseio.com/ciclovia.json');
  }

}
