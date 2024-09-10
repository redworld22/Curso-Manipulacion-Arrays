const numbers = [1,7,3,8];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if(element % 2 === 0){
        rta = true;
        break;
    }    
}

console.log("Respuesta:", rta);


const rta2 = numbers.some(item => item % 2 === 0)
console.log("Respuesta2:", rta2);


// Another example

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

const rta3 = orders.some(item => item.delivered)
console.log("Respuesta3:", rta3);


// Another example

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 10, 30),
  };

const { areIntervalsOverlapping } = require("date-fns");

const isOverLap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate}
        )
    })
}

console.log(isOverLap(newAppointment));
