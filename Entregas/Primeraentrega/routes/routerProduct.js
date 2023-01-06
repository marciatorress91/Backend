const express = require('express');
const routerProduct = require('express').Router();
const products = require('../api/claseProducto');

const administrador=true

function validarAdmin (req,res,next){
    if (administrador==true){
        next()
    } else {
        res.status(403).send({ error: -1, descripcion: "ruta 'x' método 'y' no autorizada" });
    }
    
}


routerProduct.get("/", (req,res)=>{
    res.json(products.getAllProducts())
})

routerProduct.get("/:id", (req, res) => {
    const id=(req.params.id)
    res.json(products.getById(id))
    
});

routerProduct.post("/", validarAdmin, (req,res)=>{
    const result=products.addProduct(req.body)
    res.json(result)
})
    
routerProduct.put("/:id", validarAdmin, (req, res)=>{
    const id=(req.params.id)
    const prod = req.body
    res.json(products.modifyById(prod,id))
})
    
routerProduct.delete("/:id", validarAdmin, (req, res)=>{
    const id=(req.params.id)
    res.json(products.deleteById(id))
})
 



module.exports=routerProduct