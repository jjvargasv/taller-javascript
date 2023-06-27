/* 1. **Valor: 0.5 - ¿Va a sobrevivir?**

    Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

    Responda a la pregunta y devuelva `true` si es así, de lo contrario `false` :) 
*/

function Balas(balas) {
    let cuantasBalas = Number (prompt('cuantas balas vas a poner '));
    return cuantasBalas
}
 let dragones = Balas()
 if (dragones >= 4){
    console.log(true);
 }
 else{
console.log(false);
 }