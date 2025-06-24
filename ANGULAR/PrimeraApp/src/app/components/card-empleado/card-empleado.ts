import { Component, Input} from '@angular/core';
import { Empleado } from '../../interfaces/Empleado';
@Component({
  selector: 'app-card-empleado',
  imports: [],
  templateUrl: './card-empleado.html',
  styleUrl: './card-empleado.css'
})
export class CardEmpleado {
  @Input() empleado: Empleado = {
    nombre: 'mario', apellido: 'Griton', email: 'gfdhe@gmail.com', telefono:'975456774', departamento: 'IT'
  }
}
