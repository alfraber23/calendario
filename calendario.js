

function calendario(dia,mes,anio) {
    let fecha = new Date(`${anio}-${mes}-${dia}`)
    let day = fecha.getDay();
    console.log(day);
    
    switch(day){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "es laboral";
            break;
        case 0:
        case 6:
            return "descansa";
            break
    }

}

function validaAnioBisiesto(anio){

    if (anio % 4 == 0) {
        if (anio % 100 == 0) {
            if (anio % 400 == 0) {
                return "es bisiesto";
            } else {
                return "no es bisiesto";
            }
        } else {
            return "es bisiesto";
        }
    } else {
        return "no es bisiesto";
    }
}

function faseLunar(dia,mes,anio)
{
    let fase = 0;
    let totalDias = 0;
    var c = e = 0;

    if (mes < 3) {
        anio--;
        mes += 12;
    }

    ++mes;
    c = 365.25 * anio;
    e = 30.6 * mes;
    totalDias = c + e + dia - 694039.09; 
    totalDias /= 29.5305882;
    fase = parseInt(totalDias); 
    totalDias -= fase; 
    fase = Math.round(totalDias * 8);

    if (fase >= 8 ) {
        fase = 0; 
    }
    let nombreDeFase = ["Luna nueva", "Luna Creciente", "Cuarto creciente", "Luna gibosa creciente", "Luna llena", "Luna gibosa menguante", "Cuarto menguante", "Luna menguante"];
    
    return nombreDeFase[fase];
    /* console.log(nombreDeFase[fase]); */
}

function obtenerDatos(){
    let dias = document.getElementById("dia");
    let dia = dias.value;
    let meses = document.getElementById("mes");
    let mes = meses.value;
    let anio = document.getElementById("anio");

    /* calendario(dia,mes,anio.value);
    validaAnioBisiesto(anio.value);
    faseLunar(dia,mes,anio.value); */

    return [calendario(dia,mes,anio.value),validaAnioBisiesto(anio.value),faseLunar(dia,mes,anio.value)];
}

function imprimeDatos(callback){
    let modifica = document.getElementById("datos");
    modifica.value=callback;

}



