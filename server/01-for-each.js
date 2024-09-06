const letters = ["a", "b", "c"]

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log("for", element);
}

letters.forEach(item => console.log("forEach", item));

const products = [
    {
        title: "Hot Dog", 
        price: 150
    },

    {
        title: "Pizza",
        price: 300
    }
]