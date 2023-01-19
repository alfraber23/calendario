function calendario() {
    let dia = 28
    let mes = 2
    let anio = 2023
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

function validaAnioBisiesto(){
    let anio = 2024;

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

calendario();
validaAnioBisiesto();