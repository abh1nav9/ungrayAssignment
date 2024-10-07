import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { HiOutlineHome, HiOutlineChartBar, HiOutlineCog, HiOutlineUserGroup, HiOutlineShoppingCart } from 'react-icons/hi';

const SideBar = () => {
  return (
    <div className="relative flex flex-col max-h-screen h-full w-64 bg-[#e5e7eb] shadow-lg overflow-hidden">
      
      <div className="flex items-center p-4 border-b border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800">Salesway</h1>
      </div>

      <nav className="mt-6 flex-1">
        <div className="flex flex-col space-y-2">
          <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase">Main Menu</h2>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 transform hover:scale-105">
            <HiOutlineHome className="h-5 w-5 mr-2" />
            Dashboard
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 transform hover:scale-105">
            <HiOutlineChartBar className="h-5 w-5 mr-2" />
            Reports
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 transform hover:scale-105">
            <HiOutlineCog className="h-5 w-5 mr-2" />
            Settings
          </a>
        </div>

        <div className="flex flex-col space-y-2 mt-6">
          <h2 className="px-4 text-xs font-semibold text-gray-500 uppercase">Management</h2>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 transform hover:scale-105">
            <HiOutlineUserGroup className="h-5 w-5 mr-2" />
            Users
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md transition duration-200 transform hover:scale-105">
            <HiOutlineShoppingCart className="h-5 w-5 mr-2" />
            Products
          </a>
        </div>
      </nav>

      <div className="absolute inset-x-0 bottom-0 w-full flex items-center p-4 border-t border-gray-200">
        <FaUserCircle className="h-10 w-10 text-gray-600" />
        <div className="ml-2 overflow-hidden">
          <p className="text-sm font-semibold text-gray-800 truncate">Abhinav Gautam</p>
          <p className="text-xs text-gray-500 truncate">Software Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
