import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUsers } from '../../interfaces/IUsers';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css'
})
export class UsersList {
  
  UserService = inject(UsersService);

  arrUsers: IUsers[] = [] 

  totalPages: number = 0



async ngOnInit(){
  const respuesta = await this.UserService.getAll();
  this.arrUsers = respuesta.results;
;}


}

