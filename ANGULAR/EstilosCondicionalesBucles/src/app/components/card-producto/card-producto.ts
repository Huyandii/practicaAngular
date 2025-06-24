import { Component, Input } from '@angular/core';
import { IProducto } from '../../interfaces/Producto';

@Component({
  selector: 'card-producto',
  imports: [],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css'
})
export class CardProducto {
  
  @Input({ required: true }) producto: IProducto | undefined;

}
