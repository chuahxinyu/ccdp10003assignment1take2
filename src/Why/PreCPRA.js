import React, { useState } from "react";
import Typical from "react-typical";
import FadeIn from "../utils/FadeIn";

export default function PreCPRA({ setScene }) {
  const [speedAnswer, setSpeedAnswer] = useState(0);
  return (
    <div className="container">
      <div className="question">
        <h2>What will gameplay be like?</h2>
      </div>
      <div className="narration">
        <Typical
          steps={["or rather, how much we don't."]}
          loop={1}
          wrapper="p"
        />
      </div>
      <div className="divider"></div>
      <FadeIn delay="2500" transitionDuration="1000">
        <div className="story">
          <p className="story-text">
            How fast should the chest compressions be?
          </p>
          <form>
            <div className="form-container">
              <div className="form-element">
                <input
                  type="number"
                  step="1"
                  onChange={(e) => setSpeedAnswer(e.target.value)}
                  placeholder="0"
                />
              </div>
              <div className="form-element">
                <label className="form-label">BPM (Beats per Minute)</label>
              </div>
            </div>
            <br></br>
            {speedAnswer !== 0 ? (
              <div className="explanation">
                Chest compressions should be given at a rate between 100-120
                beats per minute
              </div>
            ) : null}
            {100 <= speedAnswer && speedAnswer <= 120 ? (
              <div
                className="story-choice active"
                onClick={() => {
                  setScene("7B");
                }}
              >
                Continue
              </div>
            ) : null}
          </form>
        </div>
      </FadeIn>
    </div>
  );
}
