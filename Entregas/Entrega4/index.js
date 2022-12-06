/* >> Consigna: Realizar un proyecto de servidor basado en node.js y express que ofrezca una API RESTful de productos. En detalle, que incorpore las siguientes rutas:
GET '/api/productos' -> devuelve todos los productos.
GET '/api/productos/:id' -> devuelve un producto según su id.
POST '/api/productos' -> recibe y agrega un producto, y lo devuelve con su id asignado.
PUT '/api/productos/:id' -> recibe y actualiza un producto según su id.
DELETE '/api/productos/:id' -> elimina un producto según su id.

Cada producto estará representado por un objeto con el siguiente formato:
Cada ítem almacenado dispondrá de un id numérico proporcionado por el backend, comenzando en 1, y que se irá incrementando a medida de que se incorporen productos. Ese id será utilizado para identificar un producto que va a ser listado en forma individual.
Para el caso de que un producto no exista, se devolverá el objeto:
{ error : 'producto no encontrado' }
Implementar la API en una clase separada, utilizando un array como soporte de persistencia en memoria.
Incorporar el Router de express en la url base '/api/productos' y configurar todas las subrutas en base a este.
Crear un espacio público de servidor que contenga un documento index.html con un formulario de ingreso de productos con los datos apropiados.
El servidor debe estar basado en express y debe implementar los mensajes de conexión al puerto 8080 y en caso de error, representar la descripción del mismo.
Las respuestas del servidor serán en formato JSON. La funcionalidad será probada a través de Postman y del formulario de ingreso.
 */


const express = require('express');
const router = require('express').Router();
const { Producto, productos } = require('./claseProducto');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



router.get('/productos', (req, res) => {
	res.json({ productos });
});

router.get('/productos/:id', (req, res) => {
	let producto = productos.find(
		producto => producto.id === Number(req.params.id)
	);
	if (producto) {
		res.send(producto);
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

router.post('/productos', (req, res) => {
	let { title, price, thumbnail } = req.body;
	const producto = { title, price, thumbnail };
	producto.id = productos.length + 1;
	productos.push(producto);
	res.send(producto);
});

router.put('/productos/:id', (req, res) => {
	let { title, price, thumbnail } = req.body;
	let index = productos.findIndex(
		producto => producto.id === Number(req.params.id)
	);
	if (index >= 0) {
		productos[index] = { title, price, thumbnail };
		productos[index].id = Number(req.params.id);
		res.send(productos[index]);
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

router.delete('/productos/:id', (req, res) => {
	let index = productos.findIndex(
		producto => producto.id === Number(req.params.id)
	);
	if (index >= 0) {
		productos.splice(index, 1);
		res.send({ message: 'Producto eliminado' });
	} else {
		res.status(404).send({ error: 'Producto no encontrado' });
	}
});

app.use('/api', router);

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
);
server.on('error', err => console.log(`Error: ${err}`));