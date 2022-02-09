// estas funciones son de ejemplo

export const filterData = (data, condition) => {
  const arrFiltered = data.filter(eachChampion => eachChampion.tags.includes(condition));
  return arrFiltered;
}; 



//export const anotherExample = () => {
  //return 'OMG';
//};
