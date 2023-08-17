//EJERCICIO PARTE 1
function obtenerIngresos(){
    let ingresos = [
        document.getElementById('ingreso-enero').value,
        document.getElementById('ingreso-febrero').value,
        document.getElementById('ingreso-marzo').value,
        document.getElementById('ingreso-abril').value,
        document.getElementById('ingreso-mayo').value,
        document.getElementById('ingreso-junio').value,
        document.getElementById('ingreso-julio').value,
        document.getElementById('ingreso-agosto').value,
        document.getElementById('ingreso-septiembre').value,
        document.getElementById('ingreso-octubre').value,
        document.getElementById('ingreso-noviembre').value,
        document.getElementById('ingreso-diciembre').value
    ];
    return ingresos;
}
function obtenerPerdidas(){
    let egresos = [
        document.getElementById('egreso-enero').value,
        document.getElementById('egreso-febrero').value,
        document.getElementById('egreso-marzo').value,
        document.getElementById('egreso-abril').value,
        document.getElementById('egreso-mayo').value,
        document.getElementById('egreso-junio').value,
        document.getElementById('egreso-julio').value,
        document.getElementById('egreso-agosto').value,
        document.getElementById('egreso-septiembre').value,
        document.getElementById('egreso-octubre').value,
        document.getElementById('egreso-noviembre').value,
        document.getElementById('egreso-diciembre').value
    ];
    return egresos;
}
//--Funcion agregada pedida en el ejercicio
function obtenerSituacionFlujoDeCaja(ingresos,egresos){
    const sumaIngresos = ingresos.reduce((prev,curr) => Number(prev) + Number(curr), 0);
    console.log('Suma Ingresos:', sumaIngresos);
    const sumaEgresos = egresos.reduce((prev,curr) => Number(prev) + Number(curr), 0);
    console.log('Suma Egresos:', sumaEgresos);

    if(sumaEgresos > sumaIngresos){
        return -1;
    }else if(sumaIngresos > sumaEgresos){
        return 1;
    }else{
        return 0;
    }
}

function obtenerResultadosDelFlujo(){
    const ingresos = obtenerIngresos();
    const egresos = obtenerPerdidas();

    switch(obtenerSituacionFlujoDeCaja(ingresos,egresos)){
        case -1:
            document.getElementById('respuesta').innerHTML = "(-1) Hay perdidas.";
            break;
        case 1:
            document.getElementById('respuesta').innerHTML = "(1) Hay ganancias.";
            break;
        case 0:
            document.getElementById('respuesta').innerHTML = "(0) Egresos iguales a ganancias.";
            break;
    }
}


// EJERCICIO PARTE 2

//--Funcion modificada pedida en el ejercicio
function cargarPlan(nombre){
    const nombrePlan = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    const capital = document.getElementById(nombre + '-capital').innerText;
    const plazo = document.getElementById(nombre + '-plazo').innerText.slice(0,-5);
    const tasa = document.getElementById(nombre + '-tasa').innerText.slice(0,-1);
    //Al cargar el plan ya calculo el interes
    const interes = calcularInteres(capital,plazo,tasa);

    const plan = {
        nombre: nombrePlan,
        capital,
        plazo,
        tasa,
        interes
    }
    return plan;
}
function calcularInteres(capital,plazo,tasa){
    return (capital * plazo * (tasa/100)) / 100;
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
    
    document.getElementById('respuesta2').innerHTML = resultado;
}