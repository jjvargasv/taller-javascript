/*
8. **Valor: 0.25 - Productos Baratos**

    Escribe una función llamada `productosBaratos` que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

    ```JavaScript
        let prods = [
            { nombre: "Arroz", precio: 5 },
            { nombre: "Pan", precio: 3 },
            { nombre: "Tomate", precio: 8 },
            { nombre: "Leche", precio: 15 }
        ];
    ```

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados por la función `productosBaratos`:

    ```JavaScript
    Entrada:    productosBaratos( prods );
    Salida:     [ "Arroz", "Tomate" ]
    ```
*/

function productosBaratos(arr) {
    let resultados = [];
    for (let i = 0; i < arr.length; i++) {
      let producto = arr[i];
      if (producto.precio >= 5 && producto.precio <= 10) {
        resultados.push(producto.nombre);
      }
    }
    return resultados;
  }
  
  let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
  ];
  
  console.log(productosBaratos(prods));
  