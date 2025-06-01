import React from 'react';
import UrlForm from '../components/UrlForm';

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="w-full max-w-xl relative z-10 transform transition-all duration-300 hover:scale-[1.02]">
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-600/50 to-slate-800/50 rounded-2xl blur opacity-30 group-hover:opacity-40 transition duration-300"></div>
          
          {/* Content container */}
          <div className="relative bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border border-slate-200/50">
            <div className="text-center mb-8 space-y-4">
              <h1 className="text-4xl font-bold bg-gradient-to-br from-slate-700 to-slate-900 bg-clip-text text-transparent">
                Shorten Your URLs
              </h1>
              <p className="text-slate-600 max-w-md mx-auto leading-relaxed">
                Transform long URLs into short, memorable links. Perfect for sharing on social media, emails, or anywhere else.
              </p>
            </div>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['Fast & Reliable', 'Secure Links', 'Easy to Share'].map((feature, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-slate-100/80 rounded-full text-sm font-medium text-slate-700 flex items-center space-x-2 group hover:bg-slate-200/80 transition-all duration-200"
                >
                  <span className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-slate-500 transition-colors"></span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* URL Form */}
            <UrlForm />

            {/* Additional info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-500">
                Looking for more features? {' '}
                <a href="/auth" className="text-slate-700 font-medium hover:text-slate-900 transition-colors duration-200 border-b-2 border-slate-200 hover:border-slate-700">
                  Create an account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;