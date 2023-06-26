/* 1. **Valor: 0.5 - ¿Va a sobrevivir?**

    Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, nuestro héroe no tiene idea de cuántas balas debe cargar.

    Responda a la pregunta y devuelva `true` si es así, de lo contrario `false` :) 
*/

/* Para determinar si el héroe necesita cargar suficientes balas para derrotar a los dragones, necesitamos conocer cuántos      dragones hay en total. Si se menciona que el castillo está rodeado por "un par" de dragones, eso implica que hay dos dragones.

    Dado que cada dragón necesita 2 balas para ser derrotado, el héroe necesitará un total de 4 balas en este caso.

    Por lo tanto, la respuesta sería true.
 */

    let si = prompt(' sabe cuantos dragones hay: pon 1 y si no sabe pon 2');
    if (si == 1){
        let cuantosDragones = prompt ('sabe cuantos dragones hay ');
        console.log(true)
    }
    else {
        console.log(false)
    }