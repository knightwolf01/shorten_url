import React, { useState } from 'react';
import UrlForm from '../components/UrlForm';
import UserUrl from '../components/UserUrl';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const { user } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Welcome section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent mb-2">
            Welcome, {user?.user?.name || 'User'}
          </h1>
          <p className="text-slate-600">Manage your shortened URLs and create new ones</p>
        </div>

        {/* Main content */}
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-slate-200/50 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            <button
              onClick={() => setActiveTab('create')}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 relative
                ${activeTab === 'create' 
                  ? 'text-slate-800 bg-gradient-to-b from-white to-slate-50' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              Create New URL
              {activeTab === 'create' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-700 to-slate-900"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-all duration-200 relative
                ${activeTab === 'manage' 
                  ? 'text-slate-800 bg-gradient-to-b from-white to-slate-50' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
            >
              Manage URLs
              {activeTab === 'manage' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-slate-700 to-slate-900"></span>
              )}
            </button>
          </div>

          {/* Tab content */}
          <div className="p-6">
            {activeTab === 'create' ? (
              <div className="transition-all duration-300 transform">
                <div className="space-y-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-800">Create New Short URL</h2>
                  <p className="text-slate-600 text-sm">
                    Enter a long URL to create a shortened version that's easy to share.
                  </p>
                </div>
                <UrlForm />
              </div>
            ) : (
              <div className="transition-all duration-300 transform">
                <div className="space-y-4 mb-6">
                  <h2 className="text-xl font-semibold text-slate-800">Your Shortened URLs</h2>
                  <p className="text-slate-600 text-sm">
                    View and manage all your shortened URLs in one place.
                  </p>
                </div>
                <UserUrl />
              </div>
            )}
          </div>
        </div>

        {/* Quick stats or tips */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Pro Tip: Custom slugs make URLs memorable', 'Share links across devices', 'Track click analytics'].map((tip, index) => (
            <div 
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-slate-400 group-hover:bg-slate-600 transition-colors"></div>
                <p className="text-sm text-slate-600 group-hover:text-slate-800 transition-colors">{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;