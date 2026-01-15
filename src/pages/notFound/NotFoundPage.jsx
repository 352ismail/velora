import React from 'react';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        {/* Main 404 Content */}
        <div className="not-found-content">
          {/* Animated 404 Number */}
          <div className="error-number-container">
            <h1 className="error-number">404</h1>
            <div className="shopping-bag-icon">🛍️</div>
          </div>

          {/* Error Message */}
          <h2 className="error-title">Oops! Page Not Found</h2>
          <p className="error-message">
            The page you're looking for seems to have wandered off. Let's get you back to shopping!
          </p>

          {/* Action Buttons Grid */}
          <div className="action-buttons">
            {/* Home Button */}
            <button onClick={handleGoHome} className="action-btn primary-btn">
              <span className="btn-icon">🏠</span>
              <span className="btn-text">Go Home</span>
            </button>

            {/* Search Button */}
            <button className="action-btn secondary-btn">
              <span className="btn-icon">🔍</span>
              <span className="btn-text">Search</span>
            </button>

            {/* Back Button */}
            <button onClick={handleGoBack} className="action-btn secondary-btn">
              <span className="btn-icon">←</span>
              <span className="btn-text">Go Back</span>
            </button>
          </div>
        </div>

        {/* Footer Help Text */}
        <div className="help-text">
          <p>Need help? Contact our support team at <span className="support-email">support@velora.com</span></p>
        </div>
      </div>
    </div>
  );
}