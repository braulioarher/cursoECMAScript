const obj = {
    name: 'Braulio',
    age: 23,
    country: 'MX',
};

let {name, age, ...all} = obj;      //desconstruye un objeto dejando todo a exepcion de los elementos declarados
console.log(all);

//operador de propagacion ...

const obj = {
    name: 'Braulio',
    age: 23,
}

const onj1 = {
    ...obj,             //SE USA PARA UNIR DOS LOS ELEMENTOS DE OTRO OBJETO
    country: 'MX'
}

//Saber cuando termina un llamado

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)  // espera los 3000ms
        : reject(new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))        //si se ejecuto correctamente regresa la respuesta
    .catch(error => console.log(error))             //en caso de que no se ejecute bien regresa un error
    .finally(() => console.log('Finalizo'))         //cuando termina de ejectutarse puede ejecutar otra funcion

//permite crear una variable con un formato definido por ejemplo el formato de fecha

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;   //da formato a la variable regex
const match = regexData.exec('2018-04-20');     //define nuestra variable
const year = match[1];                          //toma el primer elemento del regex
const month = match[2];
const day = match[3];

console.log(year, month, day);
console.log(match);