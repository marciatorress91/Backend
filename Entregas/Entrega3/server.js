/* >> Consigna:
Realizar un proyecto de servidor basado en node.js que utilice el módulo express e implemente los siguientes endpoints en el puerto 8080:
Ruta get '/productos' que devuelva un array con todos los productos disponibles en el servidor
Ruta get '/productoRandom' que devuelva un producto elegido al azar entre todos los productos disponibles
Incluir un archivo de texto 'productos.txt' y utilizar la clase Contenedor del desafío anterior para acceder a los datos persistidos del servidor.

Antes de iniciar el servidor, colocar en el archivo 'productos.txt' tres productos como en el ejemplo del desafío anterior.
 */


const express=require ('express')
const Contenedor= require ('./contenedor')
const app=express()

const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${PORT}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

const products = new Contenedor('products.txt');

app.get('/productos', async (req, res) => {
    const mostrarProductos=await products.getAll()
    res.send(mostrarProductos)
 })
 
 app.get('/productoRandom', async (req, res) => {
    const productos=await products.getAll()
    let numeroRandom=Math.floor(Math.random()*productos.length)
    res.send(productos[numeroRandom])
 })
