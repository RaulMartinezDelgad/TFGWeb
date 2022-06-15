import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Producto } from '../productos/producto';


@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  private urlEndPoint: string = 'http://localhost:8080/api/productos';
  private urlEndPointFav:string = 'http://localhost:8080/api/productos/carrito';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient, private router: Router) { }

  getProductos(): Observable<Producto[]>{
    //return of(PRODUCTOS);
    return this.http.get<Producto[]>(this.urlEndPoint).pipe(
      map( (Response) => Response as Producto[])
    );
  }

  getProductosFav(): Observable<Producto[]>{
    return this.http.get(this.urlEndPointFav).pipe(
      map(Response => Response as Producto[])
    ); 
  }

  getProductosFavTotal(): Observable<number>{
    return this.http.get<number>(`${this.urlEndPointFav}/total`)
  }

  setFav(producto: Producto): Observable<any>{
    return this.http.post<any>(`${this.urlEndPoint}/${producto.idProducto}`, producto, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        console.error(e.error.mensaje);
       
        return throwError(e);
      })
   );
  }

  setCantidad(producto: Producto): Observable<any>{
    return this.http.put<any>(`${this.urlEndPoint}/setCantidad/${producto.idProducto}`, producto, {headers: this.httpHeaders}).pipe(
      catchError(e => {
        console.log(e.error.mensaje);
        console.error(e.error.mensaje);
        return throwError(e);
      })
   );
  }
}
