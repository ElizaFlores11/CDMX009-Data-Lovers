//import { example } from './data.js';    
//nodos
let solucion = document.querySelector("#encabezado");
let datos = document.querySelector("#datos");
let buscador = document.querySelector("#Buscar");

//importa la funcion del archivo data
import { info } from './data.js';
import { Genero } from './data.js';
import { Status } from './data.js';
import { Especie } from './data.js';
import { location } from './data.js';
//listener
document.querySelector('#buscador').addEventListener('change', function(e){
    datos.innerHTML = info(e);
});
document.querySelector('#femenino').addEventListener('click', function(){
    let gener = "Female"; 
    //console.log(gener); 
    datos.innerHTML = Genero(gener);
}); 
document.querySelector('#Masculino').addEventListener('click', function(){
    let gener = "Male"; 
    datos.innerHTML = Genero(gener);
}); 
document.querySelector('#vivo').addEventListener('click', function(){
    let status = "Alive"; 
    datos.innerHTML = Status(status);
}); 
document.querySelector('#muerto').addEventListener('click', function(){
    let status = "Dead"; 
    datos.innerHTML = Status(status);
}); 
document.querySelector('#Otro').addEventListener('click', function(){
    let status = "unknown"; 
    datos.innerHTML = Status(status);
}); 
document.querySelector('#humanos').addEventListener('click', function(){
    let especie = "Human"; 
    datos.innerHTML = Especie(especie);
}); 
document.querySelector('#otro').addEventListener('click', function(){
    let especie = "Alien"; 
    datos.innerHTML = Especie(especie);
}); 
document.querySelector('#tierra').addEventListener('click', function(){
    //let Locacion = "Earth (Replacement Dimension)l";
    let Locacion = "Earth"; 
    datos.innerHTML = location(Locacion);
}); 


            
    