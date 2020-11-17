import { Component, OnInit } from '@angular/core';
import {Articulo} from '../../models/Articulo';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {


listaArticulos:Articulo[];

  constructor() {   
  }

  ngOnInit(): void {
  let a1= new Articulo("zapato generico","zapato generico de color negro, feo pero funcional",8472914856,"negro",42,1,
  49.99,true,25,37.51);

  this.listaArticulos.push(a1);
  }

}
