import { Component, OnInit } from '@angular/core';
import { CochesService } from 'src/app/services/coches.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-agregar-coches',
  templateUrl: './agregar-coches.component.html',
  styleUrls: ['./agregar-coches.component.css']
})

export class AgregarCochesComponent implements OnInit {

  coches={
      marca: '',
      modelo: '',
      precio: ''
    };
    content?: string;
  submitted = false;
  userService: any;

  constructor(private cochesService: CochesService, userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard().subscribe(
    data => {
    this.content = data;
    },
    err => {
    this.content = JSON.parse(err.error).message;
    }
    );
    }

  guardarCoches(): void {
    const data= {
      marca: this.coches.marca,
      modelo: this.coches.modelo,
      precio: this.coches.precio
    };

    this.cochesService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted
            = true
            ;
        },

        error: (
          e) => console.error(e)
      });
  }

  nuevoCoche(): void {
    this.submitted= false;
    this.coches= {

      marca: '',
      modelo: '',
      precio: ''
    };
    
  }
}