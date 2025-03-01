import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Back to Top Button */}
      <div className="bg-slate-700 text-center py-3">
        <a href="#top" className="text-white hover:underline">
          Back to Top
        </a>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Get to know Us */}
        <div>
          <h3 className="font-bold mb-3">Get to know Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:underline">About Us</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Careers</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Press Releases</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Science</a></li>
          </ul>
        </div>

        {/* Connect with Us */}
        <div>
          <h3 className="font-bold mb-3">Connect with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:underline">Facebook</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Twitter</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Instagram</a></li>
          </ul>
        </div>

        {/* Make Money with Us */}
        <div>
          <h3 className="font-bold mb-3">Make Money with Us</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:underline">Sell on Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Sell under Amazon Accelerator</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Protect and Build Your Brand</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Global Selling</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Supply to Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Become an Affiliate</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Fulfilment by Amazon</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Advertise Your Products</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon Pay on Merchants</a></li>
          </ul>
        </div>

        {/* Let Us Help You */}
        <div>
          <h3 className="font-bold mb-3">Let Us Help You</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:underline">Your Account</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Returns Center</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Recalls and Products Safety Alerts</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">100% Purchase Protection</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Amazon App Download</a></li>
            <li><a href="#" className="text-gray-300 hover:underline">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer - Logo, Language, Country */}
      <div className="border-t border-slate-600 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
          <div className="mr-6">
            <img src="/src/assets/images/Amazon.png" alt="Amazon Logo" className="h-11 w-20" />
          </div>
          
          <div className="flex space-x-3">
            <button className="border border-gray-500 rounded px-3 py-1 text-sm flex items-center space-x-2">
              <span>🌐</span>
              <span>English</span>
              <span>▼</span>
            </button>
            
            <button className="border border-gray-500 rounded px-3 py-1 text-sm flex items-center space-x-2">
              <img src='/src/assets/images/India.png' alt='IN' className='size-3.5'/>
              <span>India</span>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">AbeBooks</h4>
            <p className="text-gray-400 text-xs">Books, art</p>
            <p className="text-gray-400 text-xs">& collectibles</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Amazon Web Services</h4>
            <p className="text-gray-400 text-xs">Scalable Cloud</p>
            <p className="text-gray-400 text-xs">Computing Services</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Audible</h4>
            <p className="text-gray-400 text-xs">Download</p>
            <p className="text-gray-400 text-xs">Audio Books</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">IMDb</h4>
            <p className="text-gray-400 text-xs">Movies, TV</p>
            <p className="text-gray-400 text-xs">& Celebrities</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Shop bop</h4>
            <p className="text-gray-400 text-xs">Designer</p>
            <p className="text-gray-400 text-xs">Fashion Brands</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Amazon Business</h4>
            <p className="text-gray-400 text-xs">Everything For</p>
            <p className="text-gray-400 text-xs">Your Business</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Prime Now</h4>
            <p className="text-gray-400 text-xs">2-Hour Delivery</p>
            <p className="text-gray-400 text-xs">on Everyday Items</p>
          </div>

          <div className="text-sm">
            <h4 className="text-white font-semibold mb-2">Amazon Prime Music</h4>
            <p className="text-gray-400 text-xs">100 million sings, ad free</p>
            <p className="text-gray-400 text-xs">Over 15 million podcast episodes</p>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="bg-slate-900 pt-2 pb-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-gray-400">
          <div className="flex justify-center space-x-4 mb-2">
            <a href="#" className="hover:underline">Conditions of Use & Sale</a>
            <a href="#" className="hover:underline">Privacy Notice</a>
            <a href="#" className="hover:underline">Interest-Based Ads</a>
          </div>
          <p>1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;