alert("Bienvenido a la planificacion de itinerario de julian")

let flag = true
// Creacion de variables 
let presupuest; 
let costoViaje;
let gastosImprevistos;
let articulosExtra = {}; ;

//Funcion donde se le solicitan al usuario los datos como presupuesto y gastos basicos 
const inicialPresupuest = () => {
  presupuest = Number(prompt("Ingrese el presupuesto inicial"));
  costoViaje = Number(prompt("Ingrese el costo estimado de gastos basicos"));
  gastosImprevistos = Number(prompt("Ingrese el costo estimado de gastos imprevistos"));
  
  while(flag) {
      let nombreArticuloExtra = prompt("Ingrese el nombre del articulo extra");
      let costoArticuloExtra = Number(prompt("Ingrese el costo del articulo extra"));
      articulosExtra[nombreArticuloExtra] = costoArticuloExtra;
      console.log(articulosExtra);
      flag = confirm("¿Desea agregar otro artículo extra?");
  }
}
//Funcion  con condicionales para calcular los gastos de Julian
const calculoGastos = () => {
  let calculoGastos = (presupuest - gastosImprevistos - (Object.values(articulosExtra))) - costoViaje;
  if (calculoGastos >= 0) {
    console.log(
      `Julian le queda suficiente dinero (${calculoGastos} USD) para poder comprar articulos extra. `
    );
  } else {
    console.log(
      `Julian debe disminuir gastos para no sobrepasar su presupuesto (${presupuest} USD) y asi poder comprar articulos extra.`
    );
  }
}
// Funcion principal donde se llaman todas las funciones  
function main(){
    inicialPresupuest();
    calculoGastos()
}
main();


