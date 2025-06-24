import { Component } from '@angular/core';

@Component({
  selector: 'saludo',
  imports: [],
  templateUrl: './saludo.html',
  styleUrl: './saludo.css'
})
export class Saludo {

  nombre: string = 'Federico';
  activo: boolean = true;

  ngOnInit() {
    // El código dentro de este método (ngOnInit) se ejecuta automáticamente cuando aparece el componente

    setTimeout(() => {
      this.nombre = 'Rosita';
    }, 3000);

    setInterval(() => {
      this.activo = !this.activo;
    }, 1000);

  }

}
