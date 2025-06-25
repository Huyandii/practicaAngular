import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  router = inject(Router);

 onClick( ruta: string ) {
    //Hago cosas y luego navego
    this.router.navigateByUrl(ruta);
  }
}
