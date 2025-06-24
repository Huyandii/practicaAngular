import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contar } from './components/contar/contar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
onMultiplo5($event: number ) {
  console.log(`El multiplo de 5 es ${$event}`)
}
}


