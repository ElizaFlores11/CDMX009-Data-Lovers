import data from './data/rickandmorty/rickandmorty.js';

const chars = data.results;
export const info = (e) => {
  const word = e.target.value;
  const regEx = new RegExp(word, 'i');
  const result = chars.filter((char) => regEx.test(char.name));
  return result;
};
export const Primarios = () => {
  const result = chars.filter((char) => char.id <= 5);
  let Resultados = '<h1>Personajes Principales</h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Secundarios = () => {
  const result = chars.filter((char) => char.id >= 6);
  let Resultados = '<h1>Personajes Secundarios</h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Ascendente = () => {
  const results = chars;
  const sortName = results.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    } if (prev.name < next.name) {
      return -1;
    }
    return 0;
  });
  let Resultados = '<h1>Ordenar de la A-Z </h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < sortName.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${sortName[i].name}</h2>`;
    Resultados += `<img src=" ${sortName[i].image}"/>`;
    Resultados += `<p>Id ${sortName[i].id}</p>`;
    Resultados += `<p>Estatus ${sortName[i].status}</p>`;
    Resultados += `<p>Generp ${sortName[i].gender}</p>`;
    Resultados += `<p>Especie ${sortName[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Descendente = () => {
  const results = chars;
  const sortName = results.sort((prev, next) => {
    if (prev.name < next.name) {
      return 1;
    } if (prev.name > next.name) {
      return -1;
    }
    return 0;
  });
  let Resultados = '<h1>Orde de Z-A </h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < sortName.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${sortName[i].name}</h2>`;
    Resultados += `<img src=" ${sortName[i].image}"/>`;
    Resultados += `<p>Id ${sortName[i].id}</p>`;
    Resultados += `<p>Estatus ${sortName[i].status}</p>`;
    Resultados += `<p>Generp ${sortName[i].gender}</p>`;
    Resultados += `<p>Especie ${sortName[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Genero = (genero) => {
  const result = chars.filter((char) => char.gender === genero);
  let Resultados = ` <h1>Personajes de Genero ${genero}</h1>`;
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const OtroGenero = () => {
  const result = chars.filter((char) => char.gender !== 'Female' && char.gender !== 'Male');
  let Resultados = ' <h1>Personajes Otro Genero</h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Status = (estado) => {
  const result = chars.filter((char) => char.status === estado);
  let Resultados = `<h1>Personajes de Estatus ${estado}</h1>`;
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const OtroStatus = () => {
  const result = chars.filter((char) => char.status !== 'Alive' && char.status !== 'Dead');
  let Resultados = '<h1>Personajes de Otro Estatus</h1>';
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const Especie = (especie) => {
  const result = chars.filter((char) => char.species === especie);
  let Resultados = `<h1>Personajes de Especie ${especie}</h1>`;
  Resultados += '<div class="acomodar">';
  for (let i = 0; i < result.length; i += 1) {
    Resultados += `<div class="tarjeta"><h2> ${result[i].name}</h2>`;
    Resultados += `<img src=" ${result[i].image}"/>`;
    Resultados += `<p>Id ${result[i].id}</p>`;
    Resultados += `<p>Estatus ${result[i].status}</p>`;
    Resultados += `<p>Generp ${result[i].gender}</p>`;
    Resultados += `<p>Especie ${result[i].species}</p></div>`;
  }
  Resultados += '</div>';
  return Resultados;
};
export const location = (locacion) => {
  const regEx = new RegExp(locacion, 'i');
  const result = chars.filter((char) => regEx.test(char.location.name));
  let Resultados = `<h1>Personajes de Locacion ${locacion}</h1>`;
  Resultados += '<div class="acomodar">';
  result.forEach((personajes) => {
    Resultados += `<div class="tarjeta"><h2> ${personajes.name}</h2>`;
    Resultados += `<img src=" ${personajes.image}"/>`;
    Resultados += `<p>Id ${personajes.id}</p>`;
    Resultados += `<p>Estatus ${personajes.status}</p>`;
    Resultados += `<p>Generp ${personajes.gender}</p>`;
    Resultados += `<p>Especie ${personajes.species}</p></div>`;
  });
  Resultados += '</div>';
  return Resultados;
};
