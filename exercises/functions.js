/*************
23.
*************/
//Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 3);

console.log("El resultado de la suma es: " + resultado);


/*************
24.
*************/
//A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function suma(a, b) {

  if (isNaN(a) || isNaN(b)) {

    alert("Error: uno de los parámetros no es un número");

    return NaN;

  }

  return a + b;

}
let resultado = suma(5, "hola");


console.log("Resultado:", resultado);


/*************
25.
*************/
//Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

function validateInteger(numero) {
    return Number.isInteger(numero);
}
let valor1 = 10;
let valor2 = 3.14;
let valor3 = "5";

console.log("¿Es entero?", valor1, "→", validateInteger(valor1)); 
console.log("¿Es entero?", valor2, "→", validateInteger(valor2)); 
console.log("¿Es entero?", valor3, "→", validateInteger(valor3)); 


/*************
26.
*************/
//A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    if (!Number.isInteger(a)) {
        alert("El primer número no es entero. Se redondeará.");
        a = Math.round(a);
    }

    if (!Number.isInteger(b)) {
        alert("El segundo número no es entero. Se redondeará.");
        b = Math.round(b);
    }

    return a + b;
}

let resultado = suma(4.7, 5.2);

console.log("Resultado:", resultado);


/*************
27.
*************/
//Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validateAndRoundInteger(numero, nombreParametro) {
    if (!Number.isInteger(numero)) {
        alert(`El valor de ${nombreParametro} no es entero. Se redondeará.`);
        return Math.round(numero);
    }
    return numero;
}

function suma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        alert("Error: uno de los parámetros no es un número");
        return NaN;
    }

    a = validateAndRoundInteger(a, "a");
    b = validateAndRoundInteger(b, "b");

    return a + b;
}
let resultado = suma(3.7, 6.3);
console.log("Resultado:", resultado);



