import { useEffect, useState } from "react";
import "./Hero.css";

const phrases = [
  "Welcome to Bangalore",
  "India’s Silicon Valley",
  "Culture • Tech • Nature",
  "The Garden City of India",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((prev) => (prev + 1) % phrases.length), 3000);
    return () => clearInterval(id);
  }, []);

  const heroImages = Array.from({ length: 7 }, (_, i) => `images/hero/hero-image-${i + 1}.jpg`);

  return (
    <section className="hero-clean" id="home">
      {/* Text Section */}
      <div className="hero-text-area">
        <h1 className="hero-title">{phrases[index]}</h1>
        <p className="hero-description">
          Explore Bangalore’s technology hubs, gardens, food culture,
          and vibrant lifestyle — all in one place.
        </p>
        <a href="#attractions">
          <button className="hero-btn">Explore Bangalore</button>
        </a>
      </div>

      {/* Image Strip */}
      <div className="hero-image-strip">
        <div className="image-track">
          {heroImages.concat(heroImages).map((src, idx) => (
            <img key={idx} src={src} alt={`Hero ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
