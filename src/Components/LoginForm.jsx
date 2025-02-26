import React, { useState, useEffect } from 'react';
import triangleGray from '../assets/images/Polygon 3.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, clearError } from '../redux/authSlice';

const LoginForm = () => {
  const [isPasswordFormVisible, setIsPasswordFormVisible] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    setFormError('');
  }, [isPasswordFormVisible]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleContinue = (e) => {
    e.preventDefault();
    if (!identifier) {
      setFormError('Email or phone number is required');
      return;
    }
    setIsPasswordFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      setFormError('Password is required');
      return;
    }
    dispatch(clearError());
    dispatch(loginUser({ identifier, password }))
      .unwrap()
      .then(() => {
        navigate('/');
      })
      .catch((err) => {
        setFormError(err);
      });
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  const handleBack = () => {
    setIsPasswordFormVisible(false);
    setPassword('');
    dispatch(clearError());
  };

  return (
    <div className="flex flex-col items-center w-full px-4">
      <div className="w-full max-w-md mx-auto p-4 sm:p-6 bg-white rounded-lg border border-gray-300 plex-font mb-4">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-6">Sign in</h1>
        
        <form className="space-y-4" onSubmit={isPasswordFormVisible ? handleSubmit : handleContinue}>
          {!isPasswordFormVisible ? (
            <>
              <div>
                <label className="block text-sm mb-2 font-semibold">Email or mobile phone number</label>
                <input 
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 auth-text-field"
                />
                {formError && <p className="text-red-500 mt-1 text-sm">{formError}</p>}
              </div>

              <button 
                type="submit"
                className="w-full py-2 auth-button text-black"
              >
                Continue
              </button>
            </>
          ) : (
            <>
              <div>
                <p className="text-sm mb-2">
                  <span>{identifier}</span>
                  <button 
                    type="button" 
                    onClick={handleBack}
                    className="text-blue ml-2 hover:underline"
                  >
                    Change
                  </button>
                </p>
                <label className="block text-sm mb-2 font-semibold">Password</label>
                <input 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 px-3 py-2 auth-text-field"
                />
                {(formError || error) && <p className="text-red-500 mt-1 text-sm">{formError || error}</p>}
              </div>

              <button 
                type="submit"
                className="w-full py-2 auth-button text-black"
                disabled={loading}
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </>
          )}

          <div className="text-sm">
            <span>By continuing, you agree to Amazon&apos;s </span>
            <a href="#" className="underline text-blue inika-font">Conditions of Use</a>
            <span> and </span>
            <a href="#" className="underline text-blue inika-font">Privacy Notice</a>
            <span>.</span>
          </div>

          <div className="text-xs mt-4 inika-font text-blue hover:underline flex flex-row items-center">
            <img src={triangleGray} alt="help" className="size-2 mr-1"/>
            <span>Need help?</span>
          </div>

          <div className='border border-gray-300'></div>

          <div className="mt-6">
            <p className="font-semibold">Buying for work?</p>
            <a href="#" className="text-blue inika-font hover:underline text-sm">Shop on Amazon Business</a>
          </div>
        </form>
      </div>

      <div className="flex items-center mb-4 w-full max-w-md">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="px-4 text-xs text-gray-400 plex-font">New to Amazon?</span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button 
        onClick={goToSignup} 
        className='w-full max-w-md py-1 plex-font border border-gray-400 rounded-md text-black text-sm mb-8 hover:bg-gray-100'
      >
        Create your Amazon account
      </button>
    </div>
  );
};

export default LoginForm;