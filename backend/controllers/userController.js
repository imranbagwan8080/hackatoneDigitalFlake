const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// @desc Register a user 
// @route POST/hackaton/user/register
// @access public 
const registerUser = asyncHandler(async (req,res)=>{
    const {username , email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        new Error("All Feilds are manadatory");
    }
    const userAvailable = await User.findOne({email});

    if(userAvailable){
        res.status(400);
        throw new Error("User is alreaduy register");
    }
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("hashedPassword : ",hashedPassword);

    const user = await User.create({
        username,
        email,
        password:hashedPassword,
    });

    console.log(`User is created ${user}`);

    if(user !=null){
        res.status(201).json({_id:user.id, email:user.email});
    }else{
        res.status(400);
        throw Error("User data is not valid");
    }
    
});


// @desc Login a user 
// @route POST/hackaton/user/login
// @access public 
const loginUser = asyncHandler(async (req,res)=>{
    const {email , password} = req.body;

    if(!email || !password){
        res.status(400);
        new Error("All fields are mandatory!");
    }

    const user = await User.findOne({email});

    // compare password to hashpassword
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username:user.username,
                email:user.email,
                id:user.id,
            },

        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn:"15m"}
        )
        console.log("accessToken : ",accessToken);
        res.status(200).json({accessToken});
        
     }else{
        res.status(401);
        throw Error("email or password is not valid")
     }
    
});




module.exports = {registerUser,
                  loginUser,};