/*
12. **Valor: 0.75 - Dibuja**

    Crea una funcion que recibirá como parámetro una letra, por ejemplo la letra `o` a partir de la cual dibujará el siguiente patrón. Una matriz de 10 x 10 donde dicha letra se imprimirá de forma intercalada.

    ```JavaScript
    Ejemplo mostrando los
    indices de la matriz

       12345678910
    1  o o o o o 
    2   o o o o o 
    3  o o o o o 
    4   o o o o o 
    5  o o o o o 
    6   o o o o o 
    7  o o o o o 
    8   o o o o o
    9  o o o o o 
    10  o o o o o
    ```

    Nota: La numeracion agregada solo indica el número de filas y columnas de la matriz, para mostrar el detalle de que cada letra está en una posicion intercalada a la anterior.
*/


  function dibujarPatron(letra) {
    let matriz = [];
  

    for (let i = 0; i < 10; i++) {
      matriz[i] = [];
      for (let j = 0; j < 10; j++) {
        matriz[i][j] = ' ';
      }
    }
  
   
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if ((i + j) % 2 === 0) {
          matriz[i][j] = letra;
        }
      }
    }
  
    
    for (let i = 0; i < 10; i++) {
      let fila = '';
      for (let j = 0; j < 10; j++) {
        fila += matriz[i][j] + ' ';
      }
      console.log(fila);
    }
  }
  
  dibujarPatron('b');
