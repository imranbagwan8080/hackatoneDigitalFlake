import React, { useState } from 'react';
import axios from 'axios';

function AddCategory() {
  const [categoryData, setCategoryData] = useState({
    categoryname: '',
    description: '',
    status: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/hackaton/category/', categoryData);
      console.log('Category added:', response.data);

      // Optionally, you can redirect the user to the category list or perform other actions
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoryname" className="form-label">Category Name</label>
          <input
            type="text"
            className="form-control"
            id="categoryname"
            name="categoryname"
            value={categoryData.categoryname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={categoryData.description}
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
            value={categoryData.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Category</button>
      </form>
    </div>
  );
}

export default AddCategory;
