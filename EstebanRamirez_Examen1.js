//Definicion de variables
let salarioBasico=265.00;
let salarioAdicional=350.00;
let horas;
let cHorasExtras;
let horasExtras;

//Ingresa cantidad de horas laboradas
horas=53;

//Se valida si la cantidad de horas es mayor a 40 y se calcula el excedente a pagar
if (horas>40){
    cHorasExtras=horas-40;
    horasExtras=salarioAdicional*cHorasExtras;
    horasNormales=salarioBasico*40;

    //si no se calcula el promedio normal
}else{
    horasNormales=salarioBasico*40;
    horasExtras=0;
}

console.log('El total a pagar por horas laborales normal (40hrs) es de : '+horasNormales);
console.log('El total a pagar por horas Extras '+cHorasExtras+' hrs es de  : '+horasExtras);
