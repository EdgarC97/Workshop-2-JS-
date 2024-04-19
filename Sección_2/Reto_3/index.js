// Lista de suitcase vacia
const suitcase = [];

const solList = [
  {
    name: "gafas",
    peso: 2,
    espacio: 2,
  },
  {
    name: "bloqueador",
    peso: 1,
    espacio: 1,
  },
];

const lluviaList = [
  {
    name: "sombrilla",
    peso: 2,
    espacio: 1,
  },
  {
    name: "botas",
    peso: 3,
    espacio: 2,
  },
];

// Funciones que piden al usuario el ingreso de los datos
alert("Bienvenido a la maleta de Julian");
const addClima = () => prompt("Ingrese el clima esperado (sol-lluvia)");
const addSuitcaseSpace = () =>
  parseInt(prompt("Ingrese espacio disponible en la maleta"));
const addSuitcaseWeight = () =>
  parseInt(prompt("Ingrese el peso permitido de la maleta"));

// Funcion principal
function main() {
  let clima = addClima();
  let space = addSuitcaseSpace();
  let weight = addSuitcaseWeight();

// Condicionales con el clima
  if (clima.toLowerCase() === "sol") {
    let climaOption = prompt(
      "Elige entre  lo siguiente: 1.Gafas - 2.Bloqueador"
    );
    if (climaOption === "1") {
      suitcase.push(solList[0]);
      console.log(`Has agregado ${solList[0].name} a tu maleta.`);
    } else if (climaOption === "2") {
      suitcase.push(solList[1]);
      console.log(`Has agregado ${solList[1].name} a tu maleta.`);
    }
    console.log("Los items en tu maleta son:");
    for (let item of suitcase) {
      console.log(item);
    }
  }
// Condicionales con el espacio
  if (space > 1) {
     
   }

// Condicionales con el peso
}
main();
