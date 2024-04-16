let souvenirs = [];

function addSouvenir() {
  const souvenirName = prompt("Ingrese el souvenir");
  const souvenirCost = Number(prompt("Ingrese el valor del souvenir"));
  if (isNaN(souvenirCost)) {
    console.error("Error: El costo del souvenir debe ser un número.");
    return;
  }
  let souvenirDisponibility = prompt(
    "Ingrese disponibilidad del souvenir (true/false)");

  // verificacion de tipo de datos ingresados
  console.log(typeof souvenirName);
  console.log(typeof souvenirCost);
  console.log(typeof souvenirDisponibility);

  // guardar datos ingresados por usuario como un objeto
  let souvenir = {
    name: souvenirName,
    cost: souvenirCost,
    disponibility: souvenirDisponibility,
  };
}
addSouvenir();
