import { Component } from '@angular/core';
import { Saludo } from './components/saludo/saludo';
import { Eventos } from "./components/eventos/eventos";
import { CuentaAtras } from "./components/cuenta-atras/cuenta-atras";
import { CardEmpleado } from './components/card-empleado/card-empleado';
import { Sumar } from './components/sumar/sumar';


@Component({
  selector: 'app-root',
  imports: [Saludo, Eventos, CuentaAtras, CardEmpleado, Sumar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'PrimeraApp';
}
