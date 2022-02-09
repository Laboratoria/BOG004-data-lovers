import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const btn= document.getElementById("btn1");
btn.addEventListener("click", open1 =>{
 document.getElementById("pag2").style.display="block";
 document.getElementById("pag1").style.display="none";
})

let msg= document.getElementById("msg");
msg.innerHTML= " ";

let get= document.getElementById("btn2");
get.addEventListener("click", open2=>{
const nameuser= document.getElementById("name").value;
 msg.innerHTML = nameuser + ' Aquí podras ver una pelicula a tu gusto y conocer algunas curiosidades ';
})

console.log(example, data);
