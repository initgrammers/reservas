// Como: usuario administrador
// Quiero: poder visualizar las reservas
//      agrupadas por habitación marcadas la entrada y salida
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

// OUTPUT:
let habitacion1 = bookings.filter(item => item.room === "Habitación 1");
let habitacion2 = bookings.filter(item => item.room === "Habitación 2");
let habitacion3 = bookings.filter(item => item.room === "Habitación 3");

let maxDays = bookings.map(item => item.to);
maxDays = Math.max(...maxDays);

let arrDays = [];
for(let i = 0; i <= maxDays; i++){
    arrDays[i] = "";
}

let huespedesxHabitacion = (habitacion, arrDays) => {
    let huespedes = habitacion.reduce((arr,item) => {
        for (let i = 0; i <= item.to; i++) {
            i >= item.from && i <= item.to ?
            i === item.from ? arr[i] = arr[i] + ' '+ '⬇️' +item.owner :
            i === item.to ? arr[i] = arr[i] + ' '+ '⬆️' +item.owner :
            arr[i] = arr[i] + ' ' +item.owner : arr[i] = arr[i];
        }
        return arr;
    },[...arrDays]);
    huespedes = huespedes.map(element => element.trim());
    return huespedes;
}

let huespedesHabitacion1 = huespedesxHabitacion(habitacion1, arrDays);
let huespedesHabitacion2 = huespedesxHabitacion(habitacion2, arrDays);
let huespedesHabitacion3 = huespedesxHabitacion(habitacion3, arrDays);

let resp = {
    'Habitacion 1': huespedesHabitacion1,
    'Habitacion 2': huespedesHabitacion2,
    'Habitacion 3': huespedesHabitacion3,
}

console.table(resp);

// console.table({
//     "Habitación 1": ["", "⬇️Aang", "Aang", "⬆️Aang ⬇️Iroh", "Iroh", "⬆️Iroh"],
//     "Habitación 2": ["", "⬇️Toph", "Toph", "Toph", "Toph", "⬆️Toph"],
//     "Habitación 3": ["", "", "⬇️Sokka", "Sokka", "⬆️Sokka", ""],
// });
