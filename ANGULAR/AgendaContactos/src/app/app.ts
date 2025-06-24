import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaContacto } from './components/lista-contacto/lista-contacto';
import { CardContacto } from './components/card-contacto/card-contacto';
import { Formulario } from "./components/formulario/formulario";
import { IContacto } from './components/Elementos/Contacto';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaContacto, CardContacto, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  arrContactos: IContacto[] = [];

  onContactoCreado($event: IContacto){
    this.arrContactos.push($event);
    console.log(this.arrContactos);
    

  }
  
}
