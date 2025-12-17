export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-col">
          <h4>About Explore Bangalore</h4>
          <p>
            A curated travel guide to Bangalore covering food, culture,
            transportation, and local tips — designed to help visitors
            explore the city with confidence.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#how-to-reach">How to Reach</a></li>
            <li><a href="#attractions">Attractions</a></li>
            <li><a href="#food">Food & Cuisine</a></li>
            <li><a href="#travel-tips">Travel Tips</a></li>
          </ul>
        </div>

        <div className="footer-col">
        <h4>Connect</h4>
        <div className="footer-socials">
          <a href="https://github.com/asha-16" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/ashahp16/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:ashahp.work@gmail.com">Email</a>
        </div>
      </div>


      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Explore Bangalore ·  
          Information curated for travelers. Verify details locally.
        </p>
      </div>

      <button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑ Back to top
      </button>

    </footer>
  );
}
