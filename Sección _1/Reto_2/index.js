let souvenirsList = [];

const addSouvenirName = () => prompt("Ingrese el souvenir");
const addSouvenirCost = () => Number(prompt("Ingrese el valor del souvenir"));
const addSouvenirDisponibility = () => confirm("Ingrese disponibilidad del souvenir (true/false)");

// verificacion de tipo de datos ingresados
const verifySouvenirName = (name) => {
  console.log(typeof name);
};
const verifySouvenirCost = (cost) => {
  console.log(typeof cost);
  if (isNaN(cost)) {
    console.error("Error: El costo del souvenir debe ser un número.");
  }
};
const verifySouvenirDisponibility = (disponibility) => {
  console.log(typeof disponibility);
};

// agregar datos a la lista de souvenirs
const souvenirsList.push = (name,cost,disponibility) 

function main() {
  let name = addSouvenirName();
  let cost = addSouvenirCost();
  let disponibility = addSouvenirDisponibility();
  verifySouvenirName(name);
  verifySouvenirCost(cost);
  verifySouvenirDisponibility(disponibility);
}

main();
