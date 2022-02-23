export const filterByKey = (dataLOL, role) => {
  const arrayFilter = dataLOL.filter(champion => champion.tags.includes(role));
  return arrayFilter; 
}

export const sortChampions = (dataLOL) => dataLOL.sort((item1, item2) => { 
   return (item1.name > item2.name) ? -1 : 1
})



