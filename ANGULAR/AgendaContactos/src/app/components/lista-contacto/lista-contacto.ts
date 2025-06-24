import { Component, Input, } from '@angular/core';
import { CardContacto } from '../card-contacto/card-contacto';
import { IContacto } from '../Elementos/Contacto';

@Component({
  selector: 'lista-contactos',
  imports: [CardContacto ],
  templateUrl: './lista-contacto.html',
  styleUrl: './lista-contacto.css'
})
export class ListaContacto {
  @Input() contactos: IContacto[] = [];

}
