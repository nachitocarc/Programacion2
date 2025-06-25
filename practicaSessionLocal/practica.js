/*
Primero
*/
function guardarNombre(){
    let nombre_persona = document.getElementById("ingreso_nombre").value
    localStorage.setItem("nombre", nombre_persona)
}

function recuperarNombre(){
    const nombre_recibido = localStorage.getItem("nombre")
    alert(nombre_recibido)
}

/*
Segundo
*/
function visitas(){
    let visitas = localStorage.getItem("visitas");
    if (visitas == null) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }
    localStorage.setItem("visitas", visitas);
    document.getElementById("contador_visitas").innerHTML = 
        "Has visitado esta página " + visitas + " veces.";
}
visitas();

/*
Tercero
*/
const color_nuevo = localStorage.getItem("color_pagina");
document.body.style.backgroundColor = color_nuevo

function cambiarColor() {
    let color_ventana = document.getElementById("color").value;
    localStorage.setItem("color_pagina", color_ventana);
    document.body.style.backgroundColor = color_nuevo;
}

/*
Cuarto
*/
function guardarTarea(){
    let tarea_nueva = document.getElementById("nombre_tarea").value
    localStorage.setItem("tarea", tarea_nueva)

    
    let lista = document.getElementById("lista_tareas")
    var tarea = document.createElement("li")
    var nombre_de_la_tarea = document.createTextNode(tarea_nueva)

    tarea.appendChild(nombre_de_la_tarea)

    lista.appendChild(tarea)
}
