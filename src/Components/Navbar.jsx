import React, { useState } from 'react';
import { Menu, Search, ShoppingCart, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/authSlice';

const Navbar = () => {
  const [location, setLocation] = useState('Surat 394210');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleSignOut = () => {
    dispatch(logoutUser());
    navigate('/signin');
  };

  return (
    <div className="w-full lato-font">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col">
        {/* Top Navbar */}
        <div className="bg-gray-900 text-white py-2 px-4 flex items-center">
          {/* Amazon Logo */}
          <Link to="/" className="mr-4 flex-shrink-0">
            <img
              src="/src/assets/images/Amazon.png"
              alt="Amazon Logo"
              className="h-11 w-26 bg-transparent"
            />
          </Link>

          {/* Delivery Location */}
          <div className="flex items-center mr-2 text-sm flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-gray-300 text-xs">
                Delivering to {location}
              </span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <button className="text-white hover:text-yellow-400">
                  Update location
                </button>
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

          {/* Account & Lists */}
          <div
            className="mx-2 lg:mx-4 text-sm relative cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="flex flex-col">
              <span onClick={() => !user && navigate('/signin')}>
                Hello, {user ? user.name : 'sign in'}
              </span>
              <div className="flex items-center">
                <span className="font-bold">Account & Lists</span>
                <span className="ml-1">▼</span>
              </div>
            </div>
            {dropdownOpen && (
              <div className="absolute right-0 bg-white text-black shadow-md py-2 w-48 mt-2">
                <button
                  onClick={handleSignOut}
                  className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                >
                  Sign Out
                </button>
              </div>
            )}
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

        {/* Bottom Navbar */}
        <div className="bg-gray-800 text-white py-2 px-4 flex items-center">
          <button className="mr-4 flex items-center flex-shrink-0">
            <Menu className="h-5 w-5 mr-1" />
            <span>All</span>
          </button>
          <div className="flex space-x-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Amazon mini TV
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Sell
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Best Sellers
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Today&apos;s Deals
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Mobiles
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Customer Service
            </a>
            <div className="flex items-center flex-shrink-0">
              <a href="#" className="hover:text-gray-300">
                Prime
              </a>
              <span className="ml-1">▼</span>
            </div>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Electronics
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Fashion
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              New Releases
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Home & Kitchen
            </a>
            <a href="#" className="hover:text-gray-300 flex-shrink-0">
              Amazon Pay
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navbar - visible on small screens only */}
      <div className="flex md:hidden flex-col">
        {/* Top header with logo and collapse icon */}
        <div className="bg-gray-900 text-white py-2 px-4 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src="/src/assets/images/Amazon.png"
              alt="Amazon Logo"
              className="h-11 w-26 bg-transparent"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        {/* Collapsible mobile menu */}
        {mobileMenuOpen && (
          <div className="bg-gray-900 text-white py-2 px-4 space-y-4">
            {/* Delivery Location */}
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-xs">Delivering to {location}</span>
              <button className="text-white hover:text-yellow-400 ml-2 text-xs">
                Update location
              </button>
            </div>
            {/* Search Bar */}
            <div className="flex items-center">
              <div className="bg-gray-300 rounded-l px-2 py-2 text-black">
                <select className="bg-transparent outline-none text-sm">
                  <option>All</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="w-full py-2 px-4 outline-none text-black border-0 bg-gray-100"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2.5 rounded-r">
                <Search className="h-5 w-5 text-gray-800" />
              </button>
            </div>
            {/* Account & Lists */}
            <div
              className="text-sm relative cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <div className="flex flex-col">
                <span onClick={() => !user && navigate('/signin')}>
                  Hello, {user ? user.name : 'sign in'}
                </span>
                <div className="flex items-center">
                  <span className="font-bold">Account & Lists</span>
                  <span className="ml-1">▼</span>
                </div>
              </div>
              {dropdownOpen && (
                <div className="bg-white text-black shadow-md py-2 w-48 mt-2">
                  <button
                    onClick={handleSignOut}
                    className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
            {/* Returns & Orders */}
            <div className="text-sm">
              <div className="flex flex-col">
                <span>Returns</span>
                <span className="font-bold">& Orders</span>
              </div>
            </div>
            {/* Cart */}
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 mr-1" />
              <span className="font-bold">Cart</span>
            </div>
            {/* Second Navbar Links */}
            <div className="bg-gray-800 text-white py-2 px-2 flex flex-wrap gap-2">
              <button className="flex items-center">
                <Menu className="h-5 w-5 mr-1" />
                <span>All</span>
              </button>
              <a href="#" className="hover:text-gray-300">
                Amazon mini TV
              </a>
              <a href="#" className="hover:text-gray-300">
                Sell
              </a>
              <a href="#" className="hover:text-gray-300">
                Best Sellers
              </a>
              <a href="#" className="hover:text-gray-300">
                Today&apos;s Deals
              </a>
              <a href="#" className="hover:text-gray-300">
                Mobiles
              </a>
              <a href="#" className="hover:text-gray-300">
                Customer Service
              </a>
              <div className="flex items-center">
                <a href="#" className="hover:text-gray-300">
                  Prime
                </a>
                <span className="ml-1">▼</span>
              </div>
              <a href="#" className="hover:text-gray-300">
                Electronics
              </a>
              <a href="#" className="hover:text-gray-300">
                Fashion
              </a>
              <a href="#" className="hover:text-gray-300">
                New Releases
              </a>
              <a href="#" className="hover:text-gray-300">
                Home & Kitchen
              </a>
              <a href="#" className="hover:text-gray-300">
                Amazon Pay
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
