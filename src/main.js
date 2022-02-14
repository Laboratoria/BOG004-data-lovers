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
//Filtro por asesinos
document.getElementById("btnKiller").addEventListener("click", filterByKey("Assassin"))

//Mostrar en la pagina los filtros
let bringForm = document.getElementById("role");

const showByKey = (key) => {
key.forEach((champion) => {
    const name = champion.name;
    console.log(name);
    bringForm.innerHTML += `<li>${name}</li>`;
  });
document.getElementById("btnAll").addEventListener("click", showByKey("Todos"));

