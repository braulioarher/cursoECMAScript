function newFunction(name, age, country) {
    var name = name || 'Braulio';
    var age = age || 23;
    var country = country || 'MX';
    console.log(name, age, country);
}

//es6

function newFunction2(name = 'Braulio', age = 23, country = 'MX') {
    console.log(name, age, country);                                 //a diferencia de versiones anteriores en esta se puede
}                                                                   //asignar valores por defecto en los parametros de la funcion

newFunction2();                     //Arroja valores por defecto
newFunction2('Juan', 23, 'MX');     //Arroja los valores establecidos

//Templeate literal

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`       //ayuda a concatenar sin usar el simbolo "+"

//Multilinea

let lorem = "Escribiendo frase de muestra para su uso practico posterior \n" + "otra frase concatenada pero en otra linea usando /n";

let lorem2 = `Una frase mas que se necesita para ejemplificar
una frase mas en un salto de linea concatenado sin usar "/n"      
`;                                                              //a diferencia de la version anterior se pueden usar las comillas
                                    //francesas para hacer el salto de linea sin concatenar "``"

console.log(lorem);
console.log(lorem2)

//DE ESTRUCTURACION DE ELEMENTOS

let person = {
    'name' : 'Braulio',
    'age' : 23,
    'country' : 'MX'
}

console.log(person.name, person.age, person.country);

let {name, age} = person;   //de esta forma podemos llamar a los elementos de un objeto segun los que necesitemos
console.log(name, age);     

//Operador de propagacion

let team1 = ['Braulio', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yessica', 'Camila'];

let education = ['Davis', ...team1, ...team2];      //Ayuda a unir o concatenar mas de un array

//let es una nueva 

{
    var globalVar = 'Globla var'        //puede estar disponible en cualquier lugar
}

{
    let globalLet = 'Globla let'        //solo esta disponible dentro de este scope o este bloque
}

console.log(globalVar);
console.log(globalLet);

const a = 'b';                          //se usa para declarar constantes y nunca va cambiar su valor