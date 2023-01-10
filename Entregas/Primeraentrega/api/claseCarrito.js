const { v4: uuidv4 } = require('uuid');

class Carrito {
    constructor(){
        this.id=uuidv4()
        this.timesramp=new Date().toLocaleDateString()
        this.productos=[]
    }


    getProduct(id){
        const index = this.productos.findIndex((product) => product.id === id);

        if (index >= 0) {
          const producto = this.productos[index];
          return producto;
        }
        return `Producto con id ${id} no encontrado`;
    }   
    

    modifyProduct(id,obj){
        const index=this.productos.findIndex((product)=>product.id===id)
        if (index !==0) return `No se encontro el producto con id ${id}`

        this.productos[index]=obj
        return this.productos[index]
    }

    addProduct(idProducto){
        this.productos.push(idProducto)
    }

    deleteProduct(idProducto){
        const index = this.productos.findIndex((product) => product === idProducto)
        
        if (index >= 0) {
            this.productos.splice(index, 1);
            return ` ${idProducto} `;
        } else {
            return `Producto no encontrado`;
        }

        
    }
}

module.exports = Carrito