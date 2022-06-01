let array = [1, 2, 3, 4, 5, [1, 2, 3, [1, 2, 3,]]]; //array de profundidad = 2

console.log(array.flat(2));         //metodo que ayuda a ordenar un array en una matriz segun su prunfundidad

//flat map permite mapear un array aplicando una funcion y aplanar el array

let array = [1, 2, 3, 4, 5, 1, 2, 3, [1, 2, 3,]]; //array de profundidad = 2

let nuevoArray = array.flatMap(value => [value * 2]);

console.log(nuevoArray);    //se le aplica la funcion a cada elemnto del array multiplicado por 2- 

//elimina nos espacio en blanco de un string

let hello = '      hello world';
console.log(hello);
console.log(hello.trimStart());         //elimina los espacios del inicio o final de un string segun se necesite

//transforma cada valor en objetos

let entries = [["name", "Braulio"], ["age", 32]];

console.log(Object.fromEntries(entries));               //se crea un objeto a partit de un array

//objeto de tipo simbol

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);       //crea un elemento de un objeto a partir de una variable
console.log(symbol.description)     //imprime valores de los elementos de un objeto