export class Articulo{
    nombre : string;
    descripcion : string;
    ref : number;
    color : string;
    talla: number;
    cantidad : number;
    precio : number;
    rebajado : boolean;
    rebaja : number;
    precio_rebajado : number ; 

    constructor(nombre, descripcion, ref, color, talla, cantidad, precio, rebajado, rebaja, precio_rebajado){
    this.nombre=nombre,
    this.descripcion=descripcion;
    this.ref=ref;
    this.color=color;
    this.talla=talla;
    this.cantidad=cantidad;
    this.precio=precio;
    this.rebajado=rebajado;
    this.rebaja=rebaja;
    this.precio_rebajado=precio_rebajado;
    }
}