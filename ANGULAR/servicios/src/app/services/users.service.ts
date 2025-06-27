import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../interfaces/IUsers';

type ApiUses = {
    page: number,
    per_page: number,
    total: number,
    totalPages: number,
    results: IUsers[]
  }

@Injectable({
  providedIn: 'root'
})



export class UsersService {

  httpClient = inject(HttpClient);



ngOnInit(){

}

  getAll(page: number = 1) {

    return lastValueFrom(
      this.httpClient.get<ApiUses>(` https://peticiones.online/api/users?page=${page}`)
    );

  }

}
