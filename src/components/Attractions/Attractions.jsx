import { useState } from "react"; 
import attractions from "../../data/attractions.js";
import "./Attractions.css";

export default function Attractions() {
  const [selectedAttraction, setSelectedAttraction] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...new Set(attractions.map(a => a.category))];

  const filteredAttractions =
    activeCategory === "All"
      ? attractions
      : attractions.filter(place => place.category === activeCategory);

  const visibleAttractions = showAll ? filteredAttractions : filteredAttractions.slice(0, 3);

  return (
    <section className="attractions-section" id="attractions">
      <div className="attractions-header-wrapper">
        <div className="attractions-header">
          <h2>Top Attractions in Bangalore</h2>
          <p>Discover iconic landmarks, peaceful gardens, and cultural highlights.</p>
        </div>

        <div className="attractions-controls">
          <select
            className="category-select"
            value={activeCategory}
            onChange={(e) => { setActiveCategory(e.target.value); setShowAll(false); }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="attractions-grid">
        {visibleAttractions.map((place) => (
          <div className="attraction-card" key={place.id} onClick={() => setSelectedAttraction(place)}>
            <div className="card-image">
              <img src={place.image} alt={place.name} />
            </div>
            <div className="card-content">
              <span className="card-tag">{place.category}</span>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filteredAttractions.length > 3 && (
        <div className="view-all-wrapper">
          <button className="view-all-btn" onClick={() => setShowAll(prev => !prev)}>
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}

      {selectedAttraction && (
        <div className="modal-overlay" onClick={() => setSelectedAttraction(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedAttraction(null)}>×</button>

            <img src={selectedAttraction.image} alt={selectedAttraction.name} />
            <h3>{selectedAttraction.name}</h3>
            <p>{selectedAttraction.description}</p>

            <ul className="modal-details">
              <li>📍 {selectedAttraction.location}</li>
              <li>⏰ Best time: {selectedAttraction.bestTime}</li>
              <li>⌛ Duration: {selectedAttraction.duration}</li>
              <li>🎟 Entry: {selectedAttraction.entryFee}</li>
            </ul>

            <a href={selectedAttraction.mapLink} target="_blank" rel="noopener noreferrer" className="map-btn">
              📍 View on Map
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
