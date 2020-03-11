//importa la data a trabajar
import data from './data/rickandmorty/rickandmorty.js';
let chars = data.results
//crea la funcion para buscar por medio de input   
export const info = (e) => {
    let word = e.target.value
    let regEx = new RegExp(word, "i")
    let result = chars.filter(char=>regEx.test(char.name))
    return result;                 
};

export const Primarios = () => {
    let result = chars.filter(chars => chars.id <= 5 ); 
    let Resultados = " <h1>Personajes Principales</h1>";
    Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+="<div class='tarjeta'> <h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }
        Resultados+="</div>"; 
    return Resultados;                 
};

export const Secundarios = () => {
    let result = chars.filter(chars => chars.id >= 6 ); 
    let Resultados = " <h1>Personajes Secundarios</h1>";
    Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+="<div class='tarjeta'> <h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }
        Resultados+="</div>"; 
    return Resultados;                 
};

export const Genero = (genero) => {
    let g = genero; 
    let result = chars.filter(chars => chars.gender == g); 
    let Resultados = " <h1>Personajes de Genero "+ g + "</h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }
        Resultados+="</div>";
    return Resultados;             
};

export const OtroGenero = () => {
    let result = chars.filter(chars => chars.gender != "Female" && chars.gender != "Male" ); 
    let Resultados = " <h1>Personajes Otro Genero</h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }
        Resultados+="</div>";
    return Resultados;             
};

export const Ascendente = () => {
    let results = chars; 
    const sortName = results.sort((prev, next) => {
      if (prev.name > next.name) {
        return 1;
      } else if (prev.name < next.name) {
        return -1;
      } else {
        return 0;
      }
    });

    let Resultados = " <h1>Ordenar de la A-Z </h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < sortName.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" +sortName[i].name+" </h2>";; 
        Resultados+=" <img src='"+ sortName[i].image +"'/>";
        Resultados+=" <p>Id:  "+ sortName[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ sortName[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ sortName[i].species+" </p>";
        Resultados+=" <p>Genero: "+ sortName[i].gender+" </p></div>";
 }
    Resultados+="</div>";
    return Resultados; 
  }

  export const Descendente = () => {
    let results = chars; 
    const sortName = results.sort((prev, next) => {
        if (prev.name < next.name) {
          return 1;
        } else if (prev.name > next.name) {
          return -1;
        } else {
          return 0;
        }
      });

    let Resultados = " <h1>Orde de Z-A </h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < sortName.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" +sortName[i].name+" </h2>";; 
        Resultados+=" <img src='"+ sortName[i].image +"'/>";
        Resultados+=" <p>Id:  "+ sortName[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ sortName[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ sortName[i].species+" </p>";
        Resultados+=" <p>Genero: "+ sortName[i].gender+" </p></div>";
 }
    Resultados+="</div>";
    return Resultados; 
  }
export const Status = (status) => {
    let s = status; 
    let result = chars.filter(chars => chars.status == s); 
    let Resultados = " <h1>Personajes de Estatus "+ s +" </h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }
    Resultados+="</div>";
    return Resultados;              
};

export const OtroStatus = () => {
    let s = status; 
    let result = chars.filter(chars => chars.status != "Alive" && chars.status != "Dead"); 
    let Resultados = " <h1>Personajes de Otro Estatus</h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }
     Resultados+="</div>";
    return Resultados;              
};
export const Especie = (especie) => {
    let e = especie; 
    let result = chars.filter(chars => chars.species == e); 
    let Resultados = " <h1>Personajes de Especie "+ e +"</h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }
     Resultados+="</div>";
    return Resultados;                
};

export const location = (locacion) => {
    let word = locacion; 
    let regEx = new RegExp(word, "i")
    let result = chars.filter(chars => regEx.test(chars.location.name)) 
    let Resultados = " <h1>Personajes de Locacion "+ word +"</h1>";
        Resultados+="<div class='acomodar'>"; 
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div class='tarjeta'><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <img src='"+ result[i].image +"'/>";
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p>"; 
        Resultados+=" <p>Locacion: "+ result[i].location.name+" </p></div>";
    }
    Resultados+="</div>";
    return Resultados;
};
