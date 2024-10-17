// En este desafío te damos como entrada un número positivo mayor a cero y debes regresar un arreglo con todos los números primos menores o iguales a ese número de entrada ordenados de menor a mayor.

// Recuerda que un número es primo si es solo divisible por 1 y por si mismo.

// Nota: Todos los números primos son números impares a excepción del número 2. El número 1 no es primo porque no cumple con las dos condiciones mencionadas arriba.

// Input

// solution(5);

// Output

// [2, 3, 5]

function solution(numero) {
    let numerosPrimos = []
    for (let i = 2; i <= numero; i++) {
        let esPrimo = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                esPrimo = false;
            }
        }

        if (esPrimo) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos
}

console.log(solution(5));
