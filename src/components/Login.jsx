import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ielogo from '../assets/ie.png';
import ielogoo from '../assets/ielogoo.jpg';
import { AuthContext } from '../utils/AuthContext';

const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [isValid, setValid] = useState(true);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let validationErrors = {};

    // Validate email
    if (Data.email === '') {
      isValid = false;
      validationErrors.email = 'Email required';
    }

    // Validate password
    if (Data.password === '') {
      isValid = false;
      validationErrors.password = 'Password required';
    } else if (Data.password.length < 2) {
      isValid = false;
      validationErrors.password = 'Minimum length is 2';
    }

    setErrors(validationErrors);
    setValid(isValid);

    if (isValid) {
      axios
        .get('http://localhost:8001/signupuser')
        .then((result) => {
          let loginSuccessful = false;
          let userId = null;
          let userRole = null;

          result.data.forEach((user) => {
            if (user.email === Data.email) {
              if (user.password === Data.password) {
                alert('Login successfully');
                loginSuccessful = true;
                userId = user.id;
                userRole = user.role;
              } else {
                isValid = false;
                validationErrors.password = 'Wrong password';
              }
            }
          });

          if (!loginSuccessful) {
            if (Data.email !== '') {
              validationErrors.email = 'Wrong email address';
            }
            setErrors(validationErrors);
            setValid(isValid);
          } else {
            setAuth({
              isAuthenticated: true,
              userRole,
              userId,
            });

            // Navigate to the appropriate home page and pass the userId in state
            switch (userRole) {
              case 'teamlead':
                navigate('/teamleadhome', { state: { userId } });
                break;
              case 'manager':
                navigate('/managerhome', { state: { userId } });
                break;
              case 'employee':
                navigate('/employeehome', { state: { userId } });
                break;
              case 'hr':
                navigate('/overview', { state: { userId } });
                break;
              default:
                navigate('/', { state: { userId } });
                break;
            }
          }
        })
        .catch((err) => console.error('Error fetching user data:', err));
    }
  };

  // Function to toggle password visibility
  const handleShowPasswordToggle = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <section
      className="bg-gradient-to-r h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${ielogoo})` }}
    >
      <div className="md:w-1/3 max-w-sm">
        <img className="w-2/3" src={ielogo} alt="Sample image" />
      </div>
      <div className="md:w-1/3 max-w-sm bg-white rounded-lg shadow-lg p-5">
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Log in page
          </p>
        </div>
        <div className="text-danger">
          {!isValid && (
            <span>
              {errors.email} {errors.password}
            </span>
          )}
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col mb-4">
              <label className="text-green-600 font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full bg-transparent text-black border-b border-green-600 bg-white rounded px-4 py-2 outline-none focus:outline-none"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(70, 130, 180, 0.7)',
                }}
                onChange={(event) =>
                  setData({ ...Data, email: event.target.value })
                }
              />
            </div>
            <div className="relative mb-4">
              <label className="text-green-600 font-semibold mb-1" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Password"
                className="w-full bg-transparent text-black border-b border-green-600 bg-white rounded px-4 py-2 outline-none focus:outline-none"
                style={{
                  boxShadow: '0 4px 6px -1px rgba(70, 130, 180, 0.7)',
                }}
                onChange={(e) =>
                  setData({ ...Data, password: e.target.value })
                }
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={handleShowPasswordToggle}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 15.172a4.992 4.992 0 0 0 0-6.344m-6.344 0a4.992 4.992 0 0 0 0 6.344m6.344 0L21 12m-9-9L3 12l9 9M12 3l9 9-9 9"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8.25a3.75 3.75 0 1 1 0 7.5m0-7.5a8.25 8.25 0 0 0-8.25 8.25M3 12a9 9 0 0 1 9-9m9 9a9 9 0 0 1-9 9M12 15.75a3.75 3.75 0 0 0 0-7.5m0 7.5a8.25 8.25 0 0 1-8.25-8.25m16.5 8.25A8.25 8.25 0 0 0 21 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <div className="mt-4 flex justify-between font-semibold text-sm">
              <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
              </label>
              <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div className="text-center md:text-left">
              <button
                className="mt-4 bg-green-600 hover:bg-green-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
