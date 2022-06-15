import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from './producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] | undefined;

  constructor(private productoService : ProductoService) { }

  ngOnInit(): void {
    this.productoService.getProductos().subscribe(
          (productos)=> {
            this.productos = productos
          }
    );
  }

  fav(producto: Producto): void{
    this.productoService.setFav(producto).subscribe();
  }
}
