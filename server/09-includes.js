const pets = ['cat', 'dog', 'bat'];

let incluidesArray = false
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if(element === 'cat'){
        incluidesArray = true;
        break;
    }
}

console.log(incluidesArray);


const rta = pets.includes('cat');
console.log(rta);
