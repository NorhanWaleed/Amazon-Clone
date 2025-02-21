import React from 'react';
import triangle from '../assets/images/Polygon 2.png';
import divider from '../assets/images/divider.png';

const SignupForm = () => {
  return (
    <div className="sm:max-w-1/2 md:max-w-1/3 lg:max-w-1/4 mx-auto p-6 bg-white rounded-lg border border-gray-300 plex-font mb-10">
      <h1 className="text-3xl font-semibold mb-6">Create Account</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-2 font-semibold">Your name</label>
          <input 
            type="text"
            className="w-full border border-gray-300 px-3 py-2 auth-text-field"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-semibold">Mobile number</label>
          <input 
            type="tel"
            className="w-full border border-gray-300 px-3 py-2 auth-text-field"
          />
        </div>

        <div>
          <label className="block text-sm mb-2 font-semibold">Password</label>
          <input 
            type="password"
            className="w-full border border-gray-300 px-3 py-2 auth-text-field"
          />
        </div>

        <button 
          type="submit"
          className="w-full py-2 auth-button text-black"
        >
          Verify mobile number
        </button>

        <div className="border border-gray-300"></div>

        <div className="mt-6">
          <p className="font-semibold">Buying for work?</p>
          <a href="#" className="text-blue inika-font hover:underline text-sm">
            Create a free business account
          </a>
        </div>

        <img src={divider} alt="Divider" className="w-full my-4 h-1" />

        <div className="text-sm flex flex-col sm:flex-row items-center font-inika">
          <span>Already have an account?</span>
          <a href="/signin" className="text-blue hover:underline mr-1 ml-2.5">
            Sign in
          </a>
          <img src={triangle} className="size-1.5" alt="Triangle"/>
        </div>

        <div className="text-sm">
          <span>
            By creating an account or logging in, you agree to Amazon&apos;s{" "}
          </span>
          <a href="#" className="underline text-blue inika-font">
            Conditions of Use
          </a>
          <span> and </span>
          <a href="#" className="underline text-blue inika-font">
            Privacy Notice
          </a>
          <span>.</span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
