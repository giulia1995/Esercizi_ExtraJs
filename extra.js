/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
for(let i=0; i<pets.length;i++){
    console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/


pets.sort()
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse()
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const primaPosizione= pets.shift()
pets.push(primaPosizione)
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const licensePlate= [`XYZ2320`, `AEI1221`,`KHZ9095`];
for (let i=0; i< cars.length; i++){
    cars[i].licensePlate=licensePlate[i];
}
console.log(cars)
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const newAuto= {
    brand: "Chevrolet",
    model: "Spark",
    color: "Red",
    trims:["U","V","Lounge"],
}
cars.push(newAuto)
console.log(cars)

cars.forEach(car =>{
    if(car.trims.length>0){
        car.trims.pop()
    }
})
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
cars.forEach(car=>{
    if(car.trims.length>0){
        justTrims.push(car.trims[0]);
    }
});
console.log(justTrims)

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for(let i=0;i<cars.length;i++){
    const car = cars[i]
    const primaLettera = car.color.charAt(0).toLowerCase()
    if (primaLettera==="b"){
        console.log("Fizz");
    } else {
        console.log("Buzz");
    }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
  ]

  let i=0;
  while (i<numericArray.length && numericArray[i] !== 32){
    console.log(numericArray[i]);
    i++;
  }
  
  /* ESERCIZIO 10
      Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
      dell'alfabeto italiano.
      es. [f, b, e] --> [6, 2, 5]
  */
  const charactersArray = ['g', 'n', 'u', 'z', 'd']

  const posizioneArray= [];

  for (let i =0; i < charactersArray.length;i++){
    const char = charactersArray[i].toLowerCase()

    switch (char){
        case "g":
            posizioneArray.push(7);
            break;
            case "n":
                posizioneArray.push(12);
                break;
                case "u":
                    posizioneArray.push(19);
                    break;
                    case "z":
                        posizioneArray.push(21);
                        break;
                        case "d":
                            posizioneArray.push(4);
                            break;
                        
    }
  }
  console.log(charactersArray,posizioneArray)