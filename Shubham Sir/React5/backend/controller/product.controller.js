const Product = require('../models/product.schema')

const createProduct = async (req, res) => {
    try{
    const product = await Product.create(req.body)
    res.status(200).json({message : "Product Created Successfully" , product})


    }catch(error){
        res.status(400).json({message : error.message})
        console.log(error)
    }
}


module.exports = {createProduct}