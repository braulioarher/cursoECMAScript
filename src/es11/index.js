//dynamic import
//importa un elemento de forma dynamica o sea llama a otro archivo cuando se desencade un evento

const button = document.getElementById("btn");

button.addEventListener("click", async function (){         //cuando se de click se ejecuta la funcion
    const module = await import("./file.js");               //la funcion equivale a la importacion de una funcion en otro archivo
    module.hello();
});

//BIG INT

const aBigNumber = 9007199254740991n; //el valor mas grande permitido antriormente
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//promise allSettled

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve1"));

Promise.allSettled([promise1, promise2, promise3])          //ejecuta todas las promesas sin importar si hay errores
    .then(response => console.log(response));

//global this 

//proporciona una forma standar para poder acceder al vallor global de ese elemento

console.log(window);
console.log(globalThis);

//operador de null operador 

const fooo = null ?? 'default string' //si el valor de fooo es nullo se le asigna un string por default

//optional chainning

const user = {};
console.log(user?.profile?.email);//permite leer un elemento sin romper la aplicacion en caso que no existe devuelve undifined

    if(user?.profile?.email) {
        console.log('existe un email')
    } else {
        console.log('no existe email')
    }