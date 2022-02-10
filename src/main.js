import { example } from './data.js';
import data from './data/lol/lol.js';
const todaData = Object.values(data.data); //obtener todos los valores de los subobjetos (objetos que están dentro del objeto)
const seeAllChampions = () =>{
    showData(todaData);
}

const seeAssassinChampions = () =>{
    let arrayAssassin = todaData.filter(champion => champion.tags.includes("Assassin"));
        showData(arrayAssassin); 
}

const seeFighterChampions = () =>{
    let arrayFighter = todaData.filter(champion => champion.tags.includes("Fighter"));
        showData(arrayFighter); 
}

const seeMageChampions = () =>{
    let arrayMage = todaData.filter(champion => champion.tags.includes("Mage"));
        showData(arrayMage); 
}

const seeSupChampions = () =>{
    let arraySup = todaData.filter(champion => champion.tags.includes("Support"));
        showData(arraySup); 
}

const seeTankchampions = () =>{
    let arrayTanks = todaData.filter(champion => champion.tags.includes("Tank"));
        showData(arrayTanks); 
}

const seeMarkchampions = () =>{
    let arrayMark = todaData.filter(champion => champion.tags.includes("Marksman"));
        showData(arrayMark); 
}


const showData = (array) => {
    document.getElementById("root").innerHTML="";
    array.forEach((champion) => {
    let newTitle = document.createElement("h2");
    let newContent = document.createTextNode(champion.name);
    newTitle.appendChild(newContent);
    let currentDiv = document.getElementById("root");
    currentDiv.insertBefore(newTitle, currentDiv.parentNode[0]);
    });
}
document.querySelector("#allChampions").addEventListener("click", seeAllChampions);
document.querySelector("#assassinChampions").addEventListener("click", seeAssassinChampions);
document.querySelector("#fighterChampions").addEventListener("click", seeFighterChampions);
document.querySelector("#mageChampions").addEventListener("click", seeMageChampions);
document.querySelector("#supChampions").addEventListener("click", seeSupChampions);
document.querySelector("#tankChampions").addEventListener("click", seeTankchampions);
document.querySelector("#marksmanChampions").addEventListener("click", seeMarkchampions);