/*
Primero
*/
function guardarNombre(){
    let nombre_persona = document.getElementById("ingreso_nombre").value
    localStorage.setItem("nombre", nombre_persona)
}

function recuperarNombre(){
    const nombre_recibido = localStorage.getItem("nombre")
    alert("nombre: " + nombre_recibido)
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

/*
quinto
*/

function contadorSegundos(){
    let contador_de_segundos = document.getElementById("p_segundos")
    sessionStorage.setItem("segundos_pasados", contador_de_segundos)
}

/*
sexto
*/

function agregarNota(){
    let nota_nueva = document.getElementById("agregar_nota").value
    localStorage.setItem("nota", nota_nueva)
    mostrarNota()
}

function mostrarNota(){
    let subir_nota = document.getElementById("p_notas")
    let nota_recibida = localStorage.getItem("nota")
    subir_nota.innerHTML = nota_recibida
}

/*
septimo
*/
function definirEstado(){
    const estado_checkbox = document.getElementById("checkbox").checked
    localStorage.setItem("estado", estado_checkbox)
}

const checkbox = document.getElementById("checkbox");
checkbox.checked = localStorage.getItem("estado") === "true";
checkbox.addEventListener("change", definirEstado);

/*
octavo
*/
const mensaje_bienvenida_wacho = localStorage.getItem("mensajeBienvenida")
    alert(mensaje_bienvenida_wacho)
function guardarMensaje(){
    let mensaje_bienvenida = document.getElementById("mensaje_bienvenida").value
    localStorage.setItem("mensajeBienvenida", mensaje_bienvenida)
}

/*
noveno
*/
var items = []

function guardarItem(){
    let item_nuevo = document.getElementById("nombre_item").value

    if (item_nuevo.length > 0 && item_nuevo !== "null"){
        items.push(item_nuevo)
        localStorage.setItem("items_compra", JSON.stringify(items))}
    
    let lista_compras = document.getElementById("lista_compras")
    var item = document.createElement("li")
    var nombre_del_item = document.createTextNode(item_nuevo)

    item.appendChild(nombre_del_item)
    lista_compras.appendChild(item)
}

