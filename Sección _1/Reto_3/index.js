alert("Bienvenido a la planificacion de itinerario de julian")

let flag = true
// Creacion de variables 
let presupuest; 
let costoViaje;
let gastosImprevistos;
let articuloExtra ;

//Funcion donde se le solicitan al usuario los datos como presupuesto y gastos basicos 
const inicialPresupuest = () => {
    presupuest = Number(prompt("Ingrese el presupuesto inicial"));
    costoViaje = Number(prompt("Ingrese el costo estimado de gastos basicos"));
    gastosImprevistos = prompt("Ingrese el costo estimado de gastos imprevistos");
    articuloExtra = prompt("Ingrese el costo del articulo extra");
}
//Funcion  con condicionales para calcular los gastos de Julian
const calculoGastos = () => {
  let calculoGastos = (presupuest - gastosImprevistos - articuloExtra) - costoViaje;
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


let flag = true;
// Creacion de variables 
let presupuest; 
let costoViaje;
let gastosImprevistos;
let articuloExtra;
let articulosExtras = [];

//Funcion donde se le solicitan al usuario los datos como presupuesto y gastos basicos 
const inicialPresupuest = () => {
    presupuest = Number(prompt("Ingrese el presupuesto inicial"));
    costoViaje = Number(prompt("Ingrese el costo estimado de gastos basicos"));
    gastosImprevistos = Number(prompt("Ingrese el costo estimado de gastos imprevistos"));
    while(flag){
        let nombreArticulo = prompt("Ingrese el nombre del articulo extra");
        let costoArticulo = Number(prompt("Ingrese el costo del articulo extra"));
        articulosExtras.push({nombre: nombreArticulo, costo: costoArticulo});
        flag = confirm("¿Desea agregar otro articulo?");
    }
}

//Funcion  con condicionales para calcular los gastos de Julian
const calculoGastos = () => {
  let calculoGastos = (presupuest - gastosImprevistos - costoViaje);
  let articuloEconomico = {nombre: "", costo: presupuest};
  for(let articulo of articulosExtras){
      if(articulo.costo < articuloEconomico.costo && articulo.costo <= calculoGastos){
          articuloEconomico = articulo;
      }
  }
  if (articuloEconomico.costo !== presupuest) {
    console.log(
      `Julian le queda suficiente dinero (${calculoGastos} USD) para poder comprar el articulo extra ${articuloEconomico.nombre} con valor de (${articuloEconomico.costo} USD).`
    );
  } else {
    console.log(
      `Julian debe disminuir gastos para no sobrepasar su presupuesto (${presupuest} USD) y asi poder comprar un articulo extra.`
    );
  }
}

// Funcion principal donde se llaman todas las funciones
function main(){
    inicialPresupuest();
    calculoGastos()
}
main();
