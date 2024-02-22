import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [productData, setProductData] = useState({
    productname: '',
    packsize: '',
    categoryname: '',
    MRP: '',
    image: '',
    status: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/hackaton/product/', productData);
      console.log('Product added:', response.data);

      // Optionally, you can redirect the user to the product list or perform other actions
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productname" className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            id="productname"
            name="productname"
            value={productData.productname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="packsize" className="form-label">Pack Size</label>
          <input
            type="text"
            className="form-control"
            id="packsize"
            name="packsize"
            value={productData.packsize}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryname" className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryname"
            name="categoryname"
            value={productData.categoryname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="MRP" className="form-label">MRP</label>
          <input
            type="text"
            className="form-control"
            id="MRP"
            name="MRP"
            value={productData.MRP}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            name="status"
            value={productData.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
