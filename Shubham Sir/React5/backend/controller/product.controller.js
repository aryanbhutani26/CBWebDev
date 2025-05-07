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

const updateProduct = async (req, res) => {
    try {
        const id = req.params;
        const product = await Product.updateOne({_id:id }, req.body)
        res.status(200).json({message : "Product Updated Successfully" , product})
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log(error)
    }
}


const getallProduct = async (req, res) => {
    try {
       const { name , sortby , sortorder  , color , size , gender , productType , weartype} = req.query
        const pipeline = []
        if(name){
            const nameQuery = {
                $match:{
                    name:{$regex:name , $options:'i'}
                },
            }
            pipeline.push(nameQuery);
        }
        if(sortby){
            const sortQuery = {
                $sort:{
                    sortby:sortorder === 'asc' ? 1 : -1

                }
            }
            pipeline.push(sortQuery)
        }
        if(color){
            const colorQuery = {
                $match:{
                    colors:{$regex:color , $options:'i'}
                },
            }
            pipeline.push(colorQuery);
        }
        if(size){
            const sizeQuery = {
                $match:{
                    sizes:{$regex:size , $options:'i'}
                },
            }
            pipeline.push(sizeQuery);
        }
        if(gender){
            const genderQuery = {
                $match:{
                    gender:{$regex:gender , $options:'i'}
                },
            }
            pipeline.push(genderQuery);
        }
        if(productType){
            const productTypeQuery = {
                $match:{
                    productype:{$regex:productType , $options:'i'}
                },
            }
            pipeline.push(productTypeQuery);
        }
            
        if(weartype){
            const weartypeQuery = {
                $match:{
                    productype:{$regex:weartype , $options:'i'}
                },
            }
            pipeline.push(weartypeQuery);

        }
        pipeline.push({
            $lookup: {
              from: 'categories', // The collection name (usually lowercase and plural of the model name)
              localField: 'category',
              foreignField: '_id',
              as: 'category'
            }
          });
          
          pipeline.push({
            $unwind: {
              path: '$category',
              preserveNullAndEmptyArrays: true 
            }
          });
        const products = await Product.aggregate(pipeline);
        res.status(200).json({message : "Products fetched Successfully" , products})
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log(error)
    }
}
const deleteProduct = async (req, res) => {
    try {
        const id = req.params;
        const product = await Product.deleteOne({_id:id })
        res.status(200).json({message : "Product Deleted Successfully" , product})
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log(error)
    }
}

const getproductByCategory = async (req, res) => {
    try {
        const id = req.params
        const products = await Product.find({category:id})
        res.status(200).json({message : "Products fetched Successfully" , products})
    } catch (error) {
        res.status(400).json({message : error.message})
        console.log(error)
    }
}


module.exports = {createProduct , updateProduct, getallProduct, deleteProduct, getproductByCategory}