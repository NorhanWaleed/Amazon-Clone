import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, MapPin } from 'lucide-react';

const Navbar = () => {
  const [location, setLocation] = useState('Surat 394210');

  return (
    <div className="flex flex-col w-full lato-font">
   
      <div className="bg-gray-900 text-white py-2 px-4 flex items-center">
        {/* Amazon Logo */}
        <a href="#" className="mr-4 flex-shrink-0 ">
          <img 
            src="/src/assets/images/Amazon.png" 
            alt="Amazon Logo" 
            className="h-10 w-28 bg-transparent" 
          />
        </a>
        
        {/* Delivery Location */}
        <div className="flex items-center mr-2 text-sm flex-shrink-0">
          <div className="flex flex-col">
            <span className="text-gray-300 text-xs">Delivering to {location}</span>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <button className="text-white hover:text-yellow-400">Update location</button>
            </div>
          </div>
        </div>
        
        {/* Search Bar */}
        <div className="flex flex-1 min-w-0 items-center mx-2">
          <div className="bg-gray-300 rounded-l px-2 py-2 text-black flex-shrink-0">
            <select className="bg-transparent outline-none text-sm">
              <option>All</option>
            </select>
          </div>
          <input 
            type="text" 
            placeholder="Search Amazon.in" 
            className="w-full py-2 px-4 outline-none text-black border-0 bg-gray-100"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2.5 rounded-r flex-shrink-0">
            <Search className="h-5 w-5 text-gray-800" />
          </button>
        </div>
        
        {/* Country Flag/Language */}
        <div className="mx-2 lg:mx-4 flex items-center flex-shrink-0">
          <img 
            src="src/assets/images/India.png" 
            alt="India Flag" 
            className="mr-1 h-4"
          />
          <span>EN</span>
          <span className="ml-1">▼</span>
        </div>
        
        {/* Account & Lists */}
        <div className="mx-2 lg:mx-4 text-sm hidden sm:block flex-shrink-0">
          <div className="flex flex-col">
            <span>Hello, sign in</span>
            <div className="flex items-center">
              <span className="font-bold">Account &Lists</span>
              <span className="ml-1">▼</span>
            </div>
          </div>
        </div>
        
        {/* Returns & Orders */}
        <div className="mx-2 lg:mx-4 text-sm hidden sm:block flex-shrink-0">
          <div className="flex flex-col">
            <span>Returns</span>
            <span className="font-bold">& Orders</span>
          </div>
        </div>
        
        {/* Cart */}
        <div className="flex items-center flex-shrink-0">
          <ShoppingCart className="h-6 w-6 mr-1" />
          <span className="font-bold">Cart</span>
        </div>
      </div>

      {/* First navbar (with menu and links) - Should come second */}
      <div className="bg-gray-800 text-white py-2 px-4 flex items-center">
        <button className="mr-4 flex items-center flex-shrink-0">
          <Menu className="h-5 w-5 mr-1" />
          <span>All</span>
        </button>
        <div className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Amazon mini TV</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Sell</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Best Sellers</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Today&apos;s Deals</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Mobiles</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Customer Service</a>
          <div className="flex items-center flex-shrink-0">
            <a href="#" className="hover:text-gray-300">Prime</a>
            <span className="ml-1">▼</span>
          </div>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Electronics</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Fashion</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">New Releases</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Home & Kitchen</a>
          <a href="#" className="hover:text-gray-300 flex-shrink-0">Amazon Pay</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;