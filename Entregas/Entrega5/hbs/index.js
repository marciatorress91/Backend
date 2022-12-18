/* >> Consigna:  
1.Utilizando la misma API de productos del proyecto entregable de la clase anterior, construir un web server (no REST) que incorpore:
a)Un formulario de carga de productos en la ruta raíz (configurar la ruta '/productos' para recibir el POST, y redirigir al mismo formulario).
b)Una vista de los productos cargados (utilizando plantillas de handlebars) en la ruta GET '/productos'.
c)Ambas páginas contarán con un botón que redirija a la otra.
>> Consigna:  
2.Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por pug.
3.Manteniendo la misma funcionalidad reemplazar el motor de plantillas handlebars por ejs.
4.Por escrito, indicar cuál de los tres motores de plantillas prefieres para tu proyecto y por qué.
 */
const express = require('express');
const router = require("./routes/router");
const path=require ("path")
const {engine}=require("express-handlebars")

const products = require('./api/claseProducto');



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router);

app.engine("handlebars", engine())

app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));



app.get('/', (req, res) => {
    res.render('form')
  })


app.get('/productos', (req, res) => {
    let productos = products.getAllProducts()
    res.render('products', { productos })
})



const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));


