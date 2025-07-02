import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  //!\ - si el token existe lo incluimos en las cabeceras de la peticion - /!\
  const token = localStorage.getItem('token_crm')

  if (token) {
    //Para modificar la peticion, hay que clonarla
    const reqAuth = req.clone({
      setHeaders: {
        Authorization: token
      }
    }); 
    return next(reqAuth);
  }
  return next(req);
};
