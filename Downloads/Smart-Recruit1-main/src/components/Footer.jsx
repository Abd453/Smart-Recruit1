import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <p className="mb-2">Email: <a href="mailto:info@smartrecruit.com" className="text-green-400 hover:underline">info@smartrecruit.com</a></p>
            <p className="mb-2">Phone: <a href="tel:+251-115-570544" className="text-green-400 hover:underline">+251-115-570544</a></p>
            <p>Haya Hulet, Festival 22 Building, 7th Floor, Addis Ababa</p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2"><a href="#exper" className="text-green-400 hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#wedo" className="text-green-400 hover:underline">Services</a></li>
              <li className="mb-2"><a href="#testi" className="text-green-400 hover:underline">Testimonials</a></li>
              {/* <li><a href="#" className="text-green-400 hover:underline">Privacy Policy</a></li> */}
              
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ienetworksolutions" className="text-green-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://x.com/IE_Networks" className="text-green-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ienetworks/" className="text-green-400 hover:text-white">
                <FaLinkedinIn size={20} />
              </a>
              <a href="https://instagram.com" className="text-green-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-green-600 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} Smart-Recruit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
