import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';

const LayoutHr = () => {
    return (
      <div className='flex h-screen bg-white text-gray-100 overflow-hidden'>
        {/* BG */}
        {/* <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
          <div className='absolute inset-0 backdrop-blur-sm' />
        </div> */}
  
        <Sidebar />
        <Outlet /> {/* This is where nested routes will render */}
      </div>
    );
  };
  
  export default LayoutHr;