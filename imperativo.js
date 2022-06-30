// Como usuario administrador
// Quiero filtar los usuarios que tengan 12 años o menos
// Para poder imprimir los nombres de los niños

// IMPERATIVO: Cómo resolver el problema

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

const kid_names = [];

for (let person of people) {
  if (person.age <= 12) {
    kid_names.push(person.name);
  }
}

console.log(kid_names);
