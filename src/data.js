//importa la data a trabajar
import data from './data/rickandmorty/rickandmorty.js';

let chars = data.results
//crea la funcion para buscar por medio de input   
export const info = (e) => {
    let word = e.target.value
    let regEx = new RegExp(word, "i")
    let result = chars.filter(char=>regEx.test(char.name))
    let Resultados = "<h1>Personajes</h1>";
    for (let i = 0; i < result.length; i++) {
        Resultados+=" <h2>" + result[i].name+" </h2>";; 
        Resultados+=" <p>Id:  "+ result[i].id+" </p>";;
        Resultados+=" <p>Estatus: "+ result[i].status+" </p>"; 
        Resultados+=" <p>Especie: "+ result[i].species+" </p>";
        Resultados+=" <p>Genero: "+ result[i].gender+" </p>";
    }
    return Resultados;
                 
};
