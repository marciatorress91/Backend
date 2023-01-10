const Carrito = require("../api/claseCarrito");

const carritos = [];

function getAll() {
  return carritos;
}

function getById(id) {
  const carrito = carritos.find((carrito) => carrito.id === id);
  if (carrito) {
    return carrito;
  } else {
    return "Carrito no encontrado";
  }
}

function createCarrito() {
  const c = new Carrito();
  carritos.push(c);
  return c.id;
}

function modifyById(obj, idCarrito, idProducto) {
  let index = carritos.findIndex((carrito) => carrito.id === idCarrito);
  if (index >= 0) {
    carritos[index].modifyProduct(idProducto, obj);
  } else {
    return "Carrito no encontrado";
  }
}

// Misma lógica que el modify. Primero encuentro el carrito de mi variable carritos de este mismo archivo. Me va a devolver una instancia de mi objeto carrito y luego llamo al método definido
function deleteById(id) {
  const index = carritos.findIndex((carrito) => carrito.id === id);
  if (index >= 0) {
    carritos.splice(index, 1);
    return `Carrito eliminado con id ${id}`;
  } else {
    return `Carrito no encontrado con id ${id}`;
  }
}

function addProduct(idProducto, idCarrito) {
  const index = carritos.findIndex((carrito) => carrito.id === idCarrito);
  if (index >= 0) {
    carritos[index].addProduct(idProducto);
    return `Carrito eliminado con id ${id}`;
  } else {
    return `Carrito no encontrado con id ${id}`;
  }
}

function getProductById(idCarrito, idProducto) {
  const index = carritos.findIndex((carrito) => carrito.id === idCarrito);

  if (index >= 0) {
    const producto = carritos[index].getProductById(idProducto);
    return producto;
  }

  return "Carrito no encontrado";
}

function deleteProductById(idProducto, idCarrito) {
  //Aca implementar código para encontrar el carrito que se le pasa por id y llamar al método que le corresponde.
}

//Vamos a exportar todas las funciones creadas. Todas van a controlar a los carritos, por ende, desde el router solo vamos a llamar a estas funciones y dejamos que la magia suceda por detrás.
module.exports = {
  getAll,
  getById,
  deleteById,
  modifyById,
  createCarrito,
  addProduct,
};

// En este archivo va a estar toda la lógica pesada y va a controlar cada carrito que se cree. Lo mismo esta para aplicar para los productos. Tener un archivo productControllers y dividir lógicas.
