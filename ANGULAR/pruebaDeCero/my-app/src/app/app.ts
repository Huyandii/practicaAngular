import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { timeInterval } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-app';
  identificador: string = 'seccionPpal';
  imagenes: string[] = [
    'https://www.cinesa.es/media/vipbygmp/polican_personaje_1.jpg',
    'https://www.cinesa.es/media/cjynzuba/personaje_2_polican.jpg',
    'https://www.cinesa.es/media/02odvdut/polican_personaje_3.jpg',
    'https://i.ytimg.com/vi/SPJTQyN_VOg/hq720.jpg'
  ];
  cont: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.cont++;
      if (this.cont === this.imagenes.length) {
        this.cont = 0;
      }
    }, 3000);
}
}
