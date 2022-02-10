//import { example } from './data.js';
import data from './data/lol/lol.js';
//import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
let dataLol= data.data;
console.log(dataLol);

dataLol.forEach((elem, index) => {
console.log(elem, index)

})
