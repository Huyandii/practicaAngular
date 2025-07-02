// services/usuarios.service.ts
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUsuario } from '../Interfaces/IUsuarios';
import { lastValueFrom } from 'rxjs';
import { NgLocaleLocalization } from '@angular/common';

type LoginResponse = {
  success: string;
  token: string;
  user: IUsuario;
}

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    private httpClient = inject(HttpClient);
    private baseUrl: string = 'https://crm-empleados.onrender.com/api/usuarios';

    registro(body: IUsuario) {
        return lastValueFrom(
            this.httpClient.post(`${this.baseUrl}/registro`, body)
        );
    }

      login(body: IUsuario) {
        return lastValueFrom(
            this.httpClient.post<LoginResponse>(`${this.baseUrl}/login`, body)
        );
      }


    isLogged(){
      const token = localStorage.getItem('token_crm');
      if(!token){
        return false;
      }
      return true;
    }

}