let arreglo1 = ["mi perro", "mi hermano", "mi vecino", "su gato"];
let arreglo2 = ["abrio", "se comio", "escalo", "cocinó"];
let arreglo3 = [
  "un pan",
  "un edificio de 22 pisos",
  "una casa embrujada",
  "un bootcamp",
];

function numeroAleatorio() {
  let num = Math.floor(Math.random() * 4);
  return num;
}

function excusa() {
  let abcd =
    arreglo1[numeroAleatorio()] +
    arreglo2[numeroAleatorio()] +
    arreglo3[numeroAleatorio()];
  return abcd;
}

document.getElementById("excuse").innerHTML = excusa();
