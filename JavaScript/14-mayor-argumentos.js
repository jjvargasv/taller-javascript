/*
14. **Valor: 0.25 - El mayor de N numero de argumentos**

    Modifica el ejercicio anterior para que la función `max` no reciba un arreglo sino un número indeterminado de argumentos.

    ```JavaScript
  
    console.log( max( 1, 2, 3, 4 ) ) // 4
    console.log( max( 63, 85, 39, 24, 3 ) ) // 85
    ```

*/

function max(...numbers) {
    return Math.max(...numbers);
  }
  
  // código de prueba
  console.log(max(1, 2, 3, 4));
  console.log(max(63, 85, 39, 24, 3));
  