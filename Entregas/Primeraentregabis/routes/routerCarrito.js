const routerCarrito = require("express").Router();
const products = require("../api/claseProducto");

// Aca vamos a importar las funciones que se encargan de manejar el carrito. Este Router nunca va a "ver" a la clase original.
const {
  deleteById,
  createCarrito,
  getById,
  getAll,
  modifyById,
  addProduct,
  getProductById,
  deleteProductById
} = require("../controllers/carritoController");

// No lo pide, lo uso para probar

routerCarrito.get("/", (req, res) => {
  const result = getAll();
  res.json(result);
});

routerCarrito.post("/", (req, res) => {
  const result = createCarrito();
  res.json(result);
});

routerCarrito.delete("/:id", (req, res) => {
  const id = req.params.id;
  const result = deleteById(id);
  res.json(result);
});

routerCarrito.get("/:id/productos", (req, res) => {
  const id = req.params.id;

  const carrito = getById(id);
    res.json(carrito);
});

//Tengo mis dudas con este porque me muestra el carrito completo, pero no en particular el listado de productos

routerCarrito.post("/:id/productos/:id_prod", (req, res) => {
  const result = addProduct(req.params.id_prod, req.params.id);
  res.json(result);
});


routerCarrito.delete("/:id/productos/:id_prod", (req, res) => {
    const result = deleteProductById(req.params.id_prod, req.params.id);
  res.json(result);
});


module.exports = routerCarrito;