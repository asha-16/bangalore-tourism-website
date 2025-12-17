import howToReach from "../../data/howToReach.js";
import "./HowToReach.css";

export default function HowToReach() {
  return (
    <section id="how-to-reach" className="reach-section">
      <div className="section-header">
        <h2>How to Reach Bangalore</h2>
        <p>A step-by-step guide for first-time visitors</p>
      </div>

      <div className="arrival-flow">
        {howToReach.map((step, index) => (
          <div className="arrival-step" key={index}>
            {/* Step Number */}
            <span className="step-number">{index + 1}</span>

            {/* Step Content */}
            <div className="step-content">
              <div className="step-title-row">
                <h3>
                  <span className="step-icon">{step.icon}</span>
                  {step.mode}
                </h3>
                <span className={`confidence-badge ${step.confidence}`}>
                  {step.confidence === "high" ? "Highly Reliable" : "Reliable"}
                </span>
              </div>

              <p className="step-desc">{step.description}</p>

              {step.details?.length > 0 && (
                <ul className="step-points">
                  {step.details.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}

              {step.recommended && (
                <div className="recommended-box">
                  <strong>Recommended:</strong>
                  <p>{step.recommended}</p>
                </div>
              )}

              {step.source && <p className="step-source">Source: {step.source}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
