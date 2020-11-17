import { Component } from '@angular/core';
import listaDeArticulos  from '../assets/json/listaDeArticulos.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carrito-compra';
  public listaArticulos:{nombre : string;
    descripcion : string,
    ref : number,
    color : string,
    talla: number,
    cantidad : number,
    precio : number,
    rebajado : boolean,
    rebaja : number,
    precio_rebajado : number}[]=listaDeArticulos;
}
