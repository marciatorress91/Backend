const Contenedor= require ('./contenedor')
const products=new Contenedor('products.txt')

const prueba = async() => {
    let save= await products.save({
        title: 'producto1',
        price: 120,
        thumbnail: 'http:fotoproducto1',
    })
    let getAll=await products.getAll()
    let getById=await products.getById(6)
    // let deleteById=await products.deleteById(1)
    // let deleteAll=await products.deleteAll()
    console.log(save)
    console.log(getAll)
    console.log(getById)
    // console.log(deleteById)
    // console.log(deleteAll)
}

prueba()

