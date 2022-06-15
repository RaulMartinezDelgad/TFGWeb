import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { AgregarCochesComponent } from './componentes/agregar-coches/agregar-coches.component';
import { CochesDetallesComponent } from './componentes/coches-detalles/coches-detalles.component';
import { ListaCochesComponent } from './componentes/lista-coches/lista-coches.component';
import { CarritoComponent } from './carrito/carrito.component';;
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'coches', component: ListaCochesComponent },
  { path: 'coches/:id', component: CochesDetallesComponent },
  { path: 'agregar', component: AgregarCochesComponent },
  { path: 'producto', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', component: Error404Component },
  { path: '', redirectTo: 'home', pathMatch: 'full' },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }