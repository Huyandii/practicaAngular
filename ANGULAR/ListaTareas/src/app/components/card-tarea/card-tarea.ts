import { Component, Input } from '@angular/core';
import { ITarea } from '../Elementos/Tarea';
@Component({
  selector: 'app-card-tarea',
  imports: [],
  templateUrl: './card-tarea.html',
  styleUrl: './card-tarea.css'
})
export class CardTarea {
  @Input() tarea: ITarea | undefined;
}
