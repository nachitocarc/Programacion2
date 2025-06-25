function mostrarInformacion() {
    let nombre_obtenido = document.getElementById("nombre")
    let edad_obtenida = document.getElementById("edad")
    let mail_obtenido = document.getElementById("mail")

    let contenedor_nuevo = document.getElementById("contenedor_nuevo");

    var muestra_nombre = document.createElement("p")
    var muestra_edad = document.createElement("p")
    var muestra_mail = document.createElement("p")
    var nuevo_boton = document.createElement("input")


    nuevo_boton.setAttribute("type", "button")
    nuevo_boton.setAttribute("onclick", "volver()")
    nuevo_boton.setAttribute("value", "apreta")


    var nombre_final = document.createTextNode(nombre_obtenido.value)
    var edad_final = document.createTextNode(edad_obtenida.value)
    var mail_final = document.createTextNode(mail_obtenido.value)


    muestra_nombre.appendChild(nombre_final)
    muestra_edad.appendChild(edad_final)
    muestra_mail.appendChild(mail_final)

    contenedor_nuevo.appendChild(muestra_nombre)
    contenedor_nuevo.appendChild(muestra_edad)
    contenedor_nuevo.appendChild(muestra_mail)
    contenedor_nuevo.appendChild(nuevo_boton)


    document.getElementById("contenedor_form").style.display = "none";
}

function volver(){
    document.getElementById("contenedor_form").style.display = "block";
    document.getElementById("contenedor_nuevo").style.display = "none";
}