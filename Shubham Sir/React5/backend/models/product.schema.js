const mongoose = require("mongoose");
const productmodel=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
        min:[1,"Price must be greater than 0"]
    },
    quantity:{
        type:Number,
        required:true,
        min:[0,"Quantity must be greater than 0"]
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",

        required:true,
    },
    productype:{
        type:String,
        enum:["wear","playable","equipments"], 
    },
    sizes:{
        type:String,
        enum:["s","m","l","xl"],
        required:true,
    },
    image:{
        type:String,
        // required:true,
    },
    rating:{
        type:Number,
        default:0
    },
    colors:{
        type:String,
        enum:["red","blue","green","yellow","black"],
        required:true,
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    } , 
    sale:{
        live:{
            type:Boolean,
            default:false
        },
        discountpercentage:{
            type:Number,
            default:0
        }
    },
        

    
    
    // reviews:[
    //     {
    //         userId:{
    //             type:mongoose.Schema.Types.ObjectId,
    //             ref:"User"
    //         },
    //         comment:{
    //             type:String
    //         }
    //     }
    // ]

},{
    timestamps:true
})
const Product = mongoose.model("Product",productmodel);
module.exports = Product;