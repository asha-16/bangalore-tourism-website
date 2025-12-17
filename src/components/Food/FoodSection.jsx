import { useState } from "react";
import foodItems from "../../data/food.js";

export default function FoodSection() {
  const [activeFood, setActiveFood] = useState(foodItems[0]);

  return (
    <section id="food" className="food-featured-section">
      {/* HEADER */}
      <div className="section-header">
        <h2>Food & Cuisine</h2>
        <p>Experience Bangalore through its flavors</p>
      </div>

      {/* FEATURED LAYOUT */}
      <div className="featured-food">

        {/* LEFT: AUTO-SCROLLING THUMBNAILS */}
        <div className="food-thumbnails auto-scroll">
          <div className="thumb-track">
            {[...foodItems, ...foodItems].map((item, index) => (
              <button
                key={index}
                className={`thumb ${item.id === activeFood.id ? "active" : ""}`}
                onClick={() => setActiveFood(item)}
              >
                <img src={item.image} alt={item.name} />
              </button>
            ))}
          </div>
        </div>

        {/* CENTER: FEATURED IMAGE */}
        <div
          className="featured-image"
          style={{ backgroundImage: `url(${activeFood.image})` }}
        />

        {/* RIGHT: CONTENT */}
        <div className="featured-content">
            <div className="food-title-row">
              <h3 className="food-title">{activeFood.name}</h3>

              {activeFood.confidence && (
                <span className={`confidence-badge ${activeFood.confidence}`}>
                  {activeFood.confidence === "high"
                    ? "Highly Recommended"
                    : "Recommended"}
                </span>
              )}
            </div>

            <p className="short">{activeFood.category}</p>

            <p className="description">{activeFood.description}</p>

            {activeFood.bestPlaces?.length > 0 && (
              <p>
                <strong>Best places:</strong> {activeFood.bestPlaces.join(", ")}
              </p>
            )}

            {activeFood.bestTime && (
              <p>
                <strong>Best time:</strong> {activeFood.bestTime}
              </p>
            )}

            {activeFood.recommended && (
              <div className="recommended-box">
                <strong>Recommended Place:</strong>
                <p>{activeFood.recommended.place}</p>
                <p>{activeFood.recommended.address}</p>

                <a
                  href={activeFood.recommended.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="recommended-link"
                >
                  📍 View on Map
                </a>
              </div>
            )}
        </div>

      </div>
    </section>
  );
}
