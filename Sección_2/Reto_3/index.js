function decisionesUltimaHora(clima, espacio, peso) {
  let articulos = [];
  // flag = true;
  // let articulosAdicionales = {
  //   libro: { espacio: 2, peso: 1 },
  //   'botella de agua': { espacio: 1, peso: 1 },
  //   snacks: { espacio: 1, peso: 0.5 },
  //   manta: { espacio: 3, peso: 1.5 },
  //   almohada: { espacio: 2, peso: 1 },
  // };

  // Si el pronóstico indica lluvia, Julian considerará llevar un paraguas.
  if (clima === 'lluvia') {
    if (espacio > 0 && peso >= 0.5) {
      articulos.push('paraguas');
      espacio -= 1;
      peso -= 0.5;
    }
  }

  // Si Julian tiene espacio adicional y el peso de su equipaje lo permite, podría decidir llevar una cámara.
  if (espacio > 0 && peso >= 1) {
    articulos.push('cámara');
    espacio -= 1;
    peso -= 1;
  }

  // Priorización de Artículos
  if (espacio > 0 && peso >= 1) {
    if (clima === 'soleado') {
      articulos.push('sombrero');
    } else if (clima === 'frío') {
      articulos.push('bufanda');
    }
  }
  // Bucle para agregar más artículos
  // while (flag) {
  //   console.log('Artículos adicionales disponibles:');
  //   for (let articulo in articulosAdicionales) {
  //     console.log(
  //       `${articulo}: Espacio - ${articulosAdicionales[articulo].espacio}, Peso - ${articulosAdicionales[articulo].peso}`
  //     );
  //   }
  //   let nuevoArticulo = prompt(
  //     'Ingrese el nombre del artículo que desea agregar:'
  //   );
  //   let espacioArticulo = articulosAdicionales[nuevoArticulo].espacio;
  //   let pesoArticulo = articulosAdicionales[nuevoArticulo].peso;
  //   console.log(articulos);

  //   if (espacio >= espacioArticulo && peso >= pesoArticulo) {
  //     articulos.push(nuevoArticulo);
  //     espacio -= espacioArticulo;
  //     peso -= pesoArticulo;
  //   } else if (espacio < espacioArticulo) {
  //     alert(
  //       'Considera otro artículo, este no puede ser adquirido porque no tienes espacio suficiente.'
  //     );
  //   } else if (peso < pesoArticulo) {
  //     alert('La maleta está muy cargada.');
  //   }

  //   flag = confirm('¿Deseas agregar otro artículo?');
  // }

  return articulos;
}

// Pedida de datos al usuario y verificacion
let clima = prompt('Ingrese el clima esperado (lluvia, soleado, frío):');
while (!['lluvia', 'soleado', 'frío'].includes(clima)) {
  clima = prompt(
    "Entrada inválida. Por favor, ingrese 'lluvia', 'soleado' o 'frío':"
  );
}

let espacio = prompt('Ingrese el espacio disponible en la maleta (0-100):');
while (isNaN(espacio) || espacio < 0 || espacio > 10) {
  espacio = prompt(
    'Entrada inválida. Por favor, ingrese un número válido para el espacio (0-100):'
  );
}

let peso = prompt('Ingrese el peso total permitido (0-50 kg):');
while (isNaN(peso) || peso < 0 || peso > 20) {
  peso = prompt(
    'Entrada inválida. Por favor, ingrese un número válido para el peso (0-50 kg):'
  );
}

let articulos = decisionesUltimaHora(clima, espacio, peso);
alert(`Artículos empacados: ${articulos}`);
