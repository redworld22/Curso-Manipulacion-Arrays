const words = ["spray", "limit", "elite", "exuberant"];

const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length > 6){
        newArray.push(item);
    }
}

console.log("newArray", newArray);
console.log("original", words);

const result = words.filter(item => item.length >= 6)
console.log("rta", result);
console.log("original", words);


// Otro ejemplo!

const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
    {
        customerName: "Alberto",
        total: 210,
        delivered: false,
    }
];

const rta3 = orders.filter(item => item.delivered && item.total >+ 100)
console.log(rta3);



// otro ejemplo!

const search = (query) => {
    return orders.filter(item => {
        return item.customerName.toString().toLowerCase().includes(query.toLowerCase())
    })
}

console.log(search("Albe"));


// otro ejemplo

const words2 = ["spray", "elites", "limit", "apple", "exuberant"]

const newWords = words2.filter((word2) => 
    word2.length >=6)

console.log(newWords);
