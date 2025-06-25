
import { Routes } from '@angular/router';
import { Info } from './pages/info/info';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { DetalleProducto } from './pages/detalle-producto/detalle-producto';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'informacion', component: Info },
    { path: 'contacto', component: Contact },
    {path: 'productos/:idProducto', component: DetalleProducto },
    { path: '**', redirectTo: '' }
    // path : '**', component: Error404
];

