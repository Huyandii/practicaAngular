import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css'
})
export class Eventos {
  contenidoParrafo: string = ''; //PARA METER CONTENIDO
  inputType: string = 'password'
  manejarClick() {
    console.log('Se pulsa el boton!!!!')
  }

  cambiarColor(color: string) {
    document.body.style.backgroundColor = color;

  }

  guardarTexto($event: Event) {
    console.log($event);
    if ($event.target) {
      const inputText = $event.target as HTMLInputElement;
      this.contenidoParrafo = inputText.value;
    }

  }
  // ejemplo facil
  //PARA METER CONTENIDO 
  onFocus($event: Event) {
    this.contenidoParrafo = 'el conenido tiene el foco'//

  }


  onBlur() {
    this.contenidoParrafo = 'el contenid del texto ha perdido el foco'
  }


  onClickPassword() {

    //   if (this.inputType === 'text'){
    //     this.inputType = 'password';
    //   }else{
    //     this.inputType = 'text'
    //   }
    // }
    this.inputType = this.inputType === 'text' ? 'password' : 'text';
  }
}
