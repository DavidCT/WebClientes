document.onload(function(){
    var nota = 7;
    console.log('He realizado el examen. Mi resultado es el siguiente:')
    if (nota <= 5) {
        calificacion = "Suspendido"
    } else {
        calificacion = "Aprobado"
    }
    console.log(calificacion);

    var prueba = nota <= 5 ? "Suspendido" : "Aprobado";
});

