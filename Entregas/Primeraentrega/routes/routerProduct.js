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


routerProduct.get("/", async (req,res)=>{
    const allProducts=await products.getAllProducts()
    res.json(allProducts)
})

routerProduct.get("/:id", async(req, res) => {
    const id=(req.params.id)
    const product=await products.getById(id)
    res.json(product)
    
});

routerProduct.post("/", validarAdmin, (req,res)=>{
    const result=products.addProduct(req.body)
    res.json(result)
})
    
routerProduct.put("/:id", validarAdmin, async (req, res)=>{
    const id=(req.params.id)
    const prod = req.body
    const product=await products.modifyById(prod,id)
    res.json(product)
})
    
routerProduct.delete("/:id", validarAdmin, async (req, res)=>{
    const id=(req.params.id)
    const borrado= await products.deleteById(id)
    res.json(borrado)
})
 



module.exports=routerProduct