// TIPOS

let str: string = 'Hola';
str = 'Adios';
str = `que pasa`;

str.toLowerCase();

let cont: number = 9;
const activo: boolean = false;

const numeros: number[] = [1, 2, 3, 4, 5, 6];
numeros.push(67);

// INTERFACES
interface Producto {
    nombre: string;
    precio: number;
    stock: number;
    categoria?: string;
}

const prod: Producto = {
    stock: 2,
    nombre: 'Pan',
    precio: 34
}

const prod1: Producto = {
    nombre: 'Pescado',
    stock: 3,
    precio: 9,
    categoria: 'otra'
}

prod.categoria = 'mas';
console.log(prod1.precio);

const productos: Producto[] = [prod];
productos.push(prod1);

// TIPOS FUNCIONES
function sumar(a: number, b: number): number {
    return a + b;
}

sumar(4, 5);
sumar(56, 18);

function sumaNumeros(arr: number[]): number {
    let total: number = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

const total = sumaNumeros([1, 9, 8, 2]);

// UNION TYPES
let cadena: string | undefined;
cadena = 'cadena de caracteres';
cadena = undefined;

let desastre: number[] | boolean;

type inventado = string | undefined;
let cadena2: inventado = 'Pepito';

type cadenaCaracteres = string;
const nombre: cadenaCaracteres = 'Mario';