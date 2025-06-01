import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
    const [login, setLogin] = useState(true);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-slate-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute top-40 right-40 w-72 h-72 bg-slate-300/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-40 w-72 h-72 bg-slate-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative w-full max-w-md z-10">
                {/* Card glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-500 to-slate-700 rounded-2xl blur opacity-20 animate-pulse"></div>
                
                {/* Auth form container */}
                <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl transition-all duration-300">
                    {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
                </div>
            </div>
        </div>
    );
};

export default AuthPage;