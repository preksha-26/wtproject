import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ResumeBuilder from './pages/ResumeBuilder';
import Login from './pages/Login';
import Templates from './pages/Templates';

function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ background: '#4361ee', padding: '1rem', color: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ margin: 0 }}>ResumeBuilder</h1>
            <div>
              <a href="/" style={{ color: 'white', margin: '0 1rem' }}>Home</a>
              <a href="/builder" style={{ color: 'white', margin: '0 1rem' }}>Builder</a>
              <a href="/templates" style={{ color: 'white', margin: '0 1rem' }}>Templates</a>
              <a href="/login" style={{ color: 'white', margin: '0 1rem' }}>Login</a>
            </div>
          </div>
        </nav>
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;