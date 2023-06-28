/*
16. **Valor: 0.25 - Mayores de edad**

    Escribe una función llamada `mayoresDeEdad` que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad:

    ```JavaScript
        let personas = [
            { nombre: "Ana", años: 25 },
            { nombre: "Carlos", años: 13 },
            { nombre: "Luisa", años: 32 },
            { nombre: "Juan", años: 15 },
            { nombre: "Elisa", años: 45 },
            { nombre: "Sofia", años: 9 },
            { nombre: "Manuela", años: 30 },
        ];
    ```

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados por la función `personas`:

    ```JavaScript
    Entrada:    mayoresDeEdad( personas );
    Salida:     [ "Ana", "Luisa", "Elisa", "Manuela" ]
    ```
*/

function mayoresDeEdad(personas) {
    const personasMayores = personas.filter(persona => persona.años >= 18);
    const nombresMayores = personasMayores.map(persona => persona.nombre);
    return nombresMayores;
  }
  
  let personas = [
    { nombre: "Ana", años: 25 },
    { nombre: "Carlos", años: 13 },
    { nombre: "Luisa", años: 32 },
    { nombre: "Juan", años: 15 },
    { nombre: "Elisa", años: 45 },
    { nombre: "Sofia", años: 9 },
    { nombre: "Manuela", años: 30 },
  ];
  
  console.log(mayoresDeEdad(personas));
  