
// Arreglo de notas
var notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

// Variables
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

// Recorrer arreglo con forEach
notas.forEach(function (nota) {

    suma = suma + nota;

    if (nota >= 7 && nota <= 10) {
        aprobados = aprobados + 1;
    } else if (nota >= 5 && nota <= 6) {
        supletorio = supletorio + 1;
    } else {
        reprobados = reprobados + 1;
    }

});

// Calcular promedio
promedio = suma / notas.length;

// Determinar estado del curso
if (promedio >= 7) {
    estado = "Aprobado";
} else {
    estado = "En riesgo";
}

// Mostrar resultados en los inputs
txt_aprobados.value = aprobados;
txt_supletorio.value = supletorio;
txt_reprobados.value = reprobados;
txt_promedio.value = promedio;
txt_estado.value = estado;
