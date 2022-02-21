//Imports
import {filtrarPeliculas, organizarPeliculasAZ, peliculasxAño} from './data.js'


//Variables y constantes
let peliculas = [];
const lineaTiempoSection = document.getElementById('animaciones');
let galeria = document.getElementById('galery');
document.getElementById('galeria-animaciones').style.display = 'none';
let btn_filtrar = document.getElementById("boton-filtrar");
let btn_AZ = document.getElementById("ordenar-az");
let btn_Cronologia = document.getElementById("ordenar-fecha");



//Eventos
galeria.addEventListener('click', mostrarAnimaciones);
btn_filtrar.addEventListener("click",traerNombreInput);
btn_AZ.addEventListener("click",OrdenarAlfabeticamenteAaZ); 
btn_Cronologia.addEventListener("click",OrdenarCronologicamente);


fetch('./data/ghibli/ghibli.json')
    .then(response => response.json())
    .then(data => peliculas = data.films) 
    .then(() => iterarPelicula(peliculas))
    .catch(error => {
        throw(error);
    })

    

//Funciones

// Iteración y template
    function iterarPelicula (peliculas){
        let HTMLfinal = '';

        peliculas.forEach(pelicula => { 
            HTMLfinal += `
            <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" id="poster">
                            <img src="${pelicula.poster}" />
                        </div>
                        <div class="flip-card-back">
                            <h1 id="title">${pelicula.title}</h1> 
                            <p id="rel ease_date">${pelicula.release_date}</p> 
                            <p class="description" id="description">${pelicula.description}</p>
                        </div>
                    </div>
                </div>
            `
        });
        lineaTiempoSection.innerHTML = HTMLfinal; 
    }

   // Ocultar y mostrar paginas

    function mostrarAnimaciones (){
        document.getElementById('galeria-animaciones').style.display = 'flex';
        document.getElementById('Home').style.display = 'none';   
    }
    //  

    function traerNombreInput(event) {
        event.preventDefault();
        const datosBusqueda = document.getElementById("input-filtro").value;
        const filmsFiltradas = filtrarPeliculas(peliculas, datosBusqueda)
        iterarPelicula(filmsFiltradas);
        
    }

    function OrdenarAlfabeticamenteAaZ(event){
    event.preventDefault();
        const peliculasOrdenadasAaZ= organizarPeliculasAZ(peliculas)
        iterarPelicula(peliculasOrdenadasAaZ)
    }

    function OrdenarCronologicamente(event){
    event.preventDefault();
        
        let peliculasOrdenadasxAño = peliculasxAño(peliculas)
        iterarPelicula(peliculasOrdenadasxAño)
    }

    