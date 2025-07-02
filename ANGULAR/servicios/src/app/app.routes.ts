import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { UsersList } from './pages/users-list/users-list';
import { NewProduct } from './pages/new-product/new-product';

export const routes: Routes = [
    {path: 'products', component: ProductsList},
    {path: 'usuarios', component: UsersList},
    {path: 'product/new', component: NewProduct}
];
