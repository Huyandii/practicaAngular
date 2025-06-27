// explicacion 12:11
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { IProducts } from '../interfaces/IProducts';

type ApiRespuesta = {
  page: number, per_page: number, total: number, totalPages: number, results: IProducts[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // como hacemos peticiones en angular (http)
  httpClient = inject(HttpClient);




  getAll(page: number = 1) {
    // GET https://peticiones.online/api/products

    return lastValueFrom(
      this.httpClient.get<ApiRespuesta>(`https://peticiones.online/api/products?page=${page}`)
    );

  }









}
// 