import React, { useState } from 'react';
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import MinorComp from "./pages/MinorComp";
import SideBar from "./pages/SideBar";
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="h-screen">
      {isLoggedIn ? (
        <div className="grid grid-cols-12 h-full">
          <div className="col-span-2 bg-[#e5e7eb] p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <SideBar />
          </div>
          <div className="col-span-7 bg-white p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <Dashboard />
          </div>
          <div className="col-span-3 bg-gray-100 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <MinorComp />
          </div>
        </div>
      ) : (
        <Auth onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
