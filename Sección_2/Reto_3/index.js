// Lista de suitcase vacia
let suitcase = [];

// Funciones que piden al usuario el ingreso de los datos
const addClima = () => prompt("Ingrese el clima esperado");
const addSuitcaseSpace = () =>
  parseInt(prompt("Ingrese espacio disponible en la maleta"));
const addSuitcaseWeight = () =>
  parseInt(prompt("Ingrese el peso permitido de la maleta"));

// Funcion principal
function main() {
  let clima = addClima();
  let space = addSuitcaseSpace();
  let weight = addSuitcaseWeight();

  // Condicionales
  if (clima.toLowerCase() === "lluvioso") {
    console.log("Se recomienda llevar paraguas");
  } else if (space >= 1) {
    console.log("Pu");
  }
}
main();
