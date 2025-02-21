import 'react';
import triangleGray from '../assets/images/Polygon 3.png';

const LoginForm = () => {
  return (
    <>
    <div className="max-w-1/4 mx-auto p-6 bg-white rounded-lg border border-gray-300 plex-font mb-4">
      <h1 className="text-3xl font-semibold mb-6 ">Sign in</h1>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-2 font-semibold">Email or mobile phone number</label>
          <input 
            type="text"
            className="w-full border border-gray-300 px-3 py-2 auth-text-field"
          />
        </div>

        <button 
            type="submit"
          className="w-full py-2 auth-button text-black"
        >
        Continue
        </button>

        <div className="text-sm">
          <span>By continuing, you agree to Amazon&apos;s </span>
          <a href="#" className=" underline text-blue inika-font">Conditions of Use</a>
          <span> and </span>
          <a href="#" className=" underline text-blue inika-font">Privacy Notice</a>
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

    <div className="flex items-center mb-4 w-1/4">
        <div className="w-35 h-px bg-gray-300"></div>
        <span className="px-2 text-xs text-gray-400 plex-font">New to Amazon?</span>
        <div className="w-35 h-px bg-gray-300"></div>
    </div>


    <button className='w-1/4 py-1 plex-font border border-gray-400 rounded-md text-black text-sm mb-8 hover:bg-gray-100'>
        Create your Amazon account
    </button>

    </>
  );
};

export default LoginForm;