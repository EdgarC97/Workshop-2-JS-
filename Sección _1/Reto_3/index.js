let presupuest; 
let costoViaje;
const gastosImprevistos = 800
const articuloExtra = 200

const inicialPresupuest = () => {
    presupuest = parseInt(prompt("Ingrese el presupuesto inicial"));
    costoViaje = parseInt(prompt("Ingrese el costo estimado de gastos basicos"));
}

function calcularGastos() {
    let calculoGastos = (presupuest + gastosImprevistos) - costoViaje;
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

function main(){
    inicialPresupuest();
    calcularGastos()
}

main();