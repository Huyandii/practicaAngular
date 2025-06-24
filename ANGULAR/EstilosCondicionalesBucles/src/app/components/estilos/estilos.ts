import { compileOpaqueAsyncClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-estilos',
  imports: [],
  templateUrl: './estilos.html',
  styleUrl: './estilos.css'
})
export class Estilos {
  estilosParrafo: any = {
    color: 'blue',
    backgroundColor: 'red'
  }

  isActivo: boolean = true;
  

  modificarColor() {
    const copia = { ...this.estilosParrafo }
    copia.color = 'red'
    copia.backgroundColor = 'white';
    this.estilosParrafo = copia;
  }




  modificarFondo(color: string) {
    const copia = { ...this.estilosParrafo }
    copia.backgroundColor = color
    this.estilosParrafo = copia
  }


  onInput($event: Event) {
    const htmlInput = $event.target as HTMLInputElement;
    this.estilosParrafo = {
      ...this.estilosParrafo,
      color: htmlInput.value
    }
  }

  rango($event: Event) {
    const htmlInput = $event.target as HTMLInputElement;
    this.estilosParrafo = {
      ...this.estilosParrafo,
      fontSize: htmlInput.value + 'px'
    }
  }







}