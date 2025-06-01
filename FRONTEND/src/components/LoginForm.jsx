import React, { useState } from 'react';
import { loginUser } from '../api/user.api';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';

const LoginForm = ({ state }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [focusedField, setFocusedField] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth)
    console.log(auth)

    const handleSubmit = async () => {
        setLoading(true);
        setError('');

        try {
            const data = await loginUser(password, email);
            dispatch(login(data.user))
            navigate({to:"/dashboard"})
            setLoading(false);
            console.log("signin success")
        } catch (err) {
            setLoading(false);
            setError(err.message || 'Login failed. Please check your credentials.');
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-8">
            <div className="text-center mb-8 transform transition-all duration-300">
                <h2 className="text-3xl font-bold text-slate-800">Welcome Back</h2>
                <p className="text-slate-500 mt-2 transition-all duration-300">Sign in to your account</p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50/80 border border-red-200 rounded-xl backdrop-blur-sm animate-shake">
                    <div className="flex items-center">
                        <svg className="h-5 w-5 text-red-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-red-600">{error}</span>
                    </div>
                </div>
            )}

            <div className="space-y-6">
                <div className="relative transform transition-all duration-300 ease-in-out">
                    <label 
                        className={`block text-sm font-semibold transition-all duration-200 ${
                            focusedField === 'email' ? 'text-slate-800' : 'text-slate-600'
                        }`} 
                        htmlFor="email"
                    >
                        Email Address
                    </label>
                    <div className="relative mt-1 group">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200 ${
                            focusedField === 'email' ? 'text-slate-800' : 'text-slate-400'
                        }`}>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <input
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl text-slate-700 leading-tight bg-white/50 backdrop-blur-sm transition-all duration-200
                                ${focusedField === 'email' 
                                    ? 'border-slate-400 ring-2 ring-slate-200 shadow-lg' 
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                        />
                    </div>
                </div>

                <div className="relative transform transition-all duration-300 ease-in-out">
                    <label 
                        className={`block text-sm font-semibold transition-all duration-200 ${
                            focusedField === 'password' ? 'text-slate-800' : 'text-slate-600'
                        }`} 
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative mt-1">
                        <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-colors duration-200 ${
                            focusedField === 'password' ? 'text-slate-800' : 'text-slate-400'
                        }`}>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            className={`w-full pl-10 pr-4 py-3 border rounded-xl text-slate-700 leading-tight bg-white/50 backdrop-blur-sm transition-all duration-200
                                ${focusedField === 'password' 
                                    ? 'border-slate-400 ring-2 ring-slate-200 shadow-lg' 
                                    : 'border-slate-200 hover:border-slate-300'
                                }`}
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setFocusedField('password')}
                            onBlur={() => setFocusedField(null)}
                            required
                        />
                    </div>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`relative w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ease-in-out overflow-hidden
                        ${loading 
                            ? 'bg-slate-400 cursor-not-allowed' 
                            : 'bg-slate-800 hover:bg-slate-700 active:bg-slate-900 transform hover:-translate-y-0.5 active:translate-y-0'
                        } text-white shadow-lg hover:shadow-xl`}
                >
                    {loading ? (
                        <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span className="animate-pulse">Signing in...</span>
                        </div>
                    ) : (
                        'Sign In'
                    )}
                </button>

                <div className="text-center transform transition-all duration-300">
                    <p className="text-slate-600">
                        Don't have an account? {' '}
                        <button 
                            onClick={() => state(false)} 
                            className="font-semibold text-slate-800 hover:text-slate-900 transition-colors duration-200 relative group"
                        >
                            Create Account
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;