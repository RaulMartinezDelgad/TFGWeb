import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coches } from '../modelos/coches.model';
const baseUrl = 'http://localhost:8080/api/coches';
@Injectable({
  providedIn: 'root'
})
export class CochesService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Coches[]> {
    return this.http.get<Coches[]>(baseUrl);
  }
  get(id: any): Observable<Coches> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByMarca(marca: any): Observable<Coches[]> {
    return this.http.get<Coches[]>(`${baseUrl}?marca=${marca}`);
  }
  
}
