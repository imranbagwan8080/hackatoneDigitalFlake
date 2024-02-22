const asyncHandler = require("express-async-handler");
const Category = require("../models/categoryModel");
const Product = require("../models/productModel")
// @desc Get all category
// @route GET/hackaton/category
// @access public 

const getCategory = asyncHandler(async(req , res) =>{
    const category = await Category.find();
    res.status(200).json(category);
});


// @desc POST create category
// @route POST/hackaton/category
// @access public 
const createCategory = asyncHandler(async(req , res) =>{
    console.log("request body is : ",req.body);
    const {categoryname,description,status} = req.body;

    if(!categoryname || !description || !status){
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const category = await Category.create({
        categoryname,
        description,
        status,
    });
    res.status(201).json(category);
});


// @desc Update single category
// @route PUT/api/contacts/:id
// @access public 
const updateCategory = asyncHandler(async(req , res) =>{
    const category = await Category.findById(req.params.id);
    if(!category){
        res.status(404);
        throw new Error("category is not found");
    }
    
    const updatedCategory = await Category.findByIdAndUpdate(
       req.params.id,
       req.body,
       {new: true}
    );
    res.status(200).json(updatedCategory);
});


// @desc Delete single category
// @route DELETE/hackaton/category/:id
// @access public 
const deleteCategory = asyncHandler(async(req , res) =>{
    console.log("inside deleteCategory");
    
    const category = await Category.findByIdAndDelete(req.params.id);
    console.log(category);
    
    if(category === null){
        res.status(404);
        throw new Error("Category is not found");
    }else{
        // Delete all products that have the current category_id
        const deleteAllProducts = await Product.deleteMany({ category_id : req.params.id });
        res.status(200).json("Category is deleted succefully");
    }
 
});


module.exports = {
                  getCategory,
                  createCategory,
                  updateCategory,
                  deleteCategory
                };