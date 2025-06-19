var pesos_arg = document.getElementById("pesos")
var moneda_seleccionada = document.getElementById("select")
let monedas = {dolar: 1200, euro: 1500}
let validate = false;
let resultado_pantalla = document.getElementById("resultadito_en_p")

 function validar() {
    
    if(verificarCampos(pesos_arg.value, moneda_seleccionada.value)){
        let cotizacion =Number(monedas[moneda_seleccionada.value]) 
        let valor_pesos =Number(pesos_arg.value)
        let resultado_final = valor_pesos / cotizacion
        
        resultado_pantalla.innerHTML = resultado_final
    }

}
function agregarMoneda(){
    var nombre_moneda = document.getElementById("nombre_moneda_nueva")
    var valor_moneda = document.getElementById("valor_moneda_nueva")
    moneda_seleccionada.add(new Option(nombre_moneda.value, nombre_moneda.value))
    monedas[nombre_moneda.value] = valor_moneda.value   
}
function verificarCampos(vPesos, vMoneda){

    if(vPesos==""){
        alert("Ingrese el valor");
        return false;
    }else{
        if(vMoneda==""){
            alert("Debe seleccionar una moneda");
            return false;
        }else{
            return true;
        }
    }

}