const { v4: uuidv4 } = require('uuid');

class Carrito {
    constructor(){
        this.carro=[]
    }

    getAll(){
        return this.carro
    }

    getById(id){
        const carrito=this.carro.find(
            carrito => carrito.id === id
        );
        if(carrito){
            return carrito
        } else{
            return ("Carrito no encontrado")
        }    
    }

    
    add(carrito){
            carrito.timestamp= new Date().toLocaleDateString()
            carrito.id = uuidv4();
            this.carro.push(carrito);
            return carrito
       
    }

    modifyById(obj,id){
            let index = this.carro.findIndex(
                carrito => carrito.id === id
            );
            if (index >= 0) {
                this.carro[index] = obj;
                this.carro[index].id = id;
                return (this.carro[index]);
            } else {
                return ('Carrito no encontrado');
            }
    }


    deleteById(id){
        const index = this.carro.findIndex(
            carrito => carrito.id === id
        )
        if (index >= 0) {
            this.carro.splice(index, 1);
            return ('Carrito eliminado');
        } else {
            return ('Carrito no encontrado');
        }
    }

}


const carrito=new Carrito()

module.exports = carrito