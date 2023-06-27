/* 3. **Valor: 0.5 - Contar por X**

    Cree una función con dos argumentos que devolverá una lista de los primeros n múltiplos de x.

    Suponga que tanto el número dado como el número de veces a contar serán números positivos mayores que 0.

    Devuelve los resultados como una lista.

    Ejemplos

    ```JavaScript
    Entrada:    countBy( 1, 10 );
    Salida:     [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

    Entrada:    countBy( 2, 5 );
    Salida:     [ 2, 4, 6, 8, 10 ]
    ```
*/

function countBy(x, n) {
    const multiples = [];
    for (let i = 1; i <= n; i++) {
      multiples.push(x * i);
    }
    return multiples;
  }

  let multiplosX = Number(prompt('dijite el numero que desea los multiplos'));
  let cuantos = Number(prompt('dijite cuantos numeros desea saber '));
  let lista =countBy(multiplosX, cuantos);
  console.log(lista);