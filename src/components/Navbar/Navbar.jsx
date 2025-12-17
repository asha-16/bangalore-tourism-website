import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [showLang, setShowLang] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <a href="#home" className="nav-logo">Explore Bangalore</a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#how-to-reach">How to Reach</a></li>
          <li><a href="#attractions">Attractions</a></li>
          <li><a href="#food">Food & Cuisine</a></li>
          <li><a href="#travel-tips">Travel tips</a></li>
        </ul>

        {/* Actions */}
        <div className="nav-actions">
          <button className="lang-btn" onClick={() => setShowLang(!showLang)}>EN</button>
          <button className="auth-btn" onClick={() => setShowLogin(true)}>Login</button>

          {/* Hamburger */}
          <button className="hamburger-btn" onClick={() => setShowMobileMenu(true)}>☰</button>
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

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${showMobileMenu ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setShowMobileMenu(false)}>×</button>
        <ul>
          <li><a href="#home" onClick={() => setShowMobileMenu(false)}>Home</a></li>
          <li><a href="#how-to-reach" onClick={() => setShowMobileMenu(false)}>How to Reach</a></li>
          <li><a href="#attractions" onClick={() => setShowMobileMenu(false)}>Attractions</a></li>
          <li><a href="#food" onClick={() => setShowMobileMenu(false)}>Food & Cuisine</a></li>
          <li><a href="#travel-tips" onClick={() => setShowMobileMenu(false)}>Travel tips</a></li>
        </ul>
      </div>

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
