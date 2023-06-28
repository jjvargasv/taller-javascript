/*
19. **Valor: 1.0 - Unos y ceros**

    Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero.

    Por ejemplo: `[ 0, 0, 0, 1 ]` se trata como `0001`, que es la representación binaria de 1.

    ```JavaScript
    Entrada:    [ 0, 0, 0, 1 ]
    Salida:     1

    Entrada:    [ 0, 0, 1, 0 ]
    Salida:     2

    Entrada:    [ 0, 1, 0, 1 ]
    Salida:     5

    Entrada:    [ 1, 0, 0, 1 ]
    Salida:     9

    Entrada:    [ 0, 0, 1, 0 ]
    Salida:     2

    Entrada:    [ 0, 1, 1, 0 ]
    Salida:     6

    Entrada:    [ 1, 1, 1, 1 ] 
    Salida:     5

    Entrada:    [ 1, 0, 1, 1 ] 
    Salida:     1

    ```

*/

function binarioAEntero(binario) {
    let resultado = 0;
    let potencia = 0;
  
    for (let i = binario.length - 1; i >= 0; i--) {
      resultado += binario[i] * Math.pow(2, potencia);
      potencia++;
    }
  
    return resultado;
  }
  
  
  console.log(binarioAEntero([0, 0, 0, 1]));  // Salida: 1
  console.log(binarioAEntero([0, 0, 1, 0]));  // Salida: 2
  console.log(binarioAEntero([0, 1, 0, 1]));  // Salida: 5
  console.log(binarioAEntero([1, 0, 0, 1]));  // Salida: 9
  console.log(binarioAEntero([0, 1, 1, 0]));  // Salida: 6
  console.log(binarioAEntero([1, 1, 1, 1]));  // Salida: 15
  console.log(binarioAEntero([1, 0, 1, 1]));  // Salida: 11
  