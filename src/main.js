import {
  info, Primarios, Secundarios, Ascendente, Descendente, Genero, OtroGenero,
  Status, OtroStatus, Especie, location,
} from './data.js';

const datos = document.querySelector('#datos');
document.querySelector('#buscador').addEventListener('change', (e) => {
  const result = info(e);
  const mydiv = document.createElement('div');
  mydiv.style.display = 'flex';
  mydiv.style.flexWrap = 'wrap';
  for (let i = 0; i < result.length; i += 1) {
    const myArticle = document.createElement('div');
    myArticle.style.width = '500px';
    myArticle.style.borderRadius = '10px';
    myArticle.style.padding = '0px';
    myArticle.style.border = '1px solid #008F99';
    const myH2 = document.createElement('h2');
    myH2.style.textAlign = 'center';
    const myimagen = document.createElement('IMG');
    myimagen.style.marginLeft = '50px';
    const myPara1 = document.createElement('p');
    myPara1.style.textAlign = 'left';
    myPara1.style.fontSize = '20px';
    myPara1.style.marginLeft = '50px';
    const myPara2 = document.createElement('p');
    myPara2.style.textAlign = 'left';
    myPara2.style.fontSize = '20px';
    myPara2.style.marginLeft = '50px';
    const myPara3 = document.createElement('p');
    myPara3.style.textAlign = 'left';
    myPara3.style.fontSize = '20px';
    myPara3.style.marginLeft = '50px';
    const myPara4 = document.createElement('p');
    myPara4.style.textAlign = 'left';
    myPara4.style.fontSize = '20px';
    myPara4.style.marginLeft = '50px';
    myH2.textContent = result[i].name;
    myimagen.src = result[i].image;
    myPara1.textContent = `Id ${result[i].gender}`;
    myPara2.textContent = `Status ${result[i].status}`;
    myPara3.textContent = `Especie ${result[i].species}`;
    myPara4.textContent = `Genero ${result[i].gender}`;
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
document.querySelector('#Primarios').addEventListener('click', () => {
  datos.innerHTML = Primarios();
});
document.querySelector('#Secundarios').addEventListener('click', () => {
  datos.innerHTML = Secundarios();
});
document.querySelector('#Asc').addEventListener('click', () => {
  datos.innerHTML = Ascendente();
});
document.querySelector('#Desc').addEventListener('click', () => {
  datos.innerHTML = Descendente();
});
document.querySelector('#femenino').addEventListener('click', () => {
  datos.innerHTML = Genero('Female');
});
document.querySelector('#Masculino').addEventListener('click', () => {
  datos.innerHTML = Genero('Male');
});
document.querySelector('#OtroGenero').addEventListener('click', () => {
  datos.innerHTML = OtroGenero();
});
document.querySelector('#vivo').addEventListener('click', () => {
  datos.innerHTML = Status('Alive');
});
document.querySelector('#muerto').addEventListener('click', () => {
  datos.innerHTML = Status('Dead');
});
document.querySelector('#OtroEstatus').addEventListener('click', () => {
  datos.innerHTML = OtroStatus();
});
document.querySelector('#humanos').addEventListener('click', () => {
  datos.innerHTML = Especie('Human');
});
document.querySelector('#otro').addEventListener('click', () => {
  datos.innerHTML = Especie('Alien');
});
document.querySelector('#tierra').addEventListener('click', () => {
  datos.innerHTML = location('Earth');
});
document.querySelector('#OtroLocacion').addEventListener('click', () => {
  datos.innerHTML = location('Interdimensional');
});

let menu = document.querySelector("#menu");
    menu.addEventListener("click", () =>{
    let siteNav = document.querySelector("#site-nav");
        siteNav.classList.toggle("site-nav-open");
    });