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

//Sirve para esperar a que una funcion se ejecute segun el intervalo sennialado antes de seguir ejecuntando el codigo

const helloWorld = () => {
    return new Promise((resolve, reject) => {               //la funcion nos regresa una promesa
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)    //si true resolve despues de 3000ms
        : reject(new Error('test Error'))                   //si false return error
    })
};

const helloAsync = async () => {                    //funcion tipo async
    const hello = await helloWorld();           //espera a que se ejecute la funcion helloWorld
    console.log(hello)
}

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloWorld();       //try se usa para manejar bien las funciones en caso de que no funcione 
        console.log(hello);                     //retorna un errror
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();
