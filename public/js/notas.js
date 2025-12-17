let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

let aprobados = 0;
let supletorio = 0;
let reprobados = 0;
let suma = 0;
let promedio = 0;
let estado = "";

let txt_aprobados = document.getElementById("aprobados");
let txt_supletorio = document.getElementById("supletorio");
let txt_reprobados = document.getElementById("reprobados");
let txt_promedio = document.getElementById("promedio");
let txt_estado = document.getElementById("estado");

notas.forEach(function (nota) {

    suma = suma + nota;

    if (nota >= 7 && nota <= 10) {
        aprobados = aprobados + 1;
    } else if (nota >= 5 && nota <= 6) {
        supletorio = supletorio + 1;
    } else if (nota >= 0 && nota <= 4) {
        reprobados = reprobados + 1;
    }

});

promedio = suma / notas.length;

if (promedio >= 7) {
    estado = "Aprobado";
} else {
    estado = "En riesgo";
}

txt_aprobados.value = aprobados;
txt_supletorio.value = supletorio;
txt_reprobados.value = reprobados;
txt_promedio.value = promedio;
txt_estado.value = estado;
