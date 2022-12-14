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
    return `Producto agregado al carrito con id ${idCarrito}`;
  } else {
    return `Carrito con id ${idCarrito} no encontrado`;
  }
}

function getProductById(idCarrito, idProducto) {
  const index = carritos.findIndex((carrito) => carrito.id === idCarrito);

  if (index >= 0) {
    const producto = carritos[index].getProduct(idProducto);
    return producto;
  }
  return `Carrito con id ${idCarrito} no encontrado`;
}


function deleteProductById(idProducto, idCarrito) {
  
  const index = carritos.findIndex((carrito) => carrito.id === idCarrito);

  if (index >= 0) {
    const result = carritos[index].deleteProduct(idProducto);
    return `Se elimino el producto ${result}`;
  }
  return `Carrito con id ${idCarrito} no encontrado`;
}


module.exports = {
  getAll,
  getById,
  deleteById,
  modifyById,
  createCarrito,
  addProduct,
  getProductById,
  deleteProductById
};

