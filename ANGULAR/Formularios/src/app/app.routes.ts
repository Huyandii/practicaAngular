import { Routes } from '@angular/router';
import { Registro } from './pages/registro/registro';
import { Hoteles } from './pages/hoteles/hoteles';

export const routes: Routes = [
    {path: '', redirectTo: '/registro', pathMatch: 'full'},
    {path: 'registro', component: Registro},
    {path: 'hotel', component: Hoteles},
    {path: '**', redirectTo: '/registro'}
];
