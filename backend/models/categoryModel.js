const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    categoryname :{
        type : String,
        required:[true, "Please enter a category name"]
    },
    description:{
        type:String,
        required:[true,"Please enter a category description"],
    },
    status:{
        type:String,
        required:[true,"please enter a status"]
    },

},{
    timestamps : true,
});

module.exports = mongoose.model("Category",categorySchema);
