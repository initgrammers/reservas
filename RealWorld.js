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

const groupBookingByRoom = (bookings) => {
  return bookings.reduce((acc, booking) => {
    if (acc[booking.room]) {
      return { ...acc, [booking.room]: [...acc[booking.room], booking] };
    }
    return { ...acc, [booking.room]: [booking] };
  }, {});
};

// console.log(groupBookingByRoom(bookings));

// [undefined, {},{}, {}, {}, undefined]
const buildRowBooking = (numDays, booking) => {
  return [...new Array(numDays).keys()].map((day) => {
    if (booking.to < day) {
      return undefined;
    }

    if (day < booking.from) {
      return undefined;
    }

    if (booking.from === day) {
      return "⬇ " + booking.owner;
    }

    if (booking.to == day) {
      return "⬆ " + booking.owner;
    }

    return booking.owner;
  });
};

// console.log(buildRowBooking(6, bookings[0]));

const joinBookingrows = (numDays, bookingRows) => {
  // ["", "", "", ""]
  const joinRow = new Array(numDays).fill("");
  bookingRows.forEach((bookingRow) => {
    bookingRow.forEach((cell, index) => {
      if (cell) {
        joinRow[index] += cell;
      }
    });
  });
  return joinRow;
};

// console.log(
//   joinBookingrows(4, [
//     ["", "uno", "", ""],
//     ["", "dos", "dos", "dos"],
//   ])
// );

const formatTable = (numDays, bookings) => {
  const rooms = groupBookingByRoom(bookings);
  console.log(rooms);

  const roomNames = Object.keys(rooms);
  console.log(roomNames);

  return roomNames.reduce((acc, roomName) => {
    console.log("----> ", roomName, "<----");

    const bookingsRows = rooms[roomName].map((booking) =>
      buildRowBooking(numDays, booking)
    );
    console.table(bookingsRows);


    const row = joinBookingrows(numDays, bookingsRows);
    console.log(row);

    return {
      ...acc,
      [roomName]: row,
    };
  }, {});
};

console.table(formatTable(6, bookings));
// console.table({
//   "Habitación 1": ["", "⬇️Aang", "Aang", "⬆️Aang ⬇️Iroh", "Iroh", "⬆️Iroh"],
//   "Habitación 2": ["", "⬇️Toph", "Toph", "Toph", "Toph", "⬆️Toph"],
//   "Habitación 3": ["", "", "⬇️Sokka", "Sokka", "⬆️Sokka", ""],
// });


const bookings2 = [
  {
    room: "Habitación 1",
    owner: "Aang",
    from: 1,
    to: 3,
  },
  {
    room: "Habitación 4",
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
    to: 10,
  },
];

console.table(formatTable(11, bookings2));
