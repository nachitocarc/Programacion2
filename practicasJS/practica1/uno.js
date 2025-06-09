var x = 0;


//// punto 1
function validar() {
    var campo = document.getElementById("nombre")
    if (campo.value == "") { 
        alert("esta vacio"); }
    else { 
        alert("tiene letras"); }

}

/// punto 2

function mostrarOcultar(){
    var lorem = document.getElementById("contenedor");
    var boton = document.getElementById("boton")
    if (lorem.style.display == "none"){
        lorem.style.display = "block"; boton.innerHTML= "ocultar";
    }    
    else {lorem.style.display = "none"; boton.innerHTML = "mostrar";
    };
}

/// punto 3 

function cambiarColor(){
    var color = document.getElementById("color");
    document.body.style.backgroundColor = color.value
}

/// punto 4

function clickeo(){
    var contador = document.getElementById("contador")
    x += 1;
    contador.innerText = x
}

/// punto 5 

function hora(){
    var p_hora = document.getElementById("hora")
    var fecha = Date();
    p_hora.innerHTML = fecha;
}

/// punto 6

function cambiarTexto(){
    var texto_nuevo =document.getElementById("texto_nuevo");
    var texto_inicial = document.getElementById("texto_inicial");
    texto_inicial.innerText = texto_nuevo.value;
}

/// punto 7

function mostrarNombre(){
    const nombre =document.getElementById("mensaje_nombre").value;
    alert("bienvenido"+ " " + nombre);
}

/// punto 9
function cambiarTamaño(){
    var texto_nuevo =document.getElementById("tamaño_fuente");
}


