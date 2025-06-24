import { Component, EventEmitter, Output } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-contar',
  imports: [],
  templateUrl: './contar.html',
  styleUrl: './contar.css'
})
export class Contar {
  @Output() multiplo5: EventEmitter<number> = new EventEmitter();
  numero: number = 0;



  onClick(incrementar: boolean) {
    if (incrementar) {
      this.numero++
    } else {
      this.numero--
    };
    //compruebo si es multiplo de 5
    if (this.numero % 5 === 0) {
      this.multiplo5.emit(this.numero);
    }
  }


}
