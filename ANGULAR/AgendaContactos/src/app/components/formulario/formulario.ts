import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IContacto } from '../Elementos/Contacto';
import { CardContacto } from "../card-contacto/card-contacto";

@Component({
  selector: 'formulario',
  imports: [FormsModule, CardContacto],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  nuevoContacto: IContacto = { nombre: '', telefono: '', email: '', departamento: '' }

  @Output() contactoCrado: EventEmitter<IContacto> = new EventEmitter();

  onClick() {
    this.contactoCrado.emit(this.nuevoContacto);
     this.nuevoContacto = { nombre: '', telefono: '', email: '', departamento: '' }
    //TODO:Girito
  }
  
}

