const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username :{
        type : String,
        required:[true, "Please enter a user name"]
    },
    email:{
        type:String,
        required:[true,"Please enter a email id"],
        unique:[true,"Email address already taken"]
    },
    password:{
        type:String,
        required:[true,"please enter a password"]
    },

},{
    timestamps : true,
});

module.exports = mongoose.model("User",userSchema);