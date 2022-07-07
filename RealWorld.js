// Como: usuario administrador
// Quiero: poder visualizar las reservas
//      agrupdas por habitación marcadas la entrada y salida
//      en un calendario
// Para: poder visualizar la ocupación del edificio de 
// manera más amigable


// https://developer.mozilla.org/es/docs/Web/API/Console/table
// console.table

// INPUT:
const bookings = [
  {
    room: "Habitación 1",
    owner: "Aang",
    from: 1,
    to: 3,
  },
  {
    room: "Habitación 3",
    owner: "Sokka",
    from: 2,
    to: 4,
  },
  {
    room: "Habitación 2",
    owner: "Toph",
    from: 1,
    to: 5,
  },
  {
    room: "Habitación 1",
    owner: "Iroh",
    from: 3,
    to: 5,
  },
];


//Creamos un objeto con todas las habitaciones que existan (se pueden aumentar mas)
const newObject = bookings.reduce(
  (acc, booking) => ({
    ...acc,
    [booking.room]: [],
  }),
  {}
);


//Cuando existan dos personas en el mismo día es posible acomodarlas como tal
for (var i = 0; i < bookings.length; i++) {
  let inicio=0
  if(newObject[bookings[i].room].length===bookings[i].from+1){
    newObject[bookings[i].room][newObject[bookings[i].room].length-1]+=" ⬇ "+bookings[i].owner
    inicio=bookings[i].from+1
  }

//Ingresan las personas y se colocan flechas en su día de ingreso y salida, 
//en caso de que el contador no coincida con su día de llegada se deja vacío  
  for (var j = inicio; j <= bookings[i].to; j++) {    
    if (j >= bookings[i].from) {
      if(j==bookings[i].from){
        newObject[bookings[i].room].push("⬇ "+bookings[i].owner);
      }else if(j==bookings[i].to){
        newObject[bookings[i].room].push("⬆ "+bookings[i].owner);
      }else{
        newObject[bookings[i].room].push(bookings[i].owner);
      }
    }
    else {
      newObject[bookings[i].room].push("");
    }
  }
}
console.table(newObject);

// OUTPUT:

// console.table(resp);

console.table({
  "Habitación 1": ["", "⬇ Aang", "Aang", "⬆ Aang ⬇ Iroh", "Iroh", "⬆ Iroh"],
  "Habitación 2": ["", "⬇ Toph", "Toph", "Toph", "Toph", "⬆ Toph"],
  "Habitación 3": ["", "", "⬇ Sokka", "Sokka", "⬆ Sokka", ""],
});
