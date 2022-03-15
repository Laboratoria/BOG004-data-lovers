import data from "./data/ghibli/ghibli.js";
import { datosOrdenados, filtrarDatos, calcularPromedio } from "./data.js";
let dataGhibli = data.films;
/**Selectores del DOM llamando a elementos */
const btnInicio = document.getElementById("inicio");
const btnAnimaciones = document.getElementById("animaciones");
const btnAnimacionesPopulares = document.getElementById("animaciones-populares");
const pantallaPrincipal = document.getElementById("pantalla-principal");
const pantallaAnimaciones = document.getElementById("pantalla-animaciones");
const pantallaContenedor = document.getElementById("pantalla-contenedor");
const contenedor = document.getElementById("contenedor-grupo");
const ordenar = document.getElementById("selectOrdenar");
const verMas = document.getElementsByClassName("ver-mas");
const verMenos = document.getElementsByClassName("ver-menos");
const piePagina1 = document.getElementById("pie-pagina");
/** Funciones o métodos*/
//estructura de las cards.
function pintarTarjeta(data) {
  let grupoTarjeta = "";
  data.forEach((element) => {
    let tarjeta = `
    <div class= "contenedor-padre">
      <div class="card-imagen">
        <img src="${element.poster}" alt="imagen"/>
      </div>
      <div>
        <h4 class="card-title">${element.title}</h4>
      </div>
      <div class="card-text desplazar">
        <p class="text-description">${element.description}</p>
         <button  class="ver-mas">Leer más</button>
         <button  class="ver-menos">Leer menos</button>
       </div>
    </div>
  `;
    grupoTarjeta += tarjeta;
  });
  contenedor.innerHTML = grupoTarjeta;
}
//parrafo del promedio, funcion calculo.
let resultadoPromedio = calcularPromedio(dataGhibli);
let parrafoPromedio = document.getElementById("parrafo-promedio3");
let parrafo3Prom= `
<p id="parrafo3" class="parrafo espaciado"> El promedio que le dan a las animaciones de Studio Ghibli es: <span>${ resultadoPromedio }</span></p>
`;
parrafoPromedio.innerHTML=parrafo3Prom;
// estructura del pie de pagina.
let piePagina = `
 <small>&copy; 2022 Hecho por: Dannit Hernandez y Elizabeth Echavarria - Todos los Derechos
  Reservados.</small>
 <div class="redes-sociales">
   <i class="fa-brands fa-facebook"></i>
   <i class="fa-brands fa-instagram"></i>
   <i class="fa-brands fa-youtube"></i>
  </div>
`;
piePagina1.innerHTML = piePagina;
//Botón ver más
const clickearVerMas = () => {
  for (let i = 0; i < verMas.length; i++) {
    verMas[i].addEventListener("click", () => {
      let imagenes = document.getElementsByClassName("card-imagen")[i];
      imagenes.style.display = "none";
      verMas[i].style.display = "none";
      verMenos[i].style.display = "block";
      let descripcionCompleta = document.getElementsByClassName("text-description")[i];
      // descripcionCompleta.style.background = "yellow";
      descripcionCompleta.style.webkitLineClamp = "25"
      //console.log(descripcionCompleta);
      // descripcionCompleta.setAttribute("class", "text-descriptioncompleta");
    });
  }
};
//Botón ver menos
const clickearVerMenos = () => {
    for (let i = 0; i < verMenos.length; i++) {
    verMenos[i].addEventListener("click", () => {
      let imagenes = document.getElementsByClassName("card-imagen")[i];
      imagenes.style.display = "block";
      verMas[i].style.display = "block";
      verMenos[i].style.display = "none";
      let descripcionCompleta = document.getElementsByClassName("text-description")[i];
      // descripcionCompleta.style.background = "yellow";
      descripcionCompleta.style.webkitLineClamp = "3"
      //console.log(descripcionCompleta);
      // descripcionCompleta.setAttribute("class", "text-descriptioncompleta");
    });
  }
};
/**Asignar eventos al DOM */
//evento del menu inicio
btnInicio.addEventListener("click", () => {
  pantallaPrincipal.style.display = "block";
  pantallaAnimaciones.style.display = "none";
  pantallaContenedor.style.display = "none";
});
//evento del menu animaciones
btnAnimaciones.addEventListener("click", () => {
  pintarTarjeta(dataGhibli);
  pantallaPrincipal.style.display = "none";
  pantallaAnimaciones.style.display = "block";
  pantallaContenedor.style.display = "block";
  ordenar.value = "original"
  const copiaData = [...dataGhibli];
//evento de ordenar la data
ordenar.addEventListener("change", () => {
  if(ordenar.value === "original"){
    pintarTarjeta(dataGhibli);
  } else if(ordenar.value === "az") {
    let ordenador = datosOrdenados(copiaData);
    pintarTarjeta(ordenador);
  } else {
    let ordenador = datosOrdenados(copiaData).reverse();
    pintarTarjeta(ordenador);
  }
});
  clickearVerMas();
  clickearVerMenos();
});
//evento del menu animaciones populares
btnAnimacionesPopulares.addEventListener("click", () => {
  pantallaPrincipal.style.display = "none";
  pantallaAnimaciones.style.display = "none";
  pantallaContenedor.style.display = "block";
  let datosFiltrados = filtrarDatos(dataGhibli);
  pintarTarjeta(datosFiltrados);
  clickearVerMas();
  clickearVerMenos();
});
/**Responsive */
// menu responsive
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});
