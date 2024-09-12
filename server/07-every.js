const numbers = [1,30,39,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element >= 40){
        rta = false;
    }
}

console.log(rta);

let rta2 = numbers.every(element => element <= 40)
console.log(rta2);


// another example

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

let rta3 = team.every(person => person.age < 15)
console.log(rta3);
