import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuenta-atras',
  imports: [],
  templateUrl: './cuenta-atras.html',
  styleUrl: './cuenta-atras.css'
})
export class CuentaAtras {
  @Input() numero: number = 10;
activa: boolean = false;

  onClicks() {
    this.activa = true;
    const interval = setInterval(() => {
      this.numero--;
      if (this.numero === 0)
        clearInterval(interval);
    }, 100);
  }



}
