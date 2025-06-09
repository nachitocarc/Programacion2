/// primero
var nombres = [];


function guardarDatos() {
    var nombrecito = prompt("¿Como te llamas?");
    if (nombrecito.length > 0 || nombrecito != "null") {
        nombres.push(nombrecito)
        localStorage.setItem("nombre", nombres)
    }

}

function recuperarDatos() {
    if (localStorage.getItem("nombre") != undefined || localStorage.getItem("nombre") != "") {
        var boludez = document.getElementById("parrafo_nombres");
        let valStorage = localStorage.getItem("nombre");
        let arrNombres = valStorage.split(',')

        boludez.innerHTML = '';
        for (let i = 0; i < arrNombres.length; i++) {
            boludez.innerHTML += arrNombres[i] + "<br>"
        }
    }
    else {
        alert("esta vacio")
    }
}



