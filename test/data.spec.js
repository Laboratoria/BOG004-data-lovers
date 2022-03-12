import { datosOrdenados, filtrarDatos,calcularPromedio} from '../src/data.js';
const dataPrueba = [
  {"title": "Castle in the Sky", "rt_score": "95"},
  {"title": "My Neighbor Totoro", "rt_score": "93"},
  {"title": "Kiki's Delivery Service", "rt_score": "96"},
  {"title": "Grave of the Fireflies", "rt_score": "97"},
];
const dataOrden = [
  {"title": "Castle in the Sky", "rt_score": "95"},
  {"title": "Grave of the Fireflies", "rt_score": "97"},
  {"title": "Kiki's Delivery Service", "rt_score": "96"},
  {"title": "My Neighbor Totoro", "rt_score": "93"},
];
const dataFiltro = [
  {"title": "Grave of the Fireflies", "rt_score": "97"},
  {"title": "Kiki's Delivery Service", "rt_score": "96"},
];

const dataPromedio =95.25;

describe('datosOrdenados', () => {
   it('returns `datosOrdenados`', () => {
    expect(datosOrdenados(dataPrueba)).toEqual(dataOrden);
  });
});
describe('filtrarDatos', () => {
  it('returns `filtrarDatos >=96`', () => {
    expect(filtrarDatos(dataPrueba)).toEqual(dataFiltro);
  });
});

describe('calcularPromedio', () => {
   it('returns `promedio`', () => {
    expect(calcularPromedio(dataPrueba)).toEqual(dataPromedio);
  });
});
