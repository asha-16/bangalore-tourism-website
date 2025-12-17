import { useState } from "react";

export default function Navbar() {
  const [showLang, setShowLang] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo">
          Explore Bangalore
        </a>

        {/* Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#how-to-reach">How to Reach</a></li>
          <li><a href="#attractions">Attractions</a></li>
          <li><a href="#food">Food & Cuisine</a></li>
          <li><a href="#travel-tips">Travel tips</a></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="lang-btn"
            onClick={() => setShowLang(!showLang)}
          >
            EN
          </button>

          <button
            className="auth-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        </div>

        {/* Language Dropdown */}
        {showLang && (
          <div className="lang-dropdown">
            <button>English</button>
            <button>हिंदी</button>
            <button>ಕನ್ನಡ</button>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-backdrop" onClick={() => setShowLogin(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Login</h3>
            <p>Authentication will be implemented here.</p>
            <button onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
