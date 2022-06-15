import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { authInterceptorProviders } from '../_helpers/auth.interceptor';
import { TokenStorageService } from './_services/token-storage.service';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { AgregarCochesComponent } from './componentes/agregar-coches/agregar-coches.component';
import { CochesDetallesComponent } from './componentes/coches-detalles/coches-detalles.component';
import { ListaCochesComponent } from './componentes/lista-coches/lista-coches.component';
import { ProductosComponent } from './productos/productos.component';
import { CarritoComponent } from './carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    Error404Component,
    FooterComponent,
    CartComponent,
    AgregarCochesComponent,
    CochesDetallesComponent,
    ListaCochesComponent,
    ProductosComponent,
    CarritoComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    InfiniteScrollModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
