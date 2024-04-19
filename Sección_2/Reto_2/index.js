// Funciones que piden al usuario el ingreso de los datos
const addDailyPresupuest = () => Number(prompt("Ingrese su presupuesto diario"));
const addDailyActivities = () => Number(prompt("Ingrese costos estimados de actividades como comer fuera y comprar libros"));
const addDailySaving = () => Number(prompt("Ingrese el valor de ahorro diario que le gustaría alcanzar"));

// Funcion principal que reune en variables cada dato ingresado por el usuario en las funciones anteriores
function main (){
    let presupuest = addDailyPresupuest();
    let activities = addDailyActivities();
    let saving = addDailySaving();

// Condicionales que comparan el presupuesto del usuario con los costos de las actividades y el ahorro deseado.
    if (presupuest >= (activities + saving)) {
        console.log(`Puedes realizar las actividades: tu presupuesto es (${presupuest}) , tus gastos diarios son (${activities}) por lo tanto, puedes alcanzar tu objetivo de ahorro (${saving}).`);
    } else if (presupuest >= activities) {
        console.log(`Puedes realizar las actividades: tu presupuesto es (${presupuest}), tus gastos diarios son (${activities}), pero no alcanzarás tu objetivo de ahorro (${saving}).`);
    } else if (presupuest >= saving) {
        console.log(`No puedes realizar las actividades pero puedes alcanzar tu objetivo de ahorro (${saving}): tu presupuesto es (${presupuest}) y tus gastos diarios son (${activities}).`);
    } else {
        console.log(`No puedes realizar las actividades ni alcanzar tu objetivo de ahorro: tu presupuesto es (${presupuest}), tus gastos diarios son (${activities}), y tu objetivo de ahorro es (${saving}).`);
    }
}
main()