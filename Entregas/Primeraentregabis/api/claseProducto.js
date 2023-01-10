const { v4: uuidv4 } = require('uuid');

class Producto {
    constructor(){
        this.productList=[]
    }

    getAllProducts(){
        return this.productList
    }

    getById(id){
        const producto=this.productList.find(
            producto => producto.id === id
        );
        if(producto){
            return producto
        } else{
            return ("Producto no encontrado")
        }    
    }

    
    addProduct(producto){
        const productIsOk=this.validateProduct(producto)

        if(productIsOk){
            producto.timestamp= new Date().toLocaleDateString()
            producto.id = uuidv4();
            this.productList.push(producto);
                    
            return producto
        } else{
            return ("colocar valores validos")
        }
    }



    validateProduct(product){
        const { nombre, descripcion, codigo, foto, precio, stock } = product;

        if(!nombre|| !descripcion || !codigo || !foto || !precio || !stock){
            return false
        }
        return true
    }

    modifyById(prod,id){
        const productIsOk=this.validateProduct(prod)
        if(productIsOk){
            let index = this.productList.findIndex(
                producto => producto.id === id
            );
            if (index >= 0) {
                this.productList[index] = prod;
                this.productList[index].id = id;
                return (this.productList[index]);
            } else {
                return ('Producto no encontrado');
            }
        } else{
            return ("colocar valores validos")
        }
    }

    deleteById(id){
        const index = this.productList.findIndex(
            producto => producto.id === id
        )
        if (index >= 0) {
            this.productList.splice(index, 1);
            return ('Producto eliminado');
        } else {
            return ('Producto no encontrado');
        }
    }

}

const productos=new Producto()


module.exports = productos
