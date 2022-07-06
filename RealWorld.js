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
let objt={}
const hab= bookings.map(elem=>elem["room"]).sort().filter(elm=> 
  objt.hasOwnProperty(elm)?false:objt[elm]=[""])

console.log(objt)
for(hb in objt){
  let reg=bookings.filter(elm=>elm["room"]===hb).reduce(
    (a, b, index)=>{
      let ini=0
      
      a.length===b["from"]+1?(a[a.length-1]+=" ⬇️"+b["owner"], ini=b["from"]+1 ):ini=0
      
      let arr=[]
      
      for(let i=ini;i<=b["to"];i++){
        
        i===b["from"]?arr.push("⬇️"+b["owner"]):i>b["from"]&&i<b["to"]?arr.push(b["owner"]):i===b["to"]?arr.push("⬆️"+b["owner"]):arr.push("")
        
      }
      return a.concat(arr)
    },[]
  )
  objt[hb]=[...reg]
}


console.log(objt)
// console.table(resp);
console.table(objt)
console.table({
  "Habitación 1": ["", "⬇️Aang", "Aang", "⬆️Aang ⬇️Iroh", "Iroh", "⬆️Iroh"],
  "Habitación 2": ["", "⬇️Toph", "Toph", "Toph", "Toph", "⬆️Toph"],
  "Habitación 3": ["", "", "⬇️Sokka", "Sokka", "⬆️Sokka", ""],
});
