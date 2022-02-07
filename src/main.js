import information from './data/lol/lol.js';

const barraBuscador = document.getElementById("buscador");
const boton = document.getElementById("boton");

const filtrar = ()=>{

  resultado.innerHTML = ' ';
  const campeon = barraBuscador.value.toLowerCase();
  console.log(information.data);
  let textoFinal = '';

  for(let champions in information.data){
    let text = champions.toLowerCase();
    if(text === campeon){
      textoFinal += `<p id=\"resultado\">${champions} : ${information.data[champions].title }<br>${information.data[champions].blurb}</p><img src="${information.data[champions].splash}" alt="campeon" width="500" height="600"><br>`;
     }
   }

   if(textoFinal === ''){
    textoFinal += `producto no encotrado`;
   }
   resultado.innerHTML = textoFinal;

  }

boton.addEventListener("click", filtrar);