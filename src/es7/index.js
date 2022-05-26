//metodo include para saber si hay un valor dentro de un array

let numbers = [1, 5, 3, 7, 6, 8, 9];

if (numbers.includes(7)) {
    console.log ('Si se incluye el numero 7');
}else {
    console.log('No se encontro un 7');
}

//Elevar a la potencia

let base = 4;
let exponent = 3;
let result  = base ** exponent;         //solo se necesita poner el doble ** para elevar a potencia deseada