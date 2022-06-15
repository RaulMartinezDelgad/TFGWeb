import { Component, OnInit } from '@angular/core';
import { Producto } from '../productos/producto';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosFav: Producto[] = [];
  suma: any;
  total: any;

  constructor(private productoService: ProductoService) { }


  ngOnInit(): void {
    this.productoService.getProductosFav().subscribe(
      (productos) => {
        this.productosFav = productos
      } );
      this.getProductosFavTotal();
  }

  fav(producto: Producto): void{
    this.productoService.setFav(producto).subscribe();
       
        setTimeout(() => {
          window.location.reload();
        }, 300);
  }

  setCantidad(producto: Producto): void{
    console.log(producto)
    this.productoService.setCantidad(producto).subscribe();
    window.location.reload();
  }

  getProductosFavTotal(): void{
    this.total = this.productoService.getProductosFavTotal().subscribe(
      (number)=> {
        this.total = number
        console.log(number)  
       }
     );
    }
}