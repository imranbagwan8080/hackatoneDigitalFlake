import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/hackaton/product/');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    try {
      
      await axios.delete(`http://localhost:5000/hackaton/product/${productId}`);
      // Refresh the product list after deletion
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
      console.log(`Product with ID ${productId} deleted`);
    } catch (error) {
      console.error(`Error deleting product with ID ${productId}:`, error);
    }
  };

  const handleUpdate = (productId) => {
    
    console.log(`Update product with ID ${productId}`);
  };

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Pack Size</th>
            <th>Category Name</th>
            <th>MRP</th>
            <th>Image</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.productname}</td>
              <td>{product.packsize}</td>
              <td>{product.categoryname}</td>
              <td>{product.MRP}</td>
              <td>{product.image}</td>
              <td>{product.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning ml-2"
                  onClick={() => handleUpdate(product.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
