// En este desafío vas a recibir un número que tendrás que reducir a uno en la menor cantidad de pasos posibles aplicando las siguientes opreraciones:

// Si es número par puedes divdir por 2
// Si es número impar puedes sumar 1 o restar 1. (n+1) o (n-1).
// Input

// solution(15)

// Output

// 5

function solution(numero) {

 let cantidadPasos = 0

 while (numero>1) {
    if ((numero%2) === 0) {
        numero = numero/2
        cantidadPasos++
    }else if((((numero+1)/2) % 2) === 0){ 
        numero++         
        cantidadPasos++
    }else{
        numero--
        cantidadPasos++
    }    
 }
 return [numero, cantidadPasos];
}

console.log(solution(15));
