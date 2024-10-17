// Basado en la solución del desafio anterios para llegar a la solución crea una función que reciba 
// dos números y llegue al resultado esperado.

// Solución del desafio anterior

// (5-4)  = 1   :   (5+4)  = 9  →  19
// (8-2)  = 6   :   (8+2)  = 10 →  610
// (10-8) = 2   :   (10+8) = 18 →  218
// (12-9) = 3   :   (12+9) = 21 →  321
// (18-2) = 16  :   (18+2) = 20 →  1620
// (21-5) = 16  :   (21+5) = 26 →  1626

// solution(5, 4)
// solution(21, 5)

// Output:

// 19
// 1626

// Desarrollo 
 
function solution(num1, num2){
    let a = (num1-num2);
    let b = (num1+num2);
    let c = a.toString()+b.toString()
    return c
}

console.log( 
    solution(5,4),
    solution(8,2),
    solution(10,8),
    solution(12,9),
    solution(18,2),
    solution(21,5))



