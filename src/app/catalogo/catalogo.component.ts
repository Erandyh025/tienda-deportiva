import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../Services/conexion.service';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  producto:any;
  constructor(private productosService: ConexionService) { }

  ngOnInit(){
    this.productosService.getProductos().subscribe( res => {
      this.producto = res;
    });
  }
}
