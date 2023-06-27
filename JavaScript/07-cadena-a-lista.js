/*
7**Valor: 0.25 - Convertir una cadena en una lista**

    Escriba una función para dividir una cadena y convertirla en una lista de palabras.

    Resultados esperados:

    ```JavaScript
    Entrada:    "Robin Singh" 
    Salida:     ["Robin", "Singh"]

    Entrada:    "Me encantan los arreglos, son mis favoritos"
    Salida:     ["Yo", "amo", "arreglos", "ellos", "son", "mi", "favorito"]
    ```
*/

function dividirCadenaEnPalabras(cadena) {
    let palabras = cadena.split(" ");
    return palabras;
  }
  
  let ejemplo1 = "Robin Singh";
  let ejemplo2 = prompt( 'Dijite lo que quiere convertir a listas')
  
  console.log(dividirCadenaEnPalabras(ejemplo1)); 
  console.log(dividirCadenaEnPalabras(ejemplo2)); 