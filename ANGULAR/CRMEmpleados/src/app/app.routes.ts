import { Routes } from '@angular/router';
import { EmpleadosList } from './pages/empleados-list/empleados-list';
import { NuevoEmpleado } from './pages/nuevo-empleado/nuevo-empleado';
import { EditEmpleado } from './pages/edit-empleado/edit-empleado';
import { DetalleEmpleado } from './pages/detalle-empleado/detalle-empleado';
import { Registro } from './pages/registro/registro';
import { Login } from './pages/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

    { path: 'empleados', component: EmpleadosList, canActivate: [authGuard] },
    { path: 'empleados/nuevo', component: NuevoEmpleado, canActivate: [authGuard] },
    { path: 'empleados/edit/:idEmpleado', component: EditEmpleado, canActivate: [authGuard] },

    { path: 'empleados/detalle/:idEmpleado', component: DetalleEmpleado },
    { path: 'registro', component: Registro },
    { path: 'login', component: Login }
];
