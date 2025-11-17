import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Import pages (only the ones we're keeping)
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Login from './pages/Login';
import Register from './pages/Register';
import Templates from './pages/Templates';
import MyResumes from './pages/MyResumes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start and on route changes
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('token');
      const user = localStorage.getItem('user');
      
      if (token && user) {
        setIsLoggedIn(true);
        console.log('✅ User is logged in:', JSON.parse(user));
      } else {
        setIsLoggedIn(false);
        console.log('❌ User is not logged in');
      }
      setLoading(false);
    };

    checkAuth();

    // Listen for storage changes (when login happens in another component)
    window.addEventListener('storage', checkAuth);
    
    // Check auth every time the route changes
    const interval = setInterval(checkAuth, 1000);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      clearInterval(interval);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    window.location.href = '/login';
  };

  // Show loading spinner while checking auth
  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <Router>
      <div className="App">
        {/* Only show navigation if user is logged in */}
        {isLoggedIn && (
          <nav style={{ background: '#4361ee', padding: '1rem', color: 'white' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
              <h1 style={{ margin: 0 }}>ResumeBuilder</h1>
              <div>
                <a href="/home" style={{ color: 'white', margin: '0 1rem' }}>Home</a>
                <a href="/builder" style={{ color: 'white', margin: '0 1rem' }}>Builder</a>
                <a href="/templates" style={{ color: 'white', margin: '0 1rem' }}>Templates</a>
                <a href="/my-resumes" style={{ color: 'white', margin: '0 1rem' }}>My Resumes</a>
                <button 
                  onClick={handleLogout}
                  style={{ 
                    background: 'transparent', 
                    color: 'white', 
                    border: '1px solid white', 
                    borderRadius: '5px',
                    padding: '0.25rem 0.5rem',
                    marginLeft: '1rem',
                    cursor: 'pointer'
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        )}
        
        <main>
          <Routes>
            {/* Redirect root path to login or home based on auth status */}
            <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} replace />} />
            
            {/* Public routes */}
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            
            {/* Protected routes - only accessible when logged in */}
            <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />} />
            <Route path="/builder" element={isLoggedIn ? <ResumeBuilder /> : <Navigate to="/login" replace />} />
            <Route path="/templates" element={isLoggedIn ? <Templates /> : <Navigate to="/login" replace />} />
            <Route path="/my-resumes" element={isLoggedIn ? <MyResumes /> : <Navigate to="/login" replace />} />
            
            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;