*************
4.
*************
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

let mensaje = "javascript básico";
let mensajeMayus = mensaje.toUpperCase();

console.log(mensajeMayus);


*************
5.
*************
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let texto = "programación";
let primeros5 = texto.substring(0, 5);

console.log(primeros5);

*************
6.
*************
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let palabra = "programación";
let ultimos3 = palabra.substring(palabra.length - 3);

console.log(ultimos3);

*************
7.
*************
//Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCa

let texto = "pROGRAMACIÓN";
let primeraMayus = texto.substring(0, 1).toUpperCase();
let restoMinus = texto.substring(1).toLowerCase();
let resultado = primeraMayus + restoMinus;

console.log(resultado);

*************
8.
*************
//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
let texto = "Hola mundo cruel";
let posicionEspacio = texto.indexOf(" ");

console.log("La posición del primer espacio es: " + posicionEspacio);

*************
9.
*************
//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

let texto = "programacion avanzada";
let espacio = texto.indexOf(" ");

let palabra1 = texto.substring(0, espacio);
let primera1 = palabra1.substring(0, 1).toUpperCase();
let resto1 = palabra1.substring(1).toLowerCase();
let palabra1Formateada = primera1 + resto1;

let palabra2 = texto.substring(espacio + 1);
let primera2 = palabra2.substring(0, 1).toUpperCase();
let resto2 = palabra2.substring(1).toLowerCase();
let palabra2Formateada = primera2 + resto2;

let resultado = palabra1Formateada + " " + palabra2Formateada;

console.log(resultado);

