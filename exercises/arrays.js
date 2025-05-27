*************
10.
*************
//Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]);  
console.log(meses[10]); 

*************
11.
*************
//Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort)

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.sort();

console.log(meses);

*************
12.
*************
//Agregar un elemento al principio y al final del array (utilizar unshift y push)

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Inicio");  
meses.push("Fin");       

console.log(meses);

*************
13.
*************
//Quitar un elemento del principio y del final del array (utilizar shift y pop).

let meses = ["Inicio", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre", "Fin"];

meses.shift();
meses.pop();  

console.log(meses);


*************
14.
*************
//Invertir el orden del array (utilizar reverse).
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.reverse();

console.log(meses);


