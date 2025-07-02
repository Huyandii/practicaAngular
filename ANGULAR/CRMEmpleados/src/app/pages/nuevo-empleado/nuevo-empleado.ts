import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-empleado.html',
  styleUrl: './nuevo-empleado.css'
})
export class NuevoEmpleado {

  router = inject(Router)

  empleadosService = inject(EmpleadosService);

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
    departamento: new FormControl(),
    salario: new FormControl()
  });

  async onSubmit() {
    try {
      const response = await this.empleadosService.create(this.formulario.value);
      // response es la RESPUESTA POSITIVA de la promesa
      await Swal.fire({
        title: 'Exito',
        text: 'Se a creado un nuevo empleado',
        icon: 'success'
      });
      this.router.navigateByUrl('/empleados');
    } catch (error) {
      // error es la RESPUESTA NEGATIVA de la promesa
      Swal.fire({
        title: 'Error',
        text: 'Error en el envío. Revisa el formulario.',
        icon: 'error'
      });
    }
  }

}