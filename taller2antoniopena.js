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

  // OUTPUT:

  // console.table(resp);

console.table({
    "Habitación 1": ["", "⬇️Aang", "Aang", "⬆️Aang ⬇️Iroh", "Iroh", "⬆️Iroh"],
    "Habitación 2": ["", "⬇️Toph", "Toph", "Toph", "Toph", "⬆️Toph"],
    "Habitación 3": ["", "", "⬇️Sokka", "Sokka", "⬆️Sokka", ""],
});
