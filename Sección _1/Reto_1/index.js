const destination = "Marruecos";
let travelDays = 8;
let presupuest = 500;
let dailyCost = 200;



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
