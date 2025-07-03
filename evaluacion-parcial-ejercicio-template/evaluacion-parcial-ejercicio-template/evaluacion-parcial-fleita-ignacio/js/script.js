function enviarDatos() {
    const nombre = document.getElementById("name_datos").value;
    const mensaje = document.getElementById("mensaje").value;
    const contenedor = document.getElementById("div_recomendaciones");

    const div_nombre = document.createElement("div");
    div_nombre.setAttribute("class", "datos detalle1")

    const p_nombre = document.createElement("p");
    const valor_nombre = document.createTextNode(nombre);
    p_nombre.appendChild(valor_nombre)
    div_nombre.appendChild(p_nombre);

    const div_comentario = document.createElement("div");
    div_comentario.setAttribute("class", "datos detalle2")

    const p_comentario = document.createElement("p");
    const valor_comentario = document.createTextNode(mensaje);
    p_comentario.appendChild(valor_comentario);
    div_comentario.appendChild(p_comentario)

    contenedor.appendChild(div_nombre);
    contenedor.appendChild(div_comentario);
}
