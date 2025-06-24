import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IContacto } from '../../interfaces/IContactos';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, JsonPipe ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})


export class Formulario {
  mensaje: string = '';

  contacto: IContacto = {
    nombre: '', email: '', direcction: ''
  }
}

