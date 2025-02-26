import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signupUser } from '../redux/authSlice';
import { signupSchema } from '../utils/validation';
import triangle from '../assets/images/Polygon 2.png';
import divider from '../assets/images/divider.png';

const SignupForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
    });
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const result = signupSchema.safeParse(formData);
      if (!result.success) {
        const errorObj = {};
        result.error.issues.forEach(issue => {
          errorObj[issue.path[0]] = issue.message;
        });
        setErrors(errorObj);
        return;
      }
  
      dispatch(signupUser(formData))
        .unwrap()
        .then(() => {
          navigate('/');
        })
        .catch((err) => {
          console.error('Signup error:', err);
        });
    };

  return (
    <>
    <div className="w-full min-w-[280px] max-w-md mx-auto p-6 bg-white rounded-lg border border-gray-300 plex-font mb-10">
      <h1 className="text-2xl font-semibold mb-4">Create Account</h1>
      
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-semibold">Your name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold">Mobile number</label>
          <input 
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.phoneNumber && <p className="text-red-500">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold">Password</label>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 px-3 py-2 rounded-md"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button 
          type="submit"
          className="w-full py-2 auth-button text-black"
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Create account'}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </form>

        <div className="border border-gray-300 mt-4.5"></div>

        <div className="mt-3 sm:mt-4 md:mt-6">
          <p className="font-semibold text-xs sm:text-sm">Buying for work?</p>
          <a href="#" className="text-blue inika-font hover:underline text-xs sm:text-sm">
            Create a free business account
          </a>
        </div>

        <img src={divider} alt="Divider" className="w-full my-2 sm:my-3 md:my-4 h-0.5 sm:h-1" />

        <div className="text-xs sm:text-sm flex flex-col sm:flex-row items-center font-inika mb-3">
          <span>Already have an account?</span>
          <a href="/signin" className="text-blue hover:underline mt-1 sm:mt-0 sm:mr-1 sm:ml-2.5">
            Sign in
          </a>
          <img src={triangle} className="size-1 sm:size-1.5 mt-1 sm:mt-0" alt="Triangle"/>
        </div>

        <div className="text-xs sm:text-sm">
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
    </div>
    </>
  );
};

export default SignupForm;