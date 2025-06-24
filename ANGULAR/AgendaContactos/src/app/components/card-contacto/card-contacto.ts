import { Component, Input, } from '@angular/core';
import { IContacto } from '../Elementos/Contacto';
@Component({
  selector: 'card-contacto',
  imports: [],
  templateUrl: './card-contacto.html',
  styleUrl: './card-contacto.css'
})
export class CardContacto {

  @Input() contacto: IContacto | undefined;
}