const mongoose = require('mongoose')

const connectToDd = require('../config/connectToMongo.js')
const { productModel, Cart } = require('../model/mongoDbModel.js')


const create = async () => {
  await connectToDd()
  console.log("connectToDb")

  const newProduct = new productModel(  {
    "title": "TV 50",
    "description": "Smart Samsung",
    "code": "394",
    "price": "35000",
    "stock": "12",
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_tv_48px-256.png"
  })

  await newProduct.save()
    .then(product => console.log(`${product._id} has been added to the books collection.`))
    .catch(err => console.log(err))

  mongoose.disconnect()
}

create()
