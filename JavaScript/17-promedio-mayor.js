/*
17. **Valor: 0.5 - Promedio de mayores de edad**

    A partir del ejercicio anterior. Escribe una función llamada `promedioMayoresDeEdad` que reciba un arreglo de objetos (que representan personas) y retorne un nuevo arreglo con los nombres de las personas mayores de edad.

    Nota: No olvide usar `console.log()` para mostrar los resultados retornados.

    ```JavaScript
    Entrada:    promedioMayoresDeEdad( personas );
    Salida:     33
    ```
*/

function promedioMayoresDeEdad(personas) {
    const personasMayores = personas.filter(persona => persona.precio >= 18);
    const totalPersonasMayores = personasMayores.length;
    const sumaEdades = personasMayores.reduce((acumulador, persona) => acumulador + persona.precio, 0);
    const promedio = sumaEdades / totalPersonasMayores;
    return promedio;
  }
  
  let personas = [
    { nombre: "Ana", precio: 25 },
    { nombre: "Carlos", precio: 13 },
    { nombre: "Luisa", precio: 32 },
    { nombre: "Juan", precio: 15 },
    { nombre: "Elisa", precio: 45 },
    { nombre: "Sofia", precio: 9 },
    { nombre: "Manuela", precio: 30 },
  ];
  
  const resultado = promedioMayoresDeEdad(personas);
  console.log(resultado);
  