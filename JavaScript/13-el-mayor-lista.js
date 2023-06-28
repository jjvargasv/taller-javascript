/*
13. **Valor 0.25 - El mayor de una lista**

    Crea una función llamada `max` (puede ser normal o función flecha) que reciba un arreglo de números como argumento y retorne el número mayor.

    Nota: No utilices el método Math.max de JavaScript.

    ```JavaScript
    // Código de prueba
    console.log( max( [ 1, 2, 3, 4 ] ) ) // 4
    console.log( max( [ 63, 85, 39, 24, 3 ] ) ) // 85
    ```
*/

function max(numbers) {
    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    return maxNumber;
  }
  
  
  console.log(max([1, 200, 3, 4])); 
  console.log(max([63, 85, 39, 24, 300]));
  