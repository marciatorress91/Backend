const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');


class Producto {
    constructor( file ){
        this.productList=file
    }

    async saveFile ( productos ) {
        await fs.promises.writeFile(
            this.productList, JSON.stringify( productos, null, 2 )
        )
      }

    async getAllProducts(){
        const allProducts = await fs.promises.readFile( this.productList, 'utf-8')
        return JSON.parse(allProducts)
    }

    async getById(id){
        const allProducts = await this.getAllProducts()
        const producto=allProducts.find(
            producto => producto.id === id
        );
        if(producto){
            return producto
        } else{
            return ("Producto no encontrado")
        }    
    }

    
    async addProduct(producto){
        const productIsOk=this.validateProduct(producto)

        if(productIsOk){
            producto.timestamp= new Date().toLocaleDateString()
            producto.id = uuidv4();
            const allProducts = await this.getAllProducts()
            allProducts.push(producto)
            await this.saveFile (allProducts)                    
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

    async modifyById(prod,id){
        const productIsOk=this.validateProduct(prod)
        if(productIsOk){
            const allProducts = await this.getAllProducts()
            let index = allProducts.findIndex(
                producto => producto.id === id
            );
            if (index >= 0) {
                allProducts[index] = prod;
                allProducts[index].id = id;
                await this.saveFile (allProducts); 
                return (allProducts[index]);
            } else {
                return ('Producto no encontrado');
            }
        } else{
            return ("colocar valores validos")
        }
    }

    async deleteById(id){
        const allProducts = await this.getAllProducts()
        const index = allProducts.findIndex(
            producto => producto.id === id
        )
        if (index >= 0) {
            allProducts.splice(index, 1);
            await this.saveFile (allProducts); 
            return ('Producto eliminado');
        } else {
            return ('Producto no encontrado');
        }
    }

}

const productos=new Producto('./api/productos.txt')


module.exports = productos
