import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-prueba-pepito',
  imports: [],
  templateUrl: './prueba-pepito.html',
  styleUrl: './prueba-pepito.css'
})
export class PruebaPepito {
  numero: number = 0;


  @Output() multiplo2: EventEmitter<number> = new EventEmitter();
   @Output() comoTeSalgaDelPichinchi: EventEmitter<number> = new EventEmitter();


  onClick(boton: boolean) {
    if (boton) {
      this.numero++
    } else {
      this.numero--
    }

    if (this.numero % 2 === 0) {
      this.multiplo2.emit(this.numero);
    }
  }



  onMult() {
    this.numero = this.numero * 2;
    if (this.numero > 10) {
      this.comoTeSalgaDelPichinchi.emit(this.numero);
    } else if (this.numero === 0) {
      this.comoTeSalgaDelPichinchi.emit(this.numero);
    }else{
      this.comoTeSalgaDelPichinchi.emit(this.numero);
    }

  }

}