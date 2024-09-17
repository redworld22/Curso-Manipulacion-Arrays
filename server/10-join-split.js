const elements = ['Fire', 'Air', 'Water'];

let rtaFinal = '';
const separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator
}

console.log(rtaFinal);


const rta = elements.join(', ')
console.log(rta);

const title = 'Curso de manipulación de arrays'

titleFinal = title.split(' ').join('-').toLocaleLowerCase()
console.log(titleFinal);


// Another Example

const cadena = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web."

console.log(cadena.split(" "));

console.log(cadena.split(", "));
 
console.log(cadena.split("JavaScript"));

console.log(cadena.split(" ", 3));
 
