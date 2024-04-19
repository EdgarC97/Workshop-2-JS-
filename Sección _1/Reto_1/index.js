// Mensaje de bienvenida inicial
alert("Bienvenido a El Viaje de Julian");

// Funciones para solicitar al usuario datos de entrada
const addDestination = () => prompt("Ingrese su destino");
const addTravelDays = () => prompt("Ingrese la duracion del viaje en dias");
const addDailyCost = () => prompt("Ingrese el presupuesto estimado para el viaje");

function main() {
  // Solicitamos los datos al usuario y los almacenamos en variables
  const destination =addDestination()
  let travelDays = addTravelDays();
  let dailyCost = addDailyCost();
  let presupuest = travelDays * dailyCost;

  // Condicionales para verificar si a Julian le alcanza el presupuesto
  let totalCost = travelDays * dailyCost;
  if (presupuest >= totalCost) {
    console.log(
      `Julian tiene suficiente dinero (${presupuest} USD) para su viaje a ${destination} de ${travelDays} dias.`
    );
  } else {
    console.log(
      `Julian debe ajustar su presupuesto (${presupuest} USD) para su viaje a ${destination} de ${travelDays} dias.`
    );
  }
}

main();