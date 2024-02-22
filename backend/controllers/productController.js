const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const Category = require("../models/categoryModel");

// @desc Get all products
// @route GET/hackaton/product
// @access public 
console.log("procuct");
const getProduct = asyncHandler(async(req , res) =>{
    const product = await Product.find();
    res.status(200).json(product);
});


// @desc POST create Product
// @route POST/hackaton/product
// @access public 
const createProduct = asyncHandler(async(req , res) =>{
    console.log("request body is : ",req.body);
    const {productname,packsize,categoryname,MRP,image,status} = req.body;

    if(!productname || !packsize || !status || !categoryname || !MRP || !image ){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const category = await Category.find({categoryname:categoryname});
    
   
    console.log(category);

    if(category == null){
        res.status(404);
        throw new Error("Category not Found!");
    }
    console.log("categoryFind");
    console.log(category);
    const product = await Product.create({
        productname,
        packsize,
        category_id:category.id,
        categoryname,
        MRP,
        image,
        status,
    });
    res.status(201).json(product);
});


// @desc Update single product
// @route PUT/api/contacts/:id
// @access public 
const updateProduct = asyncHandler(async(req , res) =>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error("product is not found");
    }
    
    const updatedProduct = await Product.findByIdAndUpdate(
       req.params.id,
       req.body,
       {new: true}
    );
    res.status(200).json(updatedProduct);
});


// @desc Delete single product
// @route DELETE/hackaton/category/:id
// @access public 
const deleteProduct = asyncHandler(async(req , res) =>{
    console.log("inside deleteCategory");
    
    const product = await Product.findByIdAndDelete(req.params.id);
    console.log(product);
    if(product === null){
        res.status(404);
        throw new Error("Product is not found");
    }else{
        res.status(200).json("Product is deleted succefully");
    }
 
});


module.exports = {
                  getProduct,
                  createProduct,
                  updateProduct,
                  deleteProduct,
                };