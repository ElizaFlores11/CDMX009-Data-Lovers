//import { example } from './data.js';    
//nodos
let solucion = document.querySelector("#encabezado");
let datos = document.querySelector("#datos");
let buscador = document.querySelector("#Buscar");

//importa la funcion del archivo data
import { info } from './data.js';
import { Primarios } from './data.js';
import { Secundarios } from './data.js';
import { Ascendente } from './data.js';
import { Descendente } from './data.js';
import { Genero } from './data.js';
import { OtroGenero } from './data.js';
import { Status } from './data.js';
import { OtroStatus } from './data.js';
import { Especie } from './data.js';
import { location } from './data.js';
//listener
//Buscador
document.querySelector('#buscador').addEventListener('change', function(e){
    let result = info(e);
    let mydiv = document.createElement('div');
        mydiv.style.display="flex";
        mydiv.style.flexWrap= "wrap"; 
    for (let i = 0; i < result.length; i++) {
        let myArticle = document.createElement('div');
            myArticle.style.width="500px";
            myArticle.style.borderRadius="10px"; 
            myArticle.style.padding="0px"; 
            myArticle.style.border="1px solid #008F99";

        let myH2 = document.createElement('h2');
            myH2.style.textAlign="center"; 
        let myimagen = document.createElement('IMG');
            myimagen.style.marginLeft= "50px";                         
        let myPara1 = document.createElement('p');
            myPara1.style.textAlign="left";
            myPara1.style.fontSize="20px";
            myPara1.style.marginLeft="50px"; 
        let myPara2 = document.createElement('p');
            myPara2.style.textAlign="left";
            myPara2.style.fontSize="20px";
            myPara2.style.marginLeft="50px";
        let myPara3 = document.createElement('p');
            myPara3.style.textAlign="left";
            myPara3.style.fontSize="20px";
            myPara3.style.marginLeft="50px";
        let myPara4 = document.createElement('p');
            myPara4.style.textAlign="left";
            myPara4.style.fontSize="20px";
            myPara4.style.marginLeft="50px";

        myH2.textContent = result[i].name;
        myimagen.src =  result[i].image;
        myPara1.textContent = 'Id: ' + result[i].id;
        myPara2.textContent = 'Estatus: ' + result[i].status;
        myPara3.textContent = 'Especie: ' + result[i].species;
        myPara4.textContent = 'Genero: ' + result[i].gender;
        myArticle.appendChild(myH2);
        myArticle.appendChild(myimagen);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        mydiv.appendChild(myArticle);
        datos.appendChild(mydiv);
    }
});
//Funciones de Principales
document.querySelector('#Primarios').addEventListener('click', function(){
    datos.innerHTML = Primarios();
});
document.querySelector('#Secundarios').addEventListener('click', function(){
    datos.innerHTML = Secundarios();
});
//Funcion para Ordenar
document.querySelector('#Asc').addEventListener('click', function(){
    datos.innerHTML = Ascendente();
});
document.querySelector('#Desc').addEventListener('click', function(){
    datos.innerHTML = Descendente();
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

            
    