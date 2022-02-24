//Imports
import {filtrarPeliculas, organizarPeliculasAZ, peliculasxAño} from './data.js'


//Variables y constantes
let peliculas = [];
const lineaTiempoSection = document.getElementById('animaciones');
let galeria = document.getElementById('galery');
let btn_filtrar = document.getElementById("boton-filtrar");
let btn_AZ = document.getElementById("ordenar-az");
let btn_Cronologia = document.getElementById("ordenar-fecha");

//console.log(posterPelis);

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

        peliculas.forEach((pelicula) => { // ForEach recibe dos parametros, el elemento que está recorriendo (pelicula) y el indice de ese elemento
            HTMLfinal += `
            <div id="flip-card" class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" id="poster">
                            <img src="${pelicula.poster}" />
                        </div>
                        <div class="flip-card-back">
                            <h1 id="title">${pelicula.title}</h1> 
                            <p id="rel ease_date">${pelicula.release_date}</p> 
                            <p class="description" id="description">${pelicula.description}</p>
                            <button id="${pelicula.id}">Ver Detalles</button>
                        </div>
                    </div>
                </div>
            `
        });
        lineaTiempoSection.innerHTML = HTMLfinal;

        // se ejecuta la funcion despues de que las tarjetas se han cargado en la vista

        const selectAnimaciones = document.getElementById("animaciones")
        selectAnimaciones.addEventListener("click", captura_click); 
    }

            // al capturar el click se envia un evento, de ese evento nos interesa que tipo de tag es html es?, si es un botton u otro tipo de etiqueta, si es botton (extaremos el id de ese boton que es el que vamos a usar para extarer la informacion detallada de cada pelicula).

            // e nos trae un objeto (esta la informacioninterna que contiene el navegador)del cual vamos a extraer el target que es el dato que contiene el id de ese elemento, y el tagname nos devuelve el nombre del elemento que estamos seleccionando para hacer la comparacion

    function captura_click(e){
        console.log(e. )
        if(e.target.tagName === 'BUTTON'){
            const idFilm = e.target.id
            const filmBusqueda = peliculas.filter(pelicula => idFilm === pelicula.id)

            // filter me devuelve un array con el resultado de la busqueda, en este caso me devuelve un array con un solo objeto. Para acceder a ese objeto necesitamos acceder por la posicion [0]
            
            mostrarInfoPeli(filmBusqueda)
        }
    }


   // Ocultar y mostrar paginas

    document.getElementById('galeria-animaciones').style.display = 'none';
    document.getElementById('pag-informacion-peliculas').style.display = 'none';
    document.getElementById('pagina-individual-seleccion').style.display = 'none';


    function mostrarAnimaciones (){
        document.getElementById('galeria-animaciones').style.display = 'flex';
        document.getElementById('Home').style.display = 'none';
    }

    function mostrarInfoPeli (filmBusqueda){ 
        document.getElementById('galeria-animaciones').style.display = 'none';
        document.getElementById('pag-informacion-peliculas').style.display = 'flex';

        const { 
            poster, 
            title,
            director,
            producer,
            release_date,
            rt_score,
            people,
            locations,
            vehicles
        } = filmBusqueda[0];

        const filmView = `
            <div id="poster-descripcion">
                <div class="poster-principal">
                <img src="${poster}" alt="poster-pelicula"/>
                </div>
            
                <div class="texto-descripcion">
                <li>Title: ${title}</li>
                <li>Director: ${director}</li>
                <li>Producer: ${producer}</li>
                <li>Release Date: ${release_date}</li>
                <li>Rt_score: ${rt_score}</li>
                </div>
            </div>
            
            <div class="btn-location-vehicles-personajes">

                <button id="btnCharacters" class="button button1">Character</button>
                <button id="btnLocation" class="button button1">Location</button>
                <button id="btnVehicles" class="button button1">Vehicles</button>

            </div>
            <div id="carrousel-section">
            </div>
        `
        const selectInfoPelicula = document.getElementById("pag-informacion-peliculas")
        selectInfoPelicula.innerHTML = filmView

        const selectBtnCharacters = document.getElementById("btnCharacters")
        const selectBtnLocation = document.getElementById("btnLocation")
        const selectBtnVehicles = document.getElementById("btnVehicles")

        mostrarCarrusel(people)

        selectBtnCharacters.addEventListener("click", function(){
            mostrarCarrusel(people)
        })
        selectBtnLocation.addEventListener("click", () => mostrarCarrusel(locations))
        selectBtnVehicles.addEventListener("click", () => mostrarCarrusel(vehicles))

        // debido a que se va a enviar un parametro a la funcion mostrarcarrusel que esta dentro del addEven Listener es necesario enviarlo como callback porque de lo contrario se va a ejecutar automaticamente sin esperar el click
    } 

    function mostrarCarrusel(info) {
        let viewCarrusel = `<div class="img-slider__container-1">`
        info.forEach(i => {
            viewCarrusel += `
                <div class="img-items">
                    <img src=${i.img} alt="" class="img-carrusel">
                </div>
            `
        })
        viewCarrusel += `</div>`
        const carrouselSection = document.getElementById("carrousel-section")
        carrouselSection.innerHTML = viewCarrusel
    }

    //  funciones para data

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

    