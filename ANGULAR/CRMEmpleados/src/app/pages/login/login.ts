import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  router =inject(Router)
  loginservice = inject(UsuariosService)

  formLogin: FormGroup = new FormGroup({
    email: new FormControl('1234'),
    password: new FormControl('1234')
  })


  async ngOnSubmit() {
    try {
      const response = await this.loginservice.login(this.formLogin.value)
      //Guardo el token en LocalStorage para luego usarlo
      localStorage.setItem('token_crm', response.token);
      //Estamos 'logados' si tenemos el token_crm en localStorage

      Swal.fire('Correcto', 'Registro correcto', 'success')
      this.router.navigateByUrl('/empleados')

    } catch (error) {

      Swal.fire('Error', 'incorrecto', 'error')
    }


  }
}
