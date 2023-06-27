/* 4. **Valor: 0.25 - UEFA EURO 2023**

    Finalice la función `uefaEuro2023()` para que devuelva una cadena como en los ejemplos a continuación:

    ```JavaScript
    Entrada:    uefaEuro2023(['Alemania', 'Ucrania'],[2, 0]) 
    Salida:     "¡En el partido Alemania - Ucrania, ganó Alemania!"

    Entrada:     uefaEuro2023(['Belgium', 'Italy'],[0, 2]) 
    Salida:     "¡En el partido Bélgica - Italia, ganó Italia!"

    Entrada:    uefaEuro2023(['Portugal', 'Iceland'],[1, 1]) 
    Saluda:     "En el partido Portugal - Islandia, los equipos empataron".
    ```

 */

function uefaEuro2023(equipos, resultados) {
    let equipoLocal = equipos[0];
    let equipoVisitante = equipos[1];
    let golesLocal = resultados[0];
    let golesVisitante = resultados[1];
  
    if (golesLocal > golesVisitante) {
      return "¡En el partido " + equipoLocal + " - " + equipoVisitante + ", ganó " + equipoLocal + "!";
    } else if (golesLocal < golesVisitante) {
      return "¡En el partido " + equipoLocal + " - " + equipoVisitante + ", ganó " + equipoVisitante + "!";
    } else {
      return "En el partido " + equipoLocal + " - " + equipoVisitante + ", los equipos empataron.";
    }
  }

  let equipoLocal = prompt( 'Escribe el nombre del equipo local' );
  let equipoVisitante = prompt( 'Escribe el nombre del equipo visitante' );
  let golesLocal = prompt( 'Escribe los goles del equipo local' );
  let golesVisitante = prompt( 'Escribe los goles del equipo visitante' );

  console.log(uefaEuro2023([equipoLocal , equipoVisitante], [golesLocal, golesVisitante]));
 
  
