//Devuelve clave y valores de una matriz

const data = {
    frontend: 'Oscar',
    backend: 'Braulio',
    design: 'Ana',
}

const entries = Object.entries(data);   //devuelve en forma de matriz los elementos de un array
console.log(entries);

const data = {
    frontend: 'Oscar',
    backend: 'Braulio',
    design: 'Ana',
}

const values = Object.values(data); //devuelve el valor de los elementos de un objeto en forma de array
console.log(values);
console.log(values.length);

//Padding

const string = 'hello';
console.log(string.padStart(8,' hi'));      //agrega los caracteres extras declarados en el metodo .padStart
console.log(string.padEnd(12,' ------'));

//Async Await