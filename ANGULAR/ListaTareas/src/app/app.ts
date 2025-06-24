import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UpComponets } from './components/up-componets/up-componets';
import { TaskForm } from "./components/task-form/task-form";
import { ITarea } from './components/Elementos/Tarea';
import { TaskList } from './components/task-list/task-list';
import { CardTarea } from "./components/card-tarea/card-tarea";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpComponets, TaskForm, TaskList, CardTarea],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Outpur de tasknform
  arrTareas: ITarea[] = []
  onCrearTarea($event: ITarea) {
    this.arrTareas.push($event);
  }






}
// crear una interfaz ITask con nombre y propiedad
