/*
11. **Valor: 0.25 - Impares**

    Crea una función flecha y asígnala a una variable `obtenerImpares`. La función debe recibir un arreglo de números y retornar todos los impares.

    Nota: Utiliza el método filter y pásale una función flecha como argumento.

    ```JavaScript
    
    console.log( obtenerImpares( [ 1, 2, 3, 4, 5] ) );
    console.log( obtenerImpares( [ 64, 35, 27 ] ) );
    console.log( obtenerImpares( [] ));
    ```

    Valores esperados del código anterior

    ```JavaScript
    [ 1, 3, 5 ]
    [ 35, 27 ]
    []
    ```
*/

let obtenerImpares = (numeros) => numeros.filter((numero) => numero % 2 !== 0);

console.log(obtenerImpares([1, 2, 3, 4, 5]));
console.log(obtenerImpares([64, 35, 27]));
console.log(obtenerImpares([]));
