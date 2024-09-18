const matriz = [[[1,2],[3]],[[4,5,6]],[[7,8,9],[10,11]]];

const newArray = []
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let k = 0; k < array.length; k++) {
        const array2 = array[k];
        for (let j = 0; j < array2.length; j++) {
            const element = array2[j];
            newArray.push(element)
        }
    }
}

console.log(newArray);


const rta = matriz.flat(2)
console.log(rta);


const matriz2 = [
    0, 
    [1,2,3],
    [4,5,[6,7,8,[9,10]]],
    [[11,12,[13,14],15],16]
];

function aplanarMatriz(matriz2){
    let array = [];
    for(element of matriz2){
        if(Array.isArray(element)){
            array = array.concat(aplanarMatriz(element))
        } else {
            array.push(element)
        }
    }
    return array
}

console.log(aplanarMatriz(matriz2));


