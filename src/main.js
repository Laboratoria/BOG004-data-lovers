
import data from './data/lol/lol.js';
/*import { example } from './data.js';
/*let lolData = lol.data;*/
let dataLOL = data.data
console.log('manipular', dataLOL);

document.getElementById("campeon").addEventListener("click", hidepages)

function hidepages() {
    document.getElementById("pag1").style.display = "none";
    document.getElementById("pag2").style.display = "block"; 
    document.getElementById("pag3").style.display = "none";

}