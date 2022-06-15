import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coches } from 'src/app/modelos/coches.model';
import { CochesService } from 'src/app/services/coches.service';

@Component({
  selector: 'app-coches-detalles',
  templateUrl: './coches-detalles.component.html',
  styleUrls: ['./coches-detalles.component.css']

})

export class CochesDetallesComponent implements OnInit {
  @Input() viewMode = false;
  @Input() cocheActual: Coches = {
    marca: '',
    modelo: '',
    precio: ''
  };

  message = ''
  constructor(private cochesService: CochesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getCoche(this.route.snapshot.params["id"]);
    }
  }

  getCoche(id: string): void {this.cochesService.get(id).subscribe({
        next: (data) => {
          this.cocheActual = data;
          console.log(data);
        },

        error: (e) => console.error(e)
      });
  }

  updatePublicado
    (status: boolean): void {
    const data = {
      marca: this.cocheActual.marca,
      modelo: this.cocheActual.modelo,
      precio: this.cocheActual.precio
    };

    this.message = '';
    this.cochesService.update(this.cocheActual.id, data).subscribe({
        next: (res) => {
          console.log(res);
          
          this.message = res.message ? res.message : 'El estado ha sido actualizado correctamente!' ;

        },
        error: (e) => console.error(e)
      });
  }

  actualizarCoche(): void {
    this.message = '';
    this.cochesService.update(this.cocheActual.id, this.cocheActual)
      .subscribe({
        next: (res) => {
          console.log
            (res);
          this.message = res.message ? res.message : 'Este coche ha sido actualizado correctamente!';
        },

        error: (e) => console.error(e)
      });
  }

  eliminarCoche(): void {
    this.cochesService.delete(this.cocheActual.id).subscribe({
        next: (res) => {
          console.log
            (res);
          this.router.navigate(['/coches']);
        },

        error: (e) => console.error(e)
      });
  }
}
