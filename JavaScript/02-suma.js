2. /* **Valor: 0.25 - Sumar valores de una lista**

    Escribe una función que tome una lista de números y devuelva la suma de los números. Los números pueden ser negativos o no enteros. Si la lista no contiene ningún número, debe devolver 0.

    Resultados esperados

    ```JavaScript
    Entrada: [1, 5.2, 4, 0, -1]
    Salida: 9.2

    Entrada: []
    Salida: 0

    Entrada: [-2.398]
    Salida: -2.398

    ``` 
*/


function sumaNumeros(lista) {
    if (lista.length === 0) {
      return 0;
    } else {
      let suma = 0;
      for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
      }
      return suma;
    }[]

}

let Entrada= [1, 5.2, 4, 0, -1 ];
let lista =sumaNumeros(Entrada);
console.log(lista);
