//importa la data a trabajar
import data from './data/rickandmorty/rickandmorty.js';

let chars = data.results
//crea la funcion para buscar por medio de input   
export const info = (e) => {
    let word = e.target.value
    let regEx = new RegExp(word, "i")
    let result = chars.filter(char=>regEx.test(char.name))
    let Resultados = " <h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }
    return Resultados;
                 
};

export const Genero = (genero) => {
    let g = genero; 
    let result = chars.filter(chars => chars.gender == g); 
    let Resultados = " <h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
    }

    return Resultados;
                 
};

export const Status = (status) => {
    let s = status; 
    let result = chars.filter(chars => chars.status == s); 
    let Resultados = " <h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }

    return Resultados;
                 

                 
};

export const Especie = (especie) => {
    let e = especie; 
    let result = chars.filter(chars => chars.species == e); 
    let Resultados = " <h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }

    return Resultados;
                 

                 
};

export const location = (locacion) => {
    let word = locacion; 
    let regEx = new RegExp(word, "i")
    //let result = chars.filter(chars=>regExp.test(chars.location))
    let result = chars.filter(char=>regEx.test(char.location))
    
    //let result = chars.filter(chars => chars.species == e); 
    /*let Resultados = " <h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <div><h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p></div>";
 }*/

    return result;
                 

                 
};