import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProducts } from '../../interfaces/IProducts';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-products-list',
  imports: [CurrencyPipe],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css'
})
export class ProductsList {

  productService = inject(ProductsService);

  arrProductos: IProducts[] = [];
  page: number = 1;
  totalPages:number  = 0


  async ngOnInit() {


    const response = await this.productService.getAll();
    this.arrProductos = response.results;
    this.totalPages = response.totalPages;

  }

  async onClick(avanzar: boolean) {
    // this.page = avanzar ? this.page + 1 : this.page - 1;
    if(avanzar){
      if(this.page !== this.totalPages)
      this.page++;
      
    }else{
      if(this.page !== 1)
      this.page--;
    }
    
     const response = await this.productService.getAll();
    this.arrProductos = response.results;

  }




}
