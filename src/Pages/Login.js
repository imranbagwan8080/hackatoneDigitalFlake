import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  //const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post('http://localhost:5000/hackton/user/login', values);

      if (response.status === 200) {
        const token = response.data.token; 

        // Set the token in session storage
        sessionStorage.setItem('jwtToken', token);
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2><b>digital</b>flake</h2>
        <h4>welcome to Digitalflake Admin</h4>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={handleInput}
              className='form-control rounded-0'
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='Password'><strong>Password</strong></label>
            <input
              type='password'
              placeholder='Enter password'
              name='password'
              onChange={handleInput}
              className='form-control rounded-0'
            />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'><strong>Login</strong></button>
          <p>You agree to our terms and policies</p>
          {/* goto singup page */}
        </form>
      </div>
    </div>
  );
}

export default Login;
