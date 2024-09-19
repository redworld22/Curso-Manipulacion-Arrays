const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ];

const rta = users.map(item => item.attributes)
console.log(rta);

const rta2 = rta.flat()
console.log(rta2);

const rta3 = users.flatMap(item => item.attributes)
console.log(rta3);


// Another Example

const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
    {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
    },
  ],
};

const rta4 = Object.values(calendars)
console.log(rta4);

const rta5 = rta4.flatMap(item => {
    console.log(item);
    return item.map(date => date.startDate)
})

console.log(rta5);




