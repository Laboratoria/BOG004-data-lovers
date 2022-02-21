import filterByKey from "./data.js";
import data from './data/lol/lol.js';
let dataLOL = Object.values(data.data);

document.getElementById("btnChampion").addEventListener("click", hidepages)

function hidepages() {
  document.getElementById("pag1").style.display = "none";
  document.getElementById("pag2").style.display = "block";
  document.getElementById("pag3").style.display = "none";
}
//Asi comienzan las funciones de la data
//Mostrar en la pagina los filtros

let bringForm = document.getElementById("resultFilter");

const showInScreen = (showChampion) => {
  bringForm.innerHTML = "";
  showChampion.forEach((champion) => {
    const image = champion.splash;
    let card = document.createElement("div");
    card.setAttribute("class", "cardChampion");
    // CREANDO CON LITERAL TEMPLATE
    card.innerHTML = `
      <div class="contenedorTarjeta"> 
          <div class="face card"> 
           <h3>${champion.name}</h3>
           <img class = "image" src = ${image}>
           <h4>${champion.title}</h4>
          </div>
          <div class="face contenido">
            <h4>${champion.blurb}</h4>
          </div>
      </div>

    `
    bringForm.appendChild(card);
  })
};

document.getElementById("btnAll").addEventListener("click", () => {
  showInScreen(dataLOL);
});

document.getElementById("btnKiller").addEventListener("click", () => {
  showInScreen(filterByKey("Assassin"));
})//Filtro por asesinos

document.getElementById("btnMagic").addEventListener("click", () => {
  showInScreen(filterByKey("Mage"));

})//Filtro por Magos

document.getElementById("btnFighter").addEventListener("click", () => {
  showInScreen(filterByKey("Fighter"));
})//Filtro por Luchadores

document.getElementById("btnMarksman").addEventListener("click", () => {
  showInScreen(filterByKey("Marksman"));
})//Filtro por Tiradores

document.getElementById("btnTank").addEventListener("click", () => {
  showInScreen(filterByKey("Tank"));
})//Filtro por Tanques

document.getElementById("btnSupport").addEventListener("click", () => {
  showInScreen(filterByKey("Support"));
})//Filtro por apoyos 

// CREANDO ETIQUETA POR ETIQUETA
/*let showImage = document.createElement("img");
showImage.setAttribute("src", image);
card.appendChild(showImage);
let h3 = document.createElement("h3");
h3.innerText = champion.title;
card.appendChild(h3);*/