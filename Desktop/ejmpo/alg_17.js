// ESTE PROBLEMA se puede correr en la consola de el buscador de google 
// con la siguiente linea de comando: se declaran las variables a, b, c

var a=parseInt(prompt("introduca un el valor (A)"));
var b=prompt("introduca un el valor (B)");
var c=prompt("introduca un el valor que se negativo (C)");

// y se llama a la funcion ecuCuad(a, b, c)
// y se imprime el resultado de la funcion

function ecuCuad(a, b, c){

return ((-1*b) -(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);


}

var resultado_ecuCuad = ecuCuad(a, b, c);
alert("ecuCuad =" + resultado_ecuCuad)


function ecuCuad2 (a, b, c){

    return ((-1*b) +(Math.sqrt((Math.pow(b,2) - (4*a*c)))))/(2*a);

}
var resultado_ecuCuad2 = ecuCuad2 (a, b, c);
alert("ecuCuad2 =" + resultado_ecuCuad2)