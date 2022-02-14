// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const findFilms = (titlesFilms) => {
  if(titlesFilms === document.getElementById('filtro').value){
    return true;
  }else{
    return false
  }
  
};


