/* Ejercicio: hacer una función que recorra un array de nombres de
personas y los imprima en el html a media que vaya recorriendo
el array */


//----------------------------------
// 1. Entrada del programa Input (I)
//----------------------------------                                              
const listaAlumnos = ["Sebastián ","Lizette ","Juan ","Jose ","Alejandro ","Felipe ","Dennys ","Esteban "];
//----------------------------------
// 2. Definición función
//----------------------------------
function contarAlumnos(listaAlumnos){
       
   for( let i = 0; i<listaAlumnos.length; i++ ){
      console.log(i)
      document.write(listaAlumnos[i]);
   }
}
//-----------------------------------------------------------
// 3. Ejecución de la función:
//-----------------------------------------------------------
var resultado = contarAlumnos(listaAlumnos);
//----------------------------------
// 4. Salida del programa Output (O)
//----------------------------------
//document.write(resultado);
// 5. test de velocidad, pruebas unitarias

