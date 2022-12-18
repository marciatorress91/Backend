const express = require('express');
const router = require('express').Router();
const { productClass} = require('../claseProducto');

router.get("/productos", (req,res)=>{
    res.json(productClass.getAllProducts())
})

router.get("/productos/:id", (req, res) => {
    const id=(req.params.id)
    res.json(productClass.getById(id))
    
});

router.post("/productos", (req,res)=>{
    const result=productClass.addProduct(req.body)
    res.json(result)
})

router.put("/productos/:id", (req, res)=>{
    const id=(req.params.id)
    const prod = req.body
    res.json(productClass.modifyById(prod,id))
})

router.delete("/productos/:id", (req, res)=>{
    const id=(req.params.id)
    res.json(productClass.deleteById(id))
})


module.exports=router