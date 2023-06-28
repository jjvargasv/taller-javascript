/*
18. **Valor: 0.25 - Sumar dos listas de igual longitud**

    Suma de dos listas: Dadas dos listas de números del mismo tamaño, crea una función en JavaScript que recorra ambas listas y devuelva una nueva lista donde cada elemento sea la suma de los elementos correspondientes de las dos listas.

    ```JavaScript
    Entrada:    [ 3, 5, 7, -3, 9, 2 ]
                [ 5, -4, 7, 3, 5, 1 ]
    Salida:     [ 8, 1, 14, 0, 14, 3 ]
    
    ```
*/

function sumarListas(lista1, lista2) {
    let resultado = [];
    
    // Comprobamos que las listas tengan el mismo tamaño
    if (lista1.length !== lista2.length) {
      throw new Error("Las listas deben tener el mismo tamaño");
    }
    
    // Recorremos las listas y sumamos los elementos correspondientes
    for (let i = 0; i < lista1.length; i++) {
      resultado.push(lista1[i] + lista2[i]);
    }
    
    return resultado;
  }
  
  
  let lista1 = [3, 5, 7, -3, 9, 2];
  let lista2 = [5, -4, 7, 3, 5, 1];
  
  let resultado = sumarListas(lista1, lista2);
  console.log(resultado);
  