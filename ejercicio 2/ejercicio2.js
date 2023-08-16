function calcularInteres(capital,plazo,tasa){
    return (capital * plazo * (tasa/100)) / 100;
}
function cargarPlan(nombre){
    const nombrePlan = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    const capital = document.getElementById(nombre + '-capital').innerText;
    const plazo = document.getElementById(nombre + '-plazo').innerText.slice(0,-5);
    const tasa = document.getElementById(nombre + '-tasa').innerText.slice(0,-1);
    const interes = calcularInteres(capital,plazo,tasa);

    const plan = {
        nombre: nombrePlan,
        capital,
        tasa,
        interes
    }
    return plan;
}
function mostrarInteres(){
    const plan001 = cargarPlan('plan-001');
    const plan002 = cargarPlan('plan-002');
    const plan003 = cargarPlan('plan-003');
    const planes = [plan001,plan002,plan003];

    let resultado = "";
    planes.forEach(plan => {
        resultado += `<h3>${plan.nombre} -> $${plan.interes} de interés </h3> `
    });
    
    document.getElementById('respuesta').innerHTML = resultado;
}