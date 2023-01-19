

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
            console.log("es laboral");
            break;
        case 0:
        case 6:
            console.log("descansa");
            break
    }

}

function validaAnioBisiesto(anio){


    if (anio % 4 == 0) {
        if (anio % 100 == 0) {
            if (anio % 400 == 0) {
                console.log("es bisiesto");
            } else {
                console.log("no es bisiesto");
            }
        } else {
            console.log("es bisiesto");
        }
    } else {
        console.log("no es bisiesto");
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
    
    return 
    console.log(nombreDeFase[fase]);
}




