const express = require('express')
const app = express()
const PORT = 8080;

const routerProduct = require("./routes/routerProduct");
const routerCarrito = require("./routes/routerCarrito");



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/productos', routerProduct);
app.use('/api/carrito', routerCarrito);


const server = app.listen(PORT, () =>console.log(`Server running on port ${PORT}`));
server.on('error', err => console.log(`Error: ${err}`));


