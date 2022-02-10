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
        peliculas.films.forEach(pelicula => document.getElementById('poster').innerHTML =  (`<img src="${pelicula.poster}" alt="poster">`))
        peliculas.films.forEach(pelicula => document.getElementById('title').innerHTML =  (` <h1>${pelicula.title}</h1>`))
        peliculas.films.forEach(pelicula => document.getElementById('description').innerHTML =  (` <h1>${pelicula.description}</h1>`))
        peliculas.films.forEach(pelicula => document.getElementById('release_date').innerHTML =  (` <h1>${pelicula.release_date}</h1>`))
    }


    // peliculas.forEach(pelicula => console.log(pelicula));