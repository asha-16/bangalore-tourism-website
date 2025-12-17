import { useState } from "react";
import travelTips from "../../data/travelTips.js";
import { FaBus, FaAmbulance, FaHotel, FaCloudSunRain } from "react-icons/fa";

const iconMap = {
  bus: <FaBus />,
  ambulance: <FaAmbulance />,
  hotel: <FaHotel />,
  weather: <FaCloudSunRain />
};


export default function TravelTips() {
  const [activeTip, setActiveTip] = useState(null);
  const [copied, setCopied] = useState("");

  return (
    <section id="travel-tips" className="travel-tips-section">
      <div className="section-header">
        <h2>Travel Tips & Local Insights</h2>
        <p>Essential tips to make your Bangalore trip smooth and enjoyable</p>
      </div>

      <div className="timeline-wrapper">
        <div className="timeline-line" />

        {travelTips.map((tip, idx) => (
          <div
            key={tip.id}
            className={`timeline-item ${idx % 2 === 0 ? "top" : "bottom"}`}
          >
            {/* Dot + Icon */}
            <div className="timeline-dot">{iconMap[tip.icon]}</div>

            {/* Card */}
            <div className="timeline-card">
              <h3>{tip.title}</h3>
              <p>{tip.shortDesc}</p>
              <button
                className="primary-btn"
                onClick={() => setActiveTip(tip)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeTip && (
        <div className="modal-overlay" onClick={() => setActiveTip(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setActiveTip(null)}
            >
              ×
            </button>


            <h3>{activeTip.title}</h3>

           {activeTip.recommended && (
              <div className="recommended-box">
                ⭐Recommended: {activeTip.recommended}
              </div>
            )}

            
             {/* DO SECTION */}
              {activeTip.do && (
                <div className="tip-block do">
                  <h4>✔ Do</h4>
                  <ul className="tip-list">
                    {activeTip.do.map((item, index) => (
                      <li
                        key={index}
                        style={{ animationDelay: `${index * 0.08}s` }}
                        className={item.value ? "copy-item" : ""}
                      >
                        <span className="bullet-icon">{item.icon}</span>

                        <span className="tip-text">{item.text}</span>

                        {item.value && (
                          <span className="contact-actions">
                            {/* Tap to call */}
                            <a
                              href={`tel:${item.value}`}
                              className="call-link"
                              aria-label={`Call ${item.value}`}
                            >
                              {item.value}
                            </a>

                            {/* Copy button */}
                            <button
                              className="copy-btn"
                              onClick={() => {
                                navigator.clipboard.writeText(item.value);
                                setCopied(item.value);
                                setTimeout(() => setCopied(""), 1500);
                              }}
                              aria-label={`Copy ${item.value}`}
                            >
                              🗐
                            </button>

                            {copied === item.value && <em className="copied-text">Copied</em>}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* AVOID SECTION */}
              {activeTip.avoid && (
                <div className="tip-block avoid">
                  <h4>✖ Avoid</h4>
                  <ul className="tip-list">
                    {activeTip.avoid.map((item, index) => (
                      <li key={index} style={{ animationDelay: `${index * 0.08}s` }}>
                        <span className="bullet-icon">{item.icon}</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}


              {/* CTA LINK */}
              {activeTip.action && (
                <a
                  href={activeTip.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-btn"
                >
                  {activeTip.action.text}
                </a>
              )}


              {activeTip.source && (
                <div className="tip-source">
                  Source: {activeTip.source}
                </div>
              )}

          </div>
        </div>
      )}
    </section>
  );
}