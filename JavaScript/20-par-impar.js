/*
20. **Valor: 0.5 - ¿Par o impar?**

    Dada una lista de enteros, determina si la suma de sus elementos es par o impar.

    Dé su respuesta como una cadena que coincida con "impar" o "par".

    Si la matriz de entrada está vacía, considérela como: [0] (matriz con cero).

    ```JavaScript
    Entrada: [ 0 ]
    Salida: "par"

    Entrada: [ 0, 1, 4 ]
    Salida: "impar"

    Entrada: [ 0, -1, -5 ]
    Salida: "par"
    ```

NOTA: Algunos ejercicios han sido diseñados por el Instructor otros más han sido seleccionados de los sitios de: Codewars y MakeItReal.
*/

function determinarParidad(lista) {
    if (lista.length === 0) {
      lista = [0];
    }
  
    let suma = lista.reduce(function (a, b) {
      return a + b;
    });
  
    if (suma % 2 === 0) {
      return "par";
    } else {
      return "impar";
    }
  }
  
  // Ejemplos de uso
  console.log(determinarParidad([0]));           
  console.log(determinarParidad([0, 1, 4]));     
  console.log(determinarParidad([0, -1, -5]));   
  
