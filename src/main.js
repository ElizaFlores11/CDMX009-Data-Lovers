//import { example } from './data.js';    
//nodos
let solucion = document.querySelector("#encabezado");
let datos = document.querySelector("#datos");
let buscador = document.querySelector("#Buscar");

//importa la funcion del archivo data
import { info } from './data.js';
//listener
document.querySelector('#buscador').addEventListener('change', function(e){
    datos.innerHTML = info(e);
}); 
            
    