/*
15. **Valor: 1.0 - Ordenar lista de numeros**

    Crea una función llamada `ordenarDesc` (puede ser normal o función flecha) que reciba un arreglo de números como argumento y que retorne la lista ordenada de forma descendente (es decir, de mayor a menor)

    ```JavaScript
    Entrada:    [ 34, 7, 9, 11, 77, 23, 2 ]
    Salida:     [ 77, 34, 23, 11, 9, 7, 2 ]
    ```
*/

function ordenarDesc(arr) {
    return arr.sort((a, b) => b - a);
  }
  
  const numeros = [34, 7, 9, 11, 77, 23, ];
  const numerosOrdenados = ordenarDesc(numeros);
  console.log(numerosOrdenados);
  