//import { example } from './data.js';    
//nodos
let solucion = document.querySelector("#encabezado");
let datos = document.querySelector("#datos");
let buscador = document.querySelector("#Buscar");

//importa la funcion del archivo data
import { info } from './data.js';
import { Genero } from './data.js';
import { OtroGenero } from './data.js';
import { Status } from './data.js';
import { OtroStatus } from './data.js';
import { Especie } from './data.js';
import { location } from './data.js';
//listener
//Buscador
document.querySelector('#buscador').addEventListener('change', function(e){
    datos.innerHTML = info(e);
});
//Funciones de Genero
document.querySelector('#femenino').addEventListener('click', function(){
    let gener = "Female"; 
    datos.innerHTML = Genero(gener);
});
document.querySelector('#Masculino').addEventListener('click', function(){
    let gener = "Male"; 
    datos.innerHTML = Genero(gener);
});
document.querySelector('#OtroGenero').addEventListener('click', function(){
    datos.innerHTML = OtroGenero();
});
//Funciones de Status
document.querySelector('#vivo').addEventListener('click', function(){
    let status = "Alive"; 
    datos.innerHTML = Status(status);
});
document.querySelector('#muerto').addEventListener('click', function(){
    let status = "Dead"; 
    datos.innerHTML = Status(status);
}); 
document.querySelector('#OtroEstatus').addEventListener('click', function(){
   datos.innerHTML = OtroStatus(); 
});  
//Funciones de Especies
document.querySelector('#humanos').addEventListener('click', function(){
    let especie = "Human"; 
    datos.innerHTML = Especie(especie);
}); 
document.querySelector('#otro').addEventListener('click', function(){
    let especie = "Alien"; 
    datos.innerHTML = Especie(especie);
}); 
//Funciones de Locacion
document.querySelector('#tierra').addEventListener('click', function(){
    let Locacion = "Earth"; 
    datos.innerHTML = location(Locacion);
});
document.querySelector('#OtroLocacion').addEventListener('click', function(){
    let Locacion = "Interdimensional"; 
    datos.innerHTML = location(Locacion);
});

            
    