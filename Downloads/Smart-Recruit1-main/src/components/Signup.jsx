import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/ie.png';
import axios from 'axios';

export default function Signup() {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmpass: '',
    physicaladdress: '',
  });
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setData({
      fname: '',
      lname: '',
      email: '',
      password: '',
      confirmpass: '',
      physicaladdress: '',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    if (data.fname === '') {
      isValid = false;
      validationErrors.fname = 'First name required';
    }
    if (data.lname === '') {
      isValid = false;
      validationErrors.lname = 'Last name required';
    }
    if (data.email === '') {
      isValid = false;
      validationErrors.email = 'Email required';
    }
    if (data.password === '') {
      isValid = false;
      validationErrors.password = 'Password required';
    }
    if (data.password !== data.confirmpass) {
      isValid = false;
      validationErrors.confirmpass = 'Passwords do not match';
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      const userData = {
        ...data,
        role: 'employee',
        status: 'pending',
        date: new Date().toISOString().split('T')[0],
      };

      axios
        .post('http://localhost:8001/signupuser', userData)
        .then((result) => {
          alert('Success');
          setData({
            fname: '',
            lname: '',
            email: '',
            password: '',
            confirmpass: '',
            physicaladdress: '',
          });

          navigate('/login');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="text-center mb-10">
          <a href="">
            <img src={logo} alt="logo" className="w-40 mx-auto mb-6" />
          </a>
          <h4 className="text-2xl font-bold text-green-600 shadow-md shadow-black pb-4">
            Signup Form
          </h4>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                First name
              </label>
              <input
                name="fname"
                type="text"
                value={data.fname}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="First name"
              />
              {errors.fname && (
                <p className="text-red-500 text-xs mt-1">{errors.fname}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                Last name
              </label>
              <input
                name="lname"
                type="text"
                value={data.lname}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Last name"
              />
              {errors.lname && (
                <p className="text-red-500 text-xs mt-1">{errors.lname}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                Email
              </label>
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                Password
              </label>
              <input
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                Confirm password
              </label>
              <input
                name="confirmpass"
                type="password"
                value={data.confirmpass}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Confirm password"
              />
              {errors.confirmpass && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmpass}
                </p>
              )}
            </div>

            <div>
              <label className="text-gray-700 text-sm font-semibold mb-2 block">
                Physical Address
              </label>
              <input
                name="physicaladdress"
                type="text"
                value={data.physicaladdress}
                onChange={handleChange}
                className="bg-gray-50 w-full text-gray-800 text-sm px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Physical address"
              />
              {errors.physicaladdress && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.physicaladdress}
                </p>
              )}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="py-3 px-8 text-white text-sm font-semibold bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
