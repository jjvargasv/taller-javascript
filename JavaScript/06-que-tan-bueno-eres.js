/* 6. **Valor: 0.5 - ¿Qué tan bueno eres realmente?***

    Hubo un examen en tu clase y lo pasaste. ¡Felicidades! Pero eres una persona ambiciosa. Quiere saber si es mejor que el estudiante promedio de su clase.

    Recibe una lista con los puntajes de las pruebas de sus compañeros. ¡Ahora calcule el promedio y compare su puntaje!

    ¡Devuelve True si estás mejor, de lo contrario False!

    Nota:
    Sus puntos no están incluidos en la lista de puntos de su clase. ¡Para calcular el punto promedio, puede agregar su punto a la lista dada!
*/



function estoyMejor(puntajesCompaneros, miPuntaje) {
    let  totalPuntajes = 0;
    for (let i = 0; i < puntajesCompaneros.length; i++) {
      totalPuntajes += puntajesCompaneros[i];
    }
    let cantidadPuntajes = puntajesCompaneros.length + 1; 
    let promedio = totalPuntajes / cantidadPuntajes;
  
    return miPuntaje > promedio;
  }
  
 
  let puntajesCompaneros = [5, 4, 5, 5]; // Array de puntajes de tus compañeros
  let miPuntaje = 5; // mi puntaje en el examen
  
  let estoyMejo = estoyMejor(puntajesCompaneros, miPuntaje);
  console.log(estoyMejo); // true si estás mejor, false si no estás mejor
  