import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {


  private baseUrl = 'http://127.0.0.1:8000'

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private http: HttpClient) {}
  
  
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + '/client/');
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data: any) {
    return this.http.post(this.baseUrl + '/client/', JSON.stringify(data), this.httpOptions);
  }
  
  update(data: any): Observable<any> {
    return this.http.get(this.baseUrl + '/client/', data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl + '/client'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl + '/client/');
  }
  tableData() {
    return this.http.get(this.baseUrl + '/client/');
  }
}

