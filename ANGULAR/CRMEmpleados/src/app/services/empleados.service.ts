import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IEmpleado } from '../Interfaces/IEmpleado';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private httpClient = inject(HttpClient);
  private baseUrl: string = 'https://crm-empleados.onrender.com/api/empleados';

  //lanza la peticion para recuperar todos los empleados
  //
  getAll() {
    return lastValueFrom(
      this.httpClient.get<IEmpleado[]>(this.baseUrl)
    );
  }
  getById(idEmpleado: string){
    return lastValueFrom(
      this.httpClient.get<IEmpleado>(`${this.baseUrl}/${idEmpleado}`)
    );

  }
    getByDepartamento(nombreDepartamento: string){
      return lastValueFrom(
        this.httpClient.get<IEmpleado[]>(`${this.baseUrl}/departamento/${nombreDepartamento}`)
      )
  }

  create(nuevoEmpleado: IEmpleado){
    return lastValueFrom(
      this.httpClient.post<IEmpleado>(this.baseUrl, nuevoEmpleado)
    );
  }


  edit(idEmpleado: string, body: IEmpleado){
    return lastValueFrom(
      this.httpClient.put<IEmpleado>(`${this.baseUrl}/${idEmpleado}`,body)
    );
  }

  remove(idEmpleado: string){
    return lastValueFrom(
      this.httpClient.delete<IEmpleado>(`${this.baseUrl}/${idEmpleado}`)
    )

  }


}