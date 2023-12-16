import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white text-sm lg:text-base w-full">
      <div className="w-full max-w-full mx-auto py-60 overflow-hidden">
        {/* Address and contact info */}
        <div className="hi">
          
        </div>
        {/* Navigation links */}
        <div className="flex justify-center space-x-4 mb-40">
          <a href="#ho" className="hover:text-gray-300">HOME</a>
          <a href="#me" className="hover:text-gray-300">MENU</a>
         
        </div>
        {/* Copyright */}
        <div className="text-center">
          <p>&copy; Pizza Hub 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
