const express = require("express");

const router = express.Router();

const {
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
  } = require("../controllers/categoryController")


router.route("/").get(getCategory).post(createCategory);

router.route("/:id").put(updateCategory).delete(deleteCategory);


module.exports = router;