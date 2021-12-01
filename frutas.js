const frutas = ["platano", "manzana", "platano", "pera"];
const dinero = 1000;

function logFrutas() {
  frutas.forEach(fruta => console.log(fruta));
}

module.exports = {
  frutas,
  dinero,
  logFrutas
};
