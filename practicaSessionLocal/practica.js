/*
Primero
*/

function guardarNombre(){
    localStorage.nombre = document.getElementById("ingreso_nombre").value;
}

function recuperarNombre(){
    if (localStorage.nombre != undefined)
        {
alert(localStorage.nombre)}
else {
alert("No has introducido tu nombre");
}
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
                "Has visitado esta página " + localStorage.visitas + " veces.";
        }

        visitas();

/*
Tercero
*/

function cambiarColor(){
    localStorage.color = document.getElementById("color").value;
    if (localStorage.color != undefined)
    {document.body.style.backgroundColor = localStorage.color}
}

