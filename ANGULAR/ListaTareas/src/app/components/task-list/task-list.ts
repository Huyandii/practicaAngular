import { Component, Input } from '@angular/core';
import { TaskForm } from '../task-form/task-form'
import { ITarea } from '../Elementos/Tarea';
import { CardTarea } from "../card-tarea/card-tarea";
@Component({
  selector: 'app-task-list',
  imports: [CardTarea],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tareas: ITarea[] = [];
}
