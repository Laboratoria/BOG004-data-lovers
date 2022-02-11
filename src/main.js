let peliculas = [];
// // eslint-disable-next-line no-debugger
// debugger
fetch('./data/ghibli/ghibli.json')
    .then(response => response.json())
    .then(data => peliculas = data) 
    .then(() => iterarPelicula(peliculas))
    .catch(error => {
        throw(error);
    })

    function iterarPelicula (peliculas){
        const {films} = peliculas;
        const lineaTiempoSection = document.getElementById('lineatiempo');
        
        let HTMLfinal = '';

        films.forEach(film => { 
            HTMLfinal += `
            <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front" id="poster">
                            <img src="${film.poster}" />
                        </div>
                        <div class="flip-card-back">
                            <h1 id="title">${film.title}</h1> 
                            <p id="release_date">${film.release_date}</p> 
                            <p class="description" id="description">${film.description}</p>
                        </div>
                    </div>
                </div>
            `
        });

        lineaTiempoSection.innerHTML = HTMLfinal; 
    }

    // function mostrarAnimaciones (){
    //     document.getElementById('Home').style.display = 'none';
    //     document.getElementById('lineatiempo').style.display = 'block'
    // }