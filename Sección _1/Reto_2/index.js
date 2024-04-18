// Lista de souvenirs potenciales vacia
const souvenirsList = [];

// Funciones para solicitar al usuario datos de entrada
const addSouvenirName = () => prompt("Ingrese el souvenir");
const addSouvenirCost = () => Number(prompt("Ingrese el valor del souvenir"));
const addSouvenirDisponibility = () =>confirm("Ingrese disponibilidad del souvenir (aceptar/cancelar)");

// Verificacion de tipo de datos ingresados
const verifySouvenirName = (name) => {console.log(typeof name);};
const verifySouvenirCost = (cost) => {console.log(typeof cost);
  if (isNaN(cost)) {
    console.error("Error: El costo del souvenir debe ser un número.");}};
const verifySouvenirDisponibility = (disponibility) => {console.log(typeof disponibility);};

// Funcion principal para llamar a las funciones anteriores 
function main() {
  let name = addSouvenirName();
  let cost = addSouvenirCost();
  let disponibility = addSouvenirDisponibility();
  verifySouvenirName(name);
  verifySouvenirCost(cost);
  verifySouvenirDisponibility(disponibility);

  souvenir = {
    'name': name,
    'cost': cost,
    'disponibility':disponibility
  }
  souvenirsList.push(souvenir);
  console.log(souvenirsList)
}
// Falta agregar funcion para preguntarle al usuario si quiere agregar nuevos elementos
main();
