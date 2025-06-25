import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from '../Elementos/Tarea';
import { FormsModule } from '@angular/forms';
import { CardTarea } from "../card-tarea/card-tarea";
@Component({
  selector: 'app-task-form',
  imports: [FormsModule, CardTarea],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  nuevaTarea: ITarea = { nombreTarea: '', prioridadTarea: '' }
  
  @Output() crearTarea: EventEmitter<ITarea> = new EventEmitter();

  onClick() {
    this.crearTarea.emit(this.nuevaTarea);
    this.nuevaTarea = { nombreTarea: '', prioridadTarea: ''};
  }


}

