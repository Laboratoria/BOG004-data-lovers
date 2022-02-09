import champs from './data/lol/lol.js';
import {filterData} from './data.js';

const champions = champs.data;
let Filteredchampions = champs.data;

document.getElementById("Assassin").addEventListener("click", ()=>{
    const condition = "Assassin";
    Filteredchampions = (filterData(Object.values(champions), condition));
    for(let i = 0; i < Filteredchampions.length; i++){
        document.getElementById("cartas").innerHTML = Filteredchampions[i].tags;
    };
    console.log(Filteredchampions);
  });
  
console.log(Filteredchampions);