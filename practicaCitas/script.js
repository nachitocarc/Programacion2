/*let citas = []

function ingresarCita() {
    const valor_cita = document.getElementById("cita").value
    citas.push(valor_cita)
    localStorage.setItem("citasClaves", citas)
}


function mostrarCitas() {
    const contenedor = document.getElementById("contenedor_citas")
    let muestra_de_citas = localStorage.getItem("citasClaves")
    let array_muestra_de_citas = muestra_de_citas.split(",")

    /// hacer bucle
    for(let cita in array_muestra_de_citas){
    let p_cita = document.createElement("p")
    let texto_cita = document.createTextNode(cita)
    p_cita.appendChild(texto_cita)
    contenedor.appendChild(p_cita)
    }


}*/
let citas = []

function ingresarCita() {
    const valor_cita = document.getElementById("cita").value
    citas.push(valor_cita)
    localStorage.setItem("citasClaves", JSON.stringify(citas))
}

function mostrarCitas() {
    const contenedor = document.getElementById("contenedor_citas")
    let muestra_de_citas = localStorage.getItem("citasClaves")
    let array_muestra_de_citas = JSON.parse(muestra_de_citas)
    setInterval(function () {
        for (let cita of array_muestra_de_citas) {
            let p_cita = document.createElement("p")
            let texto_cita = document.createTextNode(cita)
            p_cita.appendChild(texto_cita)
            contenedor.appendChild(p_cita)
        }
    }, 5000)


}
