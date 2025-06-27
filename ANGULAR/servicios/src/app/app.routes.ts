import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { UsersList } from './pages/users-list/users-list';

export const routes: Routes = [
    {path: 'products', component: ProductsList},
    {path: 'usuarios', component: UsersList}
];
