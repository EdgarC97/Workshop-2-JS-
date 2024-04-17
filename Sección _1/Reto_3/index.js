// Creacion de variables 
let presupuest; 
let costoViaje;
const gastosImprevistos = 800
const articuloExtra = 200

//Funcion donde se le solicitan al usuario los datos como presupuesto y gastos basicos 
const inicialPresupuest = () => {
    presupuest = parseInt(prompt("Ingrese el presupuesto inicial"));
    costoViaje = parseInt(prompt("Ingrese el costo estimado de gastos basicos"));
}
//Funcion  con condicionales para calcular los gastos de Julian
const calculoGastos = () => {
  let calculoGastos = (presupuest - gastosImprevistos) - costoViaje;
  if (calculoGastos >= 0) {
    console.log(
      `Julian le queda suficiente dinero (${calculoGastos} USD) para poder comprar un articulo extra con valor de (${articuloExtra} USD).`
    );
  } else {
    console.log(
      `Julian debe disminuir gastos para no sobrepasar su presupuesto (${presupuest} USD) y asi poder comprar un articulo extra con valor de (${articuloExtra}USD).`
    );
  }
}
// Funcion principal donde se llaman todas las funciones
function main(){
    inicialPresupuest();
    calculoGastos()
}
main();

// falta que julian pueda introducir múltiples opciones de artículos extras con diferentes costos