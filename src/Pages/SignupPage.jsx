import "react";
import Logo from "../components/AuthAmzLogo";
import AuthFooter from "../components/AuthFooter";
import "../styles/index.css";
import "../styles/auth.css";
import SignupForm from "../components/SignupForm";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Logo />
      <SignupForm />
      <AuthFooter />
    </div>
  );
};

export default SignupPage;
