// console.log('notas js cargado');

var notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

// Contadores y acumulador
var aprobados = 0;
var supletorio = 0;
var reprobados = 0;
var suma = 0;
var promedio = 0;
var estado = "";

// Elementos HTML
var txt_aprobados = document.getElementById("aprobados");
var txt_supletorio = document.getElementById("supletorio");
var txt_reprobados = document.getElementById("reprobados");
var txt_promedio = document.getElementById("promedio");
var txt_estado = document.getElementById("estado");

// Ejecutar
recorrerYClasificar();
calcularPromedio();
determinarEstado();
mostrarResultados();

// 1 y 2 y 3: Recorrer, clasificar y contar
function recorrerYClasificar() {

    for (var i = 0; i < notas.length; i++) {
        var nota = notas[i];
        suma = suma + nota;

        if (nota >= 7 && nota <= 10) {
            aprobados = aprobados + 1;
        } else if (nota >= 5 && nota <= 6) {
            supletorio = supletorio + 1;
        } else if (nota >= 0 && nota <= 4) {
            reprobados = reprobados + 1;
        }
    }
}

// 4: Calcular promedio
function calcularPromedio() {
    promedio = suma / notas.length;
}

// 5: Determinar estado del curso
function determinarEstado() {
    if (promedio >= 7) {
        estado = "Aprobado";
    } else {
        estado = "En riesgo";
    }
}

// 6: Mostrar en HTML
function mostrarResultados() {
    txt_aprobados.innerHTML = aprobados;
    txt_supletorio.innerHTML = supletorio;
    txt_reprobados.innerHTML = reprobados;
    txt_promedio.innerHTML = promedio.toFixed(2);
    txt_estado.innerHTML = estado;
}
