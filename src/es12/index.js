//replace all

const string = "JavaScript maravilloso, JavaScript sirve para contruir la nueva web";
const replacedString = string.replaceAll("JavaScript", "Python");           //remplza todo lo que diga JavaScript por Python

console.log(replacedString)

//metodos privados que se usan dentro de las clases

class Message {
    show(val) {                 //con este simbolo "#" el metodo solo puede ser accedido dentro de la clase 
        console.log(val);
    };
    get #add(val) {
        ...
    }
}

const message = new Message();      //no se puede acceder pues no esta dentro de la clase
message.show('hola');

//