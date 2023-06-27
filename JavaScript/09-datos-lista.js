/*
9.   **Valor: 0.25** Formatea los datos de la lista
Imprime la lista en la consola, el resultado final debe ser el siguiente:

    

    ```JavaScript
    const mat = [
        ["Pablo", "Maria", "Pedro"],
        ["Diana", "Juan", "Federico"],
        ["Roberto", "Daniel", "Sandra"]
    ];
    ```

    El resultado esperado es el siguiente:

    ```Text
    Grupo 1:
        Pablo
        Maria
        Pedro
    Grupo 2:
        Diana
        Juan
        Federico
    Grupo 3:
        Roberto
        Daniel
        Sandra
    ```
*/

const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for (let i = 0; i < mat.length; i++) {
    console.log(`Grupo ${i + 1}:`);
    for (let j = 0; j < mat[i].length; j++) {
        console.log(`    ${mat[i][j]}`);
    }
}






