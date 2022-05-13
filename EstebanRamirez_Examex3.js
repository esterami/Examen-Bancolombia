//Se definen variables
let Matriz1 = [3,2,1,1,2,3,2,3,1];
let Matriz2 = [1,1,2,2,1,1,1,2,1];

//se llama la funcion
Mostrar(Matriz1,Matriz2);

//Se crea una funcion que muestre los resultados y la multiplicacion uno a uno
function Mostrar(Matriz1,Matriz2) {
    console.log('Matriz 1: '+Matriz1);
    console.log('-----------------------------------------------------------------');
    console.log('Matriz 2: '+Matriz2);
    console.log('-----------------------------------------------------------------');
    for(i=0;i<Matriz1.length;i++){
        console.log(Matriz1[i]+' '+'+'+' '+Matriz2[i]+'= '+(Matriz1[i]+Matriz2[i]));
        console.log(Matriz1[i]+' '+'*'+' '+Matriz2[i]+'= '+(Matriz1[i]*Matriz2[i]));
        console.log('-----------------------------------------------------------------');
    }
}
