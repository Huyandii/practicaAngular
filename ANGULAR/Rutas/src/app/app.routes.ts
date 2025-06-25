
import { Routes } from '@angular/router';
import { Info } from './pages/info/info';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';



export const routes: Routes = [
    { path: '', component: Home },
    { path: 'informacion', component: Info },
    { path: 'contacto', component: Contact },
    { path: '**', redirectTo: '' }
    // path : '**', component: Error404
];

