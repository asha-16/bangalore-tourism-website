export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* LEFT: ABOUT */}
        <div className="footer-col">
          <h4>About "Explore Bangalore"</h4>
          <p>
            A curated travel guide to Bangalore covering food, culture,
            transportation, and local tips — designed to help visitors
            experience the city with confidence.
          </p>
        </div>

        {/* CENTER: QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#how-to-reach">How to Reach</a></li>
            <li><a href="#attractions">Attractions</a></li>
            <li><a href="#food">Food & Cuisine</a></li>
            <li><a href="#travel-tips">Travel Tips</a></li>
          </ul>
        </div>

        {/* RIGHT: SOURCES */}
        {/* <div className="footer-col">
          <h4>Sources & References</h4>
          <ul>
            <li>BMRCL (Namma Metro)</li>
            <li>Govt. of Karnataka Tourism</li>
            <li>Local culinary guides & reviews</li>
          </ul>
        </div> */}

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Bangalore Travel Guide.  
          Information curated for travelers. Verify timings & prices locally.
        </p>
      </div>
    </footer>
  );
}
