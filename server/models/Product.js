const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title : {
        type:String,
        require:true
    },
    desc :{
        type:String,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    categories:{
        type:String,
    },
    size:{
        type:Array,
    },
    stock:{
        type:Boolean,
    },
    color:{
        type:Array,
    },
    price:{
        type:Number,
        require:true,
    },
    productCode:{
        type:String,
        unique:true
    },
    rating:{
        type:Number
    },
    sell:{
        type:Number
    }
    
},{
    timestamps:true
})

module.exports = mongoose.model("Product",ProductSchema)