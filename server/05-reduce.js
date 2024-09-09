const totals = [1,2,3,4,5];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element
}

console.log(sum);


// con el método Reduce

const sum2 = 0;
const respuesta = totals.reduce((sum2, element) => sum2 += element, 0);

console.log(respuesta);


// another example

const numbers = [1, 3, 2, 3, 4, 5, 3, 1, 5,6,8,10, 9,7, 4, 6, 8]

const result = numbers.reduce((obj, item) => {
    if(!obj[item]){
        obj[item] = 1;
    } else{
        obj[item] = obj[item] + 1;
    }
    return obj
}, {});

console.log(result);


// another example

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const result3 = data.map(item => item.level).reduce((obj, value) => {
    if(!obj[value]){
        obj[value] = 1
    } else {
        obj[value] += 1
    } return obj
  }, {})
  console.log(result3);
  

  // Homework

const numbers2 = [1, 3, 2, 3, 4, 5, 3, 1, 5,6,8,10, 9,7, 4, 6, 8];

const result2 = numbers2.reduce((obj, item) => {
    if(item <= 5)
        obj["1-5"] += 1;
    else if(item <= 8)
        obj["6-8"] += 1;
    else (item <= 10)
        obj["9-10"] += 1;
    return obj
}, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0
})

console.log(result2);
