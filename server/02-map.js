const letters = ["a", "b", "c"]

const newArray = []
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(element + "++");
}

const result = letters.map(element => element + "++")
console.log(result);


  