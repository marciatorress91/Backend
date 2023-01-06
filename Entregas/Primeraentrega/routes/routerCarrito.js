const express = require('express');
const routerCarrito = require('express').Router();
const carrito = require('../api/claseCarrito');
const products = require('../api/claseProducto');

// No lo pide, lo uso para probar

routerCarrito.get("/", (req,res)=>{
    res.json(carrito.getAll())
})

routerCarrito.post("/", (req,res)=>{
    const result=carrito.add(req.body)
    res.json(result)
})

routerCarrito.delete("/:id", (req, res)=>{
    const id=(req.params.id)
    res.json(carrito.deleteById(id))
})

routerCarrito.get("/:id/productos", (req, res) => {
    const id=(req.params.id)
    const carrito1=carrito.getById(id)
    const productos=carrito1.productos
    res.json(productos)
    
});

routerCarrito.post("/:id/productos/:id_prod", (req,res)=>{
    const carrito1=carrito.getById(req.params.id)
    const producto=products.getById(req.params.id_prod)
    carrito1.productos.push(producto)
    carrito.modifyById(carrito1,req.params.id)
    res.json(carrito1)
})







routerCarrito.delete("/productos/:id", (req, res)=>{
    const id=(req.params.id)
    res.json(products.deleteById(id))
})


module.exports=routerCarrito