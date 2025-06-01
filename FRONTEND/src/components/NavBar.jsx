import React from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slice/authSlice';
import { logoutUser } from '../api/user.api';

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate({ to: '/' });
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="group relative text-2xl font-bold text-white transition-all duration-300 ease-in-out"
            >
              <span className="relative z-10">URL Shortener</span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="relative text-white group px-3 py-2"
                >
                  <span className="relative z-10 font-medium">Dashboard</span>
                  <span className="absolute inset-0 bg-white/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200"></span>
                </Link>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse overflow-hidden"></div>
                    <div className="w-5 h-5 rounded-full overflow-hidden">
                      <img className=' object-cover object-center' src= {user?.user?.avatar} alt="" />
                    </div>
                    <span className="text-slate-300 font-medium">
                      {user?.user?.name || 'User'}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="relative overflow-hidden group bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200"
                  >
                    <span className="relative z-10">Logout</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  </button>
                </div>
              </>
            ) : (
              <Link
                to="/auth"
                className="relative overflow-hidden group bg-white text-slate-800 px-6 py-2 rounded-lg text-sm font-medium shadow-md transition-all duration-200 hover:shadow-lg"
              >
                <span className="relative z-10">Login/Signup</span>
                <span className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;