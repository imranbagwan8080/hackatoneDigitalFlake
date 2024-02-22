import React, { useState, useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/hackaton/category/');
        setCategories(response.data);
        console.log(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (categoryId) => {
    try {
      
      await axios.delete(`http://localhost:5000/hackaton/product/${categoryId}`);
      // Refresh the product list after deletion
      const updatedCategory = categories.filter((category) => category.id !== categoryId);
      setCategories(updatedCategory);
      console.log(`Product with ID ${categoryId} deleted`);
    } catch (error) {
      console.error(`Error deleting product with ID ${categoryId}:`, error);
    }
  };

  const handleUpdate = (categoryId) => {
    
    console.log(`Update product with ID ${categoryId}`);
  };

  return (
    <div className="container mt-4">
      <h2>Categories</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.categoryname}</td>
              <td>{category.description}</td>
              <td>{category.status}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(category.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning ml-2"
                  onClick={() => handleUpdate(category.id)}
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

export default CategoryList;

