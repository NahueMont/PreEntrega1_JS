// 1- Subirlo a GitHub
// 2- Armar un simulador interactivo, la estructura final de tu proyecto integrador, debo usar por lo menos un concicional (if, else, else if), un ciclo (for, while o do while) y una function.

// 3- En mi caso voy a hacer un programa que calcule los pagos en cuotas sobre un monto determinado.

// Funciones
function iniciarOperacion(iniciarOperacion) {
    while (inicioOperacion !== "3") {
        switch (inicioOperacion) {
            case "1":
                pagarConTransferencia();
                break;
            case "2":
                pagarEnCuotas();
                break;
            default:
                alert("Opción incorrecta, seleccione una opción válida.");
                break;
        }
        // Evitamos el bucle solicitando la operación nuevamente:
        inicioOperacion = prompt("Bienvenido, seleccione una operación a realizar:\n1- Pago con transferencia (1 solo pago sin interés).\n2- Pago en cuotas (Con intereses).\n3- Salir.");
    }
}

function pagarConTransferencia() {
    let montoAPagar = prompt("Inserte el monto a pagar o ATRAS para volver: ");
    if (montoAPagar != "ATRAS") {
        montoAPagar = parseFloat(montoAPagar)
    }
    while(montoAPagar !="ATRAS" && (montoAPagar <= 0 || isNaN(montoAPagar))){
        alert("Ingrese un monto válido.")
        montoAPagar = parseFloat(prompt("Inserte el monto a pagar o ATRAS para volver: "));
    }
    if (montoAPagar !== "ATRAS") {
        alert("Usted pagó en total $" + montoAPagar + " en un solo pago.");
    }
}

function pagarEnCuotas() {
    let montoAPagar = prompt("Inserte el monto a pagar o ATRAS para volver: ");
    if (montoAPagar != "ATRAS") {
        montoAPagar = parseFloat(montoAPagar)
    }
    while(montoAPagar !="ATRAS" && (montoAPagar <= 0 || isNaN(montoAPagar))){
        alert("Ingrese un monto válido.")
        montoAPagar = parseFloat(prompt("Inserte el monto a pagar o ATRAS para volver: "));
    }
    let cuotas;
    while (montoAPagar !== "ATRAS") {
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas (3, 6 o 12):"));
        if (cuotas === 3 || cuotas === 6 || cuotas === 12) {
            let totalAPagar = montoAPagar / cuotas;
            if (cuotas === 3) {
                totalAPagar *= 1.15; // 15 % de interés para 3 cuotas
            } else if (cuotas === 6) {
                totalAPagar *= 1.35; // 35 % de interés para 6 cuotas
            } else if (cuotas === 12) {
                totalAPagar *= 1.7; // 70 % de interés para 12 cuotas
            }
            alert("El total a pagar es: $" + totalAPagar + " en " + cuotas + " cuotas.");
            break;
        } else {
            alert("Por favor, ingrese una cantidad válida de cuotas.");
        }
    }
}

// Inicio

let inicioOperacion = prompt("Bienvenido, seleccione una operación a realizar:\n1- Pago con transferencia (1 solo pago sin interés).\n2- Pago en cuotas (Con intereses).\n3- Salir.");

iniciarOperacion(iniciarOperacion)

// Finaliza la operación
alert("Gracias por utilizar nuestros servicios, que tenga buen día.");
