import { Component, OnInit } from '@angular/core';
import { Coches } from 'src/app/modelos/coches.model';
import { CochesService } from 'src/app/services/coches.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-lista-coches',
  templateUrl: './lista-coches.component.html',
  styleUrls: ['./lista-coches.component.css']

})

export class ListaCochesComponent implements OnInit {
  coches?: Coches[];
  cocheActual: Coches = {};
  indiceActual = -1;
  marca = '';
  content: any;
  userService: any;
  constructor(private cochesService: CochesService, userService: UserService) { }

  ngOnInit(): void {
    this.recuperarCoches();
  
      this.userService.getAdminBoard().subscribe(
      data => {
      this.content = data;
      },
      err => {
      this.content = JSON.parse(err.error).message;
      }
      );
  
  }

  recuperarCoches(): void {
    this.cochesService.getAll()
      .subscribe({
        next: (data) => {
          this.coches = data;
          console.log
            (data);
        },

        error: (e) => console.error(e)

      });
  }

  refrescarLista(): void {
    this.recuperarCoches();
    this.cocheActual = {};
    this.indiceActual = -1;
  }

  setCocheActivo
    (coche: Coches, indice: number): void {
    this.cocheActual = coche;
    this.indiceActual = indice;
  }

  eliminarTodosCoches(): void {
    this.cochesService.deleteAll().subscribe({

        next: (res) => {
          console.log(res);
          this.refrescarLista();
        },

        error: (e) => console.error(e)
      });
  }

  buscarMarca(): void {
    this.cocheActual = {};
    this.indiceActual = -1;
    this.cochesService.findByMarca(this.marca).subscribe({
        next: (data) => {

          this.coches = data;
          console.log
            (data);
        },

        error: (e) => console.error(e)
      });
  }
}
