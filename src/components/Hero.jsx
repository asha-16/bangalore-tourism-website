import { useEffect, useState } from "react";

const phrases = [
  "Welcome to Bangalore",
  "India’s Silicon Valley",
  "Culture • Tech • Nature",
  "The Garden City of India",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-clean" id="home">
      <div className="hero-text-area">
        <h1 className="hero-title">{phrases[index]}</h1>
        <p className="hero-description">
          Explore Bangalore’s technology hubs, gardens, food culture,
          and vibrant lifestyle — all in one place.
        </p>
        <a href="#attractions"><button className="hero-btn">Explore Bangalore</button></a>
      </div>

     <div className="hero-image-strip">
      <div className="image-track">
        <img src="\hero-image-1.jpg" />
        <img src="\hero-image-2.jpg" />
        <img src="\hero-image-3.jpg" />
        <img src="\hero-image-4.jpg" />
        <img src="\hero-image-5.jpg" />
        <img src="\hero-image-6.jpg" />
        <img src="\hero-image-7.jpg" />
        
        {/* Duplicate for seamless loop */}
        <img src="\hero-image-1.jpg" />
        <img src="\hero-image-2.jpg" />
        <img src="\hero-image-3.jpg" />
        <img src="\hero-image-4.jpg" />
        <img src="\hero-image-5.jpg" />
        <img src="\hero-image-6.jpg" />
        <img src="\hero-image-7.jpg" />
      </div>
    </div>

    </section>
  );
}
