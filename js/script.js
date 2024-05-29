let inputMasa = document.getElementById("inputMasa")
let inputLongitud = document.getElementById("inputLongitud")
let inputVelocidad = document.getElementById("inputVelocidad")

let resMasa = document.getElementById("resultadoMasa")
let resLongitud = document.getElementById("resultadoLongitud")
let resVelocidad = document.getElementById("resultadoVelocidad")

const menu = document.getElementById('contenedor');

const masas = [1, 1000, 1000000, 1000000000, 433592.2, 28349.5]

const longitud = [1, 10, 1000, 1000000, 914.4, 1.6093e+6, 304.8, 25.4]

const distancia = [1, 1000, 1609.34, 1852]

const tiempos = [1, 60, 3600]

function evaluar(input){
    if(input.value.length < 1){
        alert('No se ha ingresado algún valor.')
        return false
    } else {
        return true
    }
}

function igualdadNo(selectId1, selectId2) {
    let sel1 = selectId1.value;
    let sel2 = selectId2;

    if(sel1 != sel2) {
        alert('Por favor, selecciona dos Unidades de Medida diferentes')
        return false;
    } else {
        return true;
    }
}

function calcularMasas() {
    if (evaluar(inputMasa)){
        let pesoInicial = document.getElementById("pesoInicial")
        let pesoFinal = document.getElementById("pesoFinal")
        if (pesoInicial.value != pesoFinal.value) {
            let pesoInput = parseFloat(inputMasa.value)

            document.getElementById('resMasa').innerText  = inputMasa.value + " " + pesoInicial.value + " a " +
            (pesoInput * masas[pesoInicial.selectedIndex] / masas[pesoFinal.selectedIndex]) + " " + pesoFinal.value
        
        } else {
            alert("Las unidades de peso no pueden ser las mismas.");
        }
        

    }
}

function calcularLongitud() {
    if (evaluar(inputLongitud)){
        let lonInicial = document.getElementById("lonInicial")
        let lonFinal = document.getElementById("lonFinal")
        if(lonInicial.value != lonFinal.value) {
            let lonInput = parseFloat(inputLongitud.value)

            document.getElementById('resLongitud').innerText  = inputLongitud.value + " " + lonInicial.value + " a " +
            (lonInput * longitud[lonInicial.selectedIndex] / longitud[lonFinal.selectedIndex]) + " " + lonFinal.value
        } else {
            alert("Las unidades de peso no pueden ser las mismas.");
        }
        
    }
}

function calcularVelocidad() {
    if (evaluar(inputVelocidad)){
        let disInicial = document.getElementById("disInicial")
        let disFinal = document.getElementById("disFinal")
        let tiempoInicial = document.getElementById("tiempoInicial")
        let tiempoFinal = document.getElementById("tiempoFinal")

        if(disInicial.value !== disFinal.value || tiempoInicial.value !== tiempoFinal.value) {
            let velInput = parseFloat(inputVelocidad.value)
            document.getElementById('resVelocidad').innerText = inputVelocidad.value + disInicial.value + "/" + tiempoInicial.value + " a " + 
            (velInput * distancia[disInicial.selectedIndex] / distancia[disFinal.selectedIndex] 
            * tiempos[tiempoFinal.selectedIndex] / tiempos[tiempoInicial.selectedIndex]) + " " + disFinal.value + "/" + tiempoFinal.value
        } else {
            alert("Las unidades de peso no pueden ser las mismas.");
        }
        console.log(disFinal.value + disFinal.value + tiempoInicial
            .value + tiempoFinal.value
        )
    }
}

function mostrar(apartadoId) {
    const apartados = document.querySelectorAll('.apartado');
    apartados.forEach(apartado => {
        apartado.classList.remove('active');
    });

    const apartado = document.getElementById(apartadoId);
    if (apartado) {
        apartado.classList.add('active');
    }

    const menu = document.getElementById('contenedor');
    menu.style.display = 'none';
}

function regresar(apartadoId) {
    const apartado = document.getElementById(apartadoId);
    if (apartado) {
        apartado.classList.remove('active');
    }
    menu.style.display = 'grid';
}

function checarNodo(selectId) {
    let disValue = document.getElementById(selectId).value;
    let tiempoId = (selectId === "disInicial") ? "tiempoInicial" : "tiempoFinal";
    let tiempoSelect = document.getElementById(tiempoId);

    if (disValue === "kn") {
        tiempoSelect.value = "h";
        tiempoSelect.disabled = true;
    } else {
        tiempoSelect.disabled = false;
    }
}

document.getElementById("disInicial").addEventListener("change", function() {
    checarNodo("disInicial");
});

document.getElementById("disFinal").addEventListener("change", function() {
    checarNodo("disFinal");
});