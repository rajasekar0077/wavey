import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  if (!isAuthenticated) {
    return (
      <div className="home-container">
        <div className="welcome-card">
          <h1>Welcome to Wavey</h1>
          <p>A modern authentication application</p>
          <div className="button-group">
            <button
              onClick={() => navigate('/signin')}
              className="btn btn-primary"
            >
              Sign In
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="btn btn-secondary"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="dashboard">
        <div className="dashboard-header">
          <h1>Welcome, {user?.name}! 👋</h1>
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>

        <div className="dashboard-content">
          <div className="info-card">
            <h2>Your Profile</h2>
            <p>
              <strong>Name:</strong> {user?.name}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
          </div>

          <div className="info-card">
            <h2>Getting Started</h2>
            <p>
              You are now signed in! This is your dashboard where you can manage
              your account and explore the application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
