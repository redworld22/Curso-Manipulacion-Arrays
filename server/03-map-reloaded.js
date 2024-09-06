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
];

console.log("original", orders);
  
const rta = orders.map(element => element.total)
console.log("respuesta", rta);

// De esta manera, se modifica el array original
// const rta2 = orders.map(item =>{
//     item.tax = 0.19;
//     return item
// })

// console.log(rta2);


// De esta forma puedo agregar una nueva propiedad a un objeto sin afectar el array original
  const rta3 = orders.map(item => {
    return {
        ...item, 
        tax: 0.19
    }
  })

  console.log(orders);
  console.log(rta3);
  

  