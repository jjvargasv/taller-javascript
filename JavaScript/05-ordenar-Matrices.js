5./*  **Valor: 1.0 - Combinar dos matrices ordenadas en una**

    Se le dan dos matrices ordenadas que solo contienen números enteros. Su tarea es encontrar una manera de fusionarlos en uno solo, ordenados en orden ascendente. Complete la función `combinarListas( lista1, lista2 )`, donde `lista1` y `lista2` son las listas ordenadas originales.

    No necesita preocuparse por la validación, ya que arr1 y arr2 deben ser matrices con 0 o más enteros. Si tanto arr1 como arr2 están vacíos, simplemente devuelva una lista vacía.

    Nota: `lista1` y `lista2` pueden clasificarse en diferentes órdenes. También `lista1` y `lista2` pueden tener los mismos números enteros. Eliminar duplicado en el resultado devuelto.

    Resultado esperado

    ```JavaScript
    Entrada:    [1, 2, 3, 4, 5]
                [6, 7, 8, 9, 10] 
    Salida:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Entrada:    [1, 3, 5, 7, 9]
                [10, 8, 6, 4, 2] 
    Salida:     [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    Entrada:    [1, 3, 5, 7, 9, 11, 12]
                [1, 2, 3, 4, 5, 10, 12] 
    Salida:     [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]

    ``` 
*/


  function combinarListas(lista1, lista2) {
    var resultado = lista1.concat(lista2);
    resultado.sort(function(a, b) {
      return a - b;
    });
    resultado = resultado.filter(function(valor, indice) {
      return resultado.indexOf(valor) === indice;
    });
    return resultado;
  }
  
  
  console.log(combinarListas([1, 2, 3, 4, 5, 1, 12], []));
 
  
  