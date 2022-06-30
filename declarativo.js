// Como usuario administrador
// Quiero filtar los usuarios que tengan 12 años o menos
// Para poder imprimir los nombres de los niños

// DECLARATIVO: Qué queremos

const people = [
  {
    name: "Aang",
    age: 12,
  },
  {
    name: "Sokka",
    age: 15,
  },
  {
    name: "Toph",
    age: 12,
  },
  {
    name: "Iroh",
    age: 55,
  },
];

const kids = people.filter(({ age }) => age <= 12);

const kid_names = kids.map(({ name }) => name);

console.log(kid_names);
