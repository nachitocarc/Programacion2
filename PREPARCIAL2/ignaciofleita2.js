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