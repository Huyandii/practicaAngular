import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,} from '@angular/forms';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-new-product',
  imports: [ReactiveFormsModule],
  templateUrl: './new-product.html',
  styleUrl: './new-product.css'
})
export class NewProduct {

  productService = inject(ProductsService);


  newProductForm: FormGroup = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
    category: new FormControl(),
    image: new FormControl(),
    active: new FormControl()
  });
  


  async onSubmit(){
    //Acccion para que el formulario se envie/ se ejecuta cuando se pulsa el boton 'enviar' de mi formulario

    // Objeto con los datos del nuevo producto --> this.newProductForm.value
    

    const response = await this.productService.create(this.newProductForm.value)
    console.log(response)
  }

}
  


