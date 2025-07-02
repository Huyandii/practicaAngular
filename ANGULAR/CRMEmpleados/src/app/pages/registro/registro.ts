import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})

export class Registro {
  router = inject(Router)
  usuariosservice = inject(UsuariosService);


  formulario: FormGroup = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })

  async onSubmit() {
    try {
      const response = await this.usuariosservice.registro(this.formulario.value);
      this.router
      
      Swal.fire('exito', 'usuario registrado', 'success')
    } catch (error) {

      Swal.fire('error', 'registro fallido', 'error')
    }

  }
}
