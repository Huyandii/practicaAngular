// TIPOS
var str = 'Hola';
str = 'Adios';
str = "que pasa";
str.toLowerCase();
var cont = 9;
var activo = false;
var numeros = [1, 2, 3, 4, 5, 6];
numeros.push(67);
var prod = {
    stock: 2,
    nombre: 'Pan',
    precio: 34
};
var prod1 = {
    nombre: 'Pescado',
    stock: 3,
    precio: 9,
    categoria: 'otra'
};
prod.categoria = 'mas';
console.log(prod1.precio);
var productos = [prod];
productos.push(prod1);
// TIPOS FUNCIONES
function sumar(a, b) {
    return a + b;
}
sumar(4, 5);
sumar(56, 18);
function sumaNumeros(arr) {
    var total = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var num = arr_1[_i];
        total += num;
    }
    return total;
}
var total = sumaNumeros([1, 9, 8, 2]);
// UNION TYPES
var cadena;
cadena = 'cadena de caracteres';
cadena = undefined;
var desastre;
var cadena2 = 'Pepito';
var nombre = 'Mario';
