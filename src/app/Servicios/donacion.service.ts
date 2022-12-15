import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { enviromemt } from 'src/environments/environment';
import { Donor } from '../Interfaces/Donor';

@Injectable({
  providedIn: 'root'
})
export class DonacionService {

  private myAppUrl: string = enviromemt.endpoint;
  private myApiUrl: string = '/api/Donacion/';

  constructor(private http: HttpClient) { }


  
  getDonacion():  Observable <Donor[]> {
    return this.http.get<Donor [] >(`${this.myAppUrl}${this.myApiUrl}`);
  }

  getDonacio(id: number):  Observable <Donor> {
    return this.http.get<Donor>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  deleteDonacion (id: number): Observable <void> {
    return this.http.delete <void> (`${this.myAppUrl}${this.myApiUrl}${id}`);

  }
  addDonacion (donacion: Donor): Observable <Donor> {
    return this.http.post <Donor> (`${this.myAppUrl}${this.myApiUrl}`,donacion);

  }

  updateDonacion (id: number, donacion: Donor): Observable <void> {
    return this.http.put <void> (`${this.myAppUrl}${this.myApiUrl}${id}`,donacion);

  }
}


