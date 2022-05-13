var salEmpleadoConfianza=500;
var salEpleadoSindicato=250;
var salTotal;

class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get Detalle() {

    }
    Detalle () {
        console.log(this.nombre,+' ',this.apellido+' ',this.edad);
    }
}

class Empleado extends persona{

    constructor(nombre, apellido, edad, atributoDeTipo) {
        super(nombre,edad ,apellido );
        this.atributoDeTipo = atributoDeTipo;
    }
    get Detalle1(){

    }
    Detalle1() {
        console.log(this.nombre,+' ',this.apellido+' ',this.edad,+' ',this.atributoDeTipo);
    }

}

function Nomina (empleado){
    var dias = Math.floor(Math.random()*(15-5))+5;
    if (empleado.atributoDeTipo=='S'){
        salTotal =((salEpleadoSindicato*dias)-((salEpleadoSindicato*dias)*0.1));
        console.log(empleado.nombre+' '+empleado.apellido+' '+'de '+empleado.edad+' años - '
            +empleado.atributoDeTipo +' pertenece a Empleado de Sindicato con un sueldo de $'+salTotal+
            ' por '+dias+' dias trabajados');
    }else{
        salTotal =((salEmpleadoConfianza*dias)-((salEmpleadoConfianza*dias)*0.13));
        console.log(empleado.nombre+' '+empleado.apellido+' '+'de '+empleado.edad+' años - '
            +empleado.atributoDeTipo +' pertenece a Empleado de Confianza con un sueldo de $'+salTotal+
            ' por '+dias+' dias trabajados');
    }

}

empleado1 = new Empleado();
empleado1.nombre='Maria';
empleado1.apellido='Carvajal';
empleado1.edad='33';
empleado1.atributoDeTipo='C';

empleado2 = new Empleado();
empleado2.nombre='Juan';
empleado2.apellido='Almeira';
empleado2.edad='23';
empleado2.atributoDeTipo='C';

empleado3 = new Empleado();
empleado3.nombre='Dulce';
empleado3.apellido='Salguero';
empleado3.edad='42';
empleado3.atributoDeTipo='S';


Nomina(empleado1);
Nomina(empleado2);
Nomina(empleado3);



