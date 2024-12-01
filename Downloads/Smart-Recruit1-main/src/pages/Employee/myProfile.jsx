import React, { useState, useEffect } from 'react';
import NavbarE from './navbarE';
import Footer from '../../components/Footer';
import pp from '../../assets/profile-pictures/user3.jpg';
import { FaPen } from 'react-icons/fa';
// import bgimg from "../../assets/bgImg/bgimg2.jpg";
import axios from 'axios'; // Import axios
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { MdOutlinePendingActions } from "react-icons/md";


export default function MyProfile() {
  const location = useLocation();
  const {userId} = useParams();
  console.log("user id ",userId);


  const [user, setUser] = useState({
    id: '',
    fname: '',
    lname: '',
    phoneno: '',
    email: '',
    password: '',
    physicaladdress: '',
  });
  const [isEditable, setIsEditable] = useState(false);

  // Load user data on component mount
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:8001/signupuser/${userId}`) // Fetch user data from backend
        .then(res => {
          setUser(res.data);
        })
        .catch(err => console.error(err));
    }
  }, [userId]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8001/signupuser/${userId}`, user) // Update user data on backend
      .then(res => {
        alert('User data updated successfully');
        setIsEditable(false);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center"
    >
      <NavbarE />

      <div className="flex-grow flex">
        {/* Left Section - Profile Card */}
        <div className="w-full md:w-1/3 p-6 flex flex-col items-center">
          <div className="bg-white shadow-md rounded-lg p-6 w-full">
            <img
              src={pp}
              alt="User Profile"
              className="w-24 h-24 rounded-full mx-auto mb-6"
            />
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {user.fname} {user.lname}
            </h2>
            <p className="text-gray-700">{user.email}</p>

            <div className='flex items-center '>
              <h1 className='font-bold pr-3'>Status:-</h1>
              <h2 className='pr-3 '>Pending</h2>
            <MdOutlinePendingActions />
            </div>

          </div>
        </div>

        {/* Right Section - Form or Essay */}
        <div className="w-full md:w-2/3 p-6">
          <div className="bg-white shadow-md rounded-lg p-8 relative">
            {/* Pen Icon Button */}
            <button
              onClick={() => setIsEditable(!isEditable)}
              className="absolute top-4 right-4 text-blue-600 hover:text-blue-700 focus:outline-none"
              aria-label="Edit Form"
            >
              <FaPen size={20} />
            </button>

            {isEditable ? (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="fname" className="block text-gray-700 font-bold mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    value={user.fname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="lname" className="block text-gray-700 font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    value={user.lname}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="phoneno" className="block text-gray-700 font-bold mb-2">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phoneno"
                    name="phoneno"
                    value={user.phoneno}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="physicaladdress" className="block text-gray-700 font-bold mb-2">
                    Physical Address
                  </label>
                  <input
                    type="text"
                    id="physicaladdress"
                    name="physicaladdress"
                    value={user.physicaladdress}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">
                  Profile
                </h3>
                <p className="text-gray-700">
                  {user.fname} {user.lname} <br />
                  {user.physicaladdress} <br />
                  {user.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
