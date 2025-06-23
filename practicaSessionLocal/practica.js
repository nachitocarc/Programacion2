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