/**
truthy = [true, 1, -1, 1n, "Hello", [], {}, Symbol(), function() {}, new Date()]
a truthy value is a value that is considered true when encountered in a Boolean context

falsey = [false, 0, -0, 0n, "", null, undefined, NaN]
Falsy values are values that are considered false when encountered in a Boolean context.
*/

// Se definen variable Truthy o Falsey
alert("Bienvenido a la evaluacion de Julian")
alert("Para las siguientes preguntas considera 1: Si y 0: No")

let nivelEnergia = Number(prompt("¿Tienes suficiente energia hoy? (1 o 0)")); 
let clima = prompt("Ingrese el estado del clima (deja en blanco para mal clima) "); 
let cargaTrabajo = Number(prompt("¿Tienes carga laboral hoy? (1 o 0)")); 

// Se define la logica a implementar con estas variables

if (nivelEnergia && clima && cargaTrabajo) {
    console.log("Julian decide salir a correr y luego trabajar en casa.");
} else if (nivelEnergia && clima) {
    console.log("Julian decide salir a correr.");
} else if (nivelEnergia && cargaTrabajo) {
    console.log("Julian decide quedarse en casa trabajando en proyectos personales.");
} else if (!nivelEnergia && cargaTrabajo) {
    console.log("Julian decide quedarse en casa trabajando en proyectos con flojera.");
} else if (nivelEnergia) {
    console.log("Julian decide hacer tareas menores en casa.");
} else {
    console.log("Julian decide tomar un día libre.");
}