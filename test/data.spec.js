import {
  info, Primarios, Secundarios, Ascendente, Descendente, Genero, OtroGenero,
  Status, OtroStatus, Especie, location,
} from '../src/data.js';

describe('Funcion de buscador', () => {
  it('Debería ser una función', () => {
    expect(typeof info).toBe('function');
  });
});
describe('Evento Primario', () => {
  it('Debería ser una función', () => {
    expect(typeof Primarios).toBe('function');
  });
});
describe('Evento Secundatrio', () => {
  it('Debería ser una función', () => {
    expect(typeof Secundarios).toBe('function');
  });
});
describe('Evento Ascedentes', () => {
  it('Debería ser una función', () => {
    expect(typeof Ascendente).toBe('function');
  });
});
describe('Evento Descendente', () => {
  it('Debería ser una función', () => {
    expect(typeof Descendente).toBe('function');
  });
});
describe('Evento Genero', () => {
  it('Debería ser una función', () => {
    expect(typeof Genero).toBe('function');
  });
});
describe('Evento Otro Genero', () => {
  it('Debería ser una función', () => {
    expect(typeof OtroGenero).toBe('function');
  });
});
describe('Evento Status', () => {
  it('Debería ser una función', () => {
    expect(typeof Status).toBe('function');
  });
});
describe('Evento Otro Estatus', () => {
  it('Debería ser una función', () => {
    expect(typeof OtroStatus).toBe('function');
  });
});
describe('Evento Especie', () => {
  it('Debería ser una función', () => {
    expect(typeof Especie).toBe('function');
  });
});
describe('Evento Locacion', () => {
  it('Debería ser una función', () => {
    expect(typeof location).toBe('function');
  });
});
