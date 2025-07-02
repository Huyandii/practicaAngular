import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosService } from '../../services/empleados.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-edit-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-empleado.html',
  styleUrl: './edit-empleado.css'
})



export class EditEmpleado {


  @Input() idEmpleado: string = '';

  empleadosService = inject(EmpleadosService)
  router = inject(Router)


  // --------------------------------------------- //

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
    departamento: new FormControl(),
    salario: new FormControl()
  });


  async ngOnInit() {
    try {
      const response = await this.empleadosService.getById(this.idEmpleado);
      this.formulario.patchValue(response);
    } catch (error) {
      Swal.fire('Error', 'el empleado no existe', 'error');
      this.router.navigateByUrl('/empleados');
    }
  }

  // Gestionar el envio del formulario 
  async onSubmit() {
    try {
      const response = await this.empleadosService.edit(this.idEmpleado, this.formulario.value);
      Swal.fire('Exito', 'se ha actualizado el Hola mundo', 'success');
      this.router.navigateByUrl('/empleados')

    } catch (error) {
      Swal.fire('Error', 'NO Hola mundo', 'error')
    }
  }



}
