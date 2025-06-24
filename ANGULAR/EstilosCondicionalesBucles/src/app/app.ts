import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './components/formulario/formulario';
import { Estilos } from "./components/estilos/estilos";
import { Condicionales } from "./components/condicionales/condicionales";
import { IProducto } from './interfaces/Producto';
import { CardProducto } from "./components/card-producto/card-producto";
import { PruebaPepito } from "./components/prueba-pepito/prueba-pepito";
import { FormularioProducto } from "./components/formulario-producto/formulario-producto";
import { Bucles } from "./components/bucles/bucles";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Formulario, Estilos, Condicionales, CardProducto, PruebaPepito, FormularioProducto, Bucles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'EstilosCondicionalesBucles';

  omultiplo2($event: number) {
    console.log(`el multiplo de 2 es ${$event}`);
    
  }

  onMult($event : number){
    if($event > 10){
      console.log('es mas que 10');
    }else if($event === 0){
      console.log(' es cero');
      
    }else{
      console.log('es menor q 10');
      
    }
    
  }


}
