const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productname :{
        type : String,
        required:[true, "Please enter a Product name"]
    },
    packsize:{
        type:String,
        required:[true,"Please enter a pack_size"],
        
    },
    category_id:{
         type: mongoose.Schema.Types.ObjectId,
         require:true,
         ref:"Category",
    },
    categoryname:{
        type:String,
        required:[true,"please enter a category"]
    },
    MRP:{
        type:String,
        required:[true,"please enter a product MRP"]
    },
    image:{
        type:String,
        required:[true,"please enter a image"]
    },
    status:{
        type:String,
        required:[true,"please enter a status of product"]
    },

},{
    timestamps : true,
});

module.exports = mongoose.model("Product",productSchema);