tareas = []

function addTask() {
    let valor_tarea = document.getElementById("new-task").value
    tareas.push(valor_tarea)
    localStorage.setItem("tares_full", JSON.stringify(tareas))


    let nuevo_contenedor = document.createElement("div")

    const contenedor = document.getElementById("contenedor_tareas")

    let p = document.createElement("p")

    let nombre_tarea = document.createTextNode(valor_tarea)
    p.appendChild(nombre_tarea)
    let boton_eliminar = document.createElement("button")
    let valor_boton = document.createTextNode("eliminar")
    boton_eliminar.appendChild(valor_boton)

    nuevo_contenedor.appendChild(p)
    nuevo_contenedor.appendChild(boton_eliminar)
    contenedor.appendChild(nuevo_contenedor)


    boton_eliminar.onclick = function () {
        nuevo_contenedor.remove()
    }

    p.onclick = function () {
        if (p.style.textDecoration === "line-through") {
            p.style.textDecoration = "none";
            p.setAttribute("class", "pendiente")

        } else {
            p.style.textDecoration = "line-through";
            p.setAttribute("class", "completa")

        }
    }
}
/*
function filtrarCompletas() {
    document.getElementsByClassName("completa").style.display = "block";
    document.getElementsByClassName("pendiente").style.display = "none";
}

/*
function filterTasks(operacion){

}
*/
