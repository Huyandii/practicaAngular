import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';
import { IEmpleado } from '../../Interfaces/IEmpleado';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { arrRemove } from 'rxjs/internal/util/arrRemove';
import { AwardIcon } from 'lucide-angular';


@Component({
  selector: 'app-empleados-list',
  imports: [RouterLink],
  templateUrl: './empleados-list.html',
  styleUrl: './empleados-list.css'
})
export class EmpleadosList {

  arrEmpleados: IEmpleado[] = [];

  empleadosService = inject(EmpleadosService)

  async ngOnInit() {
    const response = await this.empleadosService.getAll();
    this.arrEmpleados = response;
  }



  async onClick(idEmpleado: string) {
    try {
      const result = await Swal.fire({
        title: 'borrar',
        text: 'confirmar el borrado del pelado?',
        showCancelButton: true
      })

      if (result.isConfirmed) {

        await this.empleadosService.remove(idEmpleado);
        Swal.fire('Hibrido', 'El empleado se ha borrado', 'success')

        const response = await this.empleadosService.getAll();
        this.arrEmpleados = response;
      }
    } catch (error) {
      Swal.fire('error', 'eres gilipollas', 'warning')
    }
  }



   async onChange($event: Event){
    const selectDepartamento = $event.target as HTMLSelectElement
    if(selectDepartamento.value){
      this.arrEmpleados = await this.empleadosService.getByDepartamento(selectDepartamento.value);
    }else{
      this.arrEmpleados = await this.empleadosService.getAll();
    }
  }







}

