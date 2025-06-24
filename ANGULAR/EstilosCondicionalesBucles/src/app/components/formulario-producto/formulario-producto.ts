import { Component,  } from '@angular/core';
import { IProducto2 } from '../../interfaces/producto2';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule, JsonPipe],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {

  producto : IProducto2 = {
    nombre: '', precio: 0, descripcion: ''
  }


}
