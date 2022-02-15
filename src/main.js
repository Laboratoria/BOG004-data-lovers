let peliculas = [];
// // eslint-disable-next-line no-debugger
// debugger
fetch('./data/ghibli/ghibli.json')
    .then(response => response.json())
    .then(data => peliculas = data.films) 
    .then(() => iterarPelicula(peliculas))
    .catch(error => {
        throw(error);
    })

    function iterarPelicula (peliculas){
        const lineaTiempoSection = document.getElementById('animaciones');
        
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
                            <p id="release_date">${pelicula.release_date}</p> 
                            <p class="description" id="description">${pelicula.description}</p>
                        </div>
                    </div>
                </div>
            `
        });
        lineaTiempoSection.innerHTML = HTMLfinal; 
    }


    let galeria = document.getElementById('galery');
    document.getElementById('galeria-animaciones').style.display = 'none';

    function mostrarAnimaciones (){
        document.getElementById('galeria-animaciones').style.display = 'flex';
        document.getElementById('Home').style.display = 'none';   
    }

    galeria.addEventListener('click', mostrarAnimaciones) 