const express = require('express');
const router = require('express').Router();
const { Producto, productos } = require('../claseProducto');


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

    if(!title){
        return res.send("Debe agregar un titulo")
    }
    if(!price){
        return res.send("Debe agregar un precio")
    }
    if(!thumbnail){
        return res.send("Debe agregar un link de imagen")
    }
	const producto = { title, price, thumbnail };
	producto.id = productos.length + 1;
	productos.push(producto);
	res.send(producto);
});

router.put('/productos/:id', (req, res) => {
	let { title, price, thumbnail } = req.body;

    if(!title){
        return res.send("Debe agregar un titulo")
    }
    if(!price){
        return res.send("Debe agregar un precio")
    }
    if(!thumbnail){
        return res.send("Debe agregar un link de imagen")
    }

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

module.exports=router