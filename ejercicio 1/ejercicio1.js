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
function generaPerdidas(){
    const ingresos = obtenerIngresos();
    const sumaIngresos = ingresos.reduce((prev,curr) => Number(prev) + Number(curr), 0);
    console.log(sumaIngresos);

    const egresos = obtenerPerdidas();
    const sumaEgresos = egresos.reduce((prev,curr) => Number(prev) + Number(curr), 0);
    console.log(sumaEgresos);
    
    if(sumaIngresos > sumaEgresos){
        document.getElementById('respuesta').innerHTML = "Se gana dinero.";
    }else{
        document.getElementById('respuesta').innerHTML = "Genera perdidas.";
    }

}