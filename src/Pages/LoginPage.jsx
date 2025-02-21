import 'react';
import Logo from '../components/AuthAmzLogo';
import AuthFooter from '../components/AuthFooter';
import '../styles/index.css';
import '../styles/auth.css';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
        <Logo />
        <LoginForm />
        <AuthFooter />
        </div>
    );
};
export default LoginPage;