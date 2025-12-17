let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];

let txt_nota = document.getElementById("txt_nota");
let btn_agregar = document.getElementById("btn_agregar");
let btn_limpiar = document.getElementById("btn_limpiar");

let txt_aprobados = document.getElementById("aprobados");
let txt_supletorio = document.getElementById("supletorio");
let txt_reprobados = document.getElementById("reprobados");
let txt_promedio = document.getElementById("promedio");
let txt_estado = document.getElementById("estado");

btn_agregar.addEventListener("click", function () {
    let nota = Number(txt_nota.value);

    notas.push(nota);
    calcular();
    txt_nota.value = "";
});

btn_limpiar.addEventListener("click", function () {
    notas = [];
    txt_nota.value = "";

    txt_aprobados.value = "";
    txt_supletorio.value = "";
    txt_reprobados.value = "";
    txt_promedio.value = "";
    txt_estado.value = "";
});

function calcular() {
    let aprobados = 0;
    let supletorio = 0;
    let reprobados = 0;
    let suma = 0;

    notas.forEach(function (nota) {
        suma += nota;

        if (nota >= 7) aprobados++;
        else if (nota >= 5) supletorio++;
        else reprobados++;
    });

    let promedio = suma / notas.length;
    let estado = "";

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
}
