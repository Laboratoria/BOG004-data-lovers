//funcion de ordenar la data
export const datosOrdenados = (arregloGhibli) => {
  return arregloGhibli.sort((elemento1, elemento2) => {
   return (elemento1.title > elemento2.title) ? 1 : -1 
 })
  
 }; 
 
 //funcion de filtrar la data
 export const filtrarDatos = (arrayanimaciones) => {
   const arrayFiltrado = arrayanimaciones.filter(
     (animaciones) => parseInt(animaciones.rt_score) >= 96
    
   );
   console.log(arrayFiltrado)
   return arrayFiltrado; 
   
 };
 
 //Funcion de calculo
  export const calcularPromedio = (dataAnimaciones) => {
     let suma = 0;
   for (let i = 0; i < dataAnimaciones.length; i++) {
    const puntaje= parseInt(dataAnimaciones[i].rt_score);
    suma += puntaje;
   }
   let promedio = suma / dataAnimaciones.length;
   return promedio;
   };
 