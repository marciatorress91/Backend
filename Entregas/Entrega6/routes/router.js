const express = require('express');
const router = require('express').Router();
const products = require('../api/claseProducto');



router.get("/productos", (req,res)=>{
    res.json(products.getAllProducts())
})

router.get("/productos/:id", (req, res) => {
    const id=(req.params.id)
    res.json(products.getById(id))
    
});

router.post("/productos", (req,res)=>{
    products.addProduct(req.body)
    res.redirect('/')
})

router.put("/productos/:id", (req, res)=>{
    const id=(req.params.id)
    const prod = req.body
    res.json(products.modifyById(prod,id))
})

router.delete("/productos/:id", (req, res)=>{
    const id=(req.params.id)
    res.json(products.deleteById(id))
})


module.exports=router