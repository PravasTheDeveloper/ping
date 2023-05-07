const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
        type:String,
        require:true
    },
    desc :{
        type:String,
        require:true,
        unique:true
    },
    img:{
        type:String,
        require:true,
    },
    categories:{
        type:String,
        require:true,
    },
    size:{
        type:String,
        require:true,
    },
    stock:{
        type:Number,
        require:true,
    },
    color:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    
},{
    timestamps:true
})

module.exports = mongoose.model("Product",ProductSchema)