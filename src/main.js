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

document.getElementById("btnKiller").addEventListener("click", filterByKey("Assassin"))

let bringForm = document.getElementById("role");

document.getElementById("btnAll").addEventListener("click", () => {
  dataLOL.forEach((champion) => {
    const name = champion.name;
    console.log(name);
    bringForm.innerHTML += `<li>${name}</li>`;
  });
}
);



 



//import filterChampion from './data.js';

/*document.getElementById("btnAll").addEventListener("click", seeChampions)

function seeChampions() {
    let nameChampion = document.getElementById("nada").innerHTML = "Su campeon es " + filterChampion();
    //createTag.appendChild(nameChampion);
    console.log (nameChampion);
    return nameChampion;
}
//filterChampion()*/