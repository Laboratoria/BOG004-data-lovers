import data from './data/lol/lol.js';
let dataLOL = Object.values(data.data);

const filterByKey = (key) => {
  const arrayFilter = dataLOL.filter(champion => champion.tags.includes(key));
  console.log("prueba", arrayFilter);
  return arrayFilter;
  
}


export default filterByKey;












/*const showData = {

  seeKiller: (dataLOL) => {
  const filterKiller = dataLOL.filter(onlyKillers => onlyKillers.tags("Assassin"));
  console.log("prueba", seeKiller);
  return 'seeKiller';
  
},
}
export const anotherExample = () => {
  return 'OMG';
};*/




/*const seeKiller = dataLOL.filter(allKiller)
allKiller = () => {
  if()
}
console.log ("prueba", seeKiller);*/




