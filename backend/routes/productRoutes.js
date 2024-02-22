const express = require("express");

const router = express.Router();

const {
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
  } = require("../controllers/productController")


router.route("/").get(getProduct).post(createProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);


module.exports = router;