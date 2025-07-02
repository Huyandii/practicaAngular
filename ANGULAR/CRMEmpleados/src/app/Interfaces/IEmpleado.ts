export interface IEmpleado {

  _id: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  departamento: 
    | "direccion"
    | "recursoshumanos"
    | "desarrollo"
    | "diseño";
  salario: number;
  createdAt: Date; 
  updatedAt: Date;

}