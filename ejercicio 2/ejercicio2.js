function obtenerPlan(nombre){
    const nombrePlan = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    const capital = document.getElementById(nombre + '-capital').innerText;
    const plazo = document.getElementById(nombre + '-plazo').innerText.slice(0,-5);
    const tasa = document.getElementById(nombre + '-tasa').innerText.slice(0,-1);

    const plan = {
        nombre: nombrePlan,
        capital,
        plazo,
        tasa
    }
    return plan;
}
function calcularInteres(capital,plazo,tasa){
    return (capital * plazo * (tasa/100)) / 100;
}
function mostrarInteres(){
    const plan001 = obtenerPlan('plan-001');
    const interesPlan001 = calcularInteres(plan001.capital,plan001.plazo,plan001.tasa);
    const plan002 = obtenerPlan('plan-002');
    const interesPlan002 = calcularInteres(plan002.capital,plan002.plazo,plan002.tasa);
    const plan003 = obtenerPlan('plan-003');
    const interesPlan003 = calcularInteres(plan003.capital,plan003.plazo,plan003.tasa);

    const planes = [plan001,plan002,plan003];
    const interesPlanes = [interesPlan001,interesPlan002,interesPlan003];

    let resultado = "";
    for (let index = 0; index < planes.length; index++) {
        const planNombre = planes[index].nombre;
        const interes = interesPlanes[index];
        resultado += `<h3>${planNombre} -> $${interes} de interés </h3> `
    }
    document.getElementById('respuesta').innerHTML = resultado;
}