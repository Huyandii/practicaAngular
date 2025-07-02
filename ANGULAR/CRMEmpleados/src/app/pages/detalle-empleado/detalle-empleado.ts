import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { Router } from '@angular/router';
import { IEmpleado } from '../../Interfaces/IEmpleado';




@Component({
  selector: 'app-detalle-empleado',
  imports: [CommonModule],
  templateUrl: './detalle-empleado.html',
  styleUrl: './detalle-empleado.css'
})
export class DetalleEmpleado {

  @Input() idEmpleado: string = '';
  router = inject(Router);
  empleadosService = inject(EmpleadosService);

  empleado?: IEmpleado;

  async ngOnInit() {
    if (this.idEmpleado) {
      this.empleado = await this.empleadosService.getById(this.idEmpleado);
    }
  }
}

