  // Mensaje de bienvenida inicial
  alert("Bienvenido a los souvenirs de Julian");
  let flag = true

  // Lista de souvenirs potenciales vacia
  const souvenirsList = [];

  // Funciones para solicitar al usuario datos de entrada
  const addSouvenirName = () => prompt("Ingrese el souvenir");
  const addSouvenirCost = () => Number(prompt("Ingrese el valor del souvenir"));
  const addSouvenirDisponibility = () =>confirm("Ingrese disponibilidad del souvenir (aceptar/cancelar)");

  // Verificacion de tipo de datos ingresados
  const verifySouvenirName = (name) => {console.log(typeof name);};
  const verifySouvenirCost = (cost) => {console.log(typeof cost);
    if (!isNaN(cost)) {
      console.error("Error: El costo del souvenir debe ser un número.");}};
  const verifySouvenirDisponibility = (disponibility) => {console.log(typeof disponibility);};

  // Funcion principal para llamar a las funciones anteriores 
  function main() {
    while (flag) {
      let name = addSouvenirName();
      let cost = addSouvenirCost();
      let disponibility = addSouvenirDisponibility();
      verifySouvenirName(name);
      verifySouvenirCost(cost);
      verifySouvenirDisponibility(disponibility);

      souvenir = {
        'name': name,
        'cost': cost,
        'disponibility': disponibility
      }
      souvenirsList.push(souvenir);
      console.log(souvenirsList);

      // Pregunta al usuario si quiere agregar más souvenirs
      flag = confirm("¿Deseas agregar otro souvenir?");
  }
  }
  main();
