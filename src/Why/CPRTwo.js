import React, { useState } from "react";
import FadeIn from "../utils/FadeIn";

import CompressionsTwo from "./CompressionsTwo";
import BreathsTwo from "./BreathsTwo";

export default function CPROne({ setScene }) {
  const [compressionPass, setCompressionPass] = useState(false);
  const [breathsPass, setBreathsPass] = useState(false);

  return (
    <div className="container">
      <div className="question">
        <h2>How do we move on with this concept?</h2>
      </div>

      {!compressionPass ? (
        <CompressionsTwo setCompressionPass={setCompressionPass} />
      ) : null}

      {compressionPass && !breathsPass ? (
        <BreathsTwo setBreathsPass={setBreathsPass} />
      ) : null}

      {compressionPass && breathsPass ? (
        <div>
          <div className="vitals-background"></div>
          <div className="overlay"></div>
          <FadeIn delay="2000">
            <div className="narration">
              <p>
                So the pitch is over now. Would you like to check out my long
                and boring reference list?
              </p>
              <div className="story-choices-container">
                <div
                  className="story-choice active"
                  onClick={() => {
                    setScene("10");
                  }}
                >
                  Sure
                </div>
                <div
                  className="story-choice active"
                  onClick={() => {
                    setScene("10");
                  }}
                >
                  No thanks
                </div>
              </div>
            </div>
          </FadeIn>
          <div className="divider"></div>

          <div className="story">
            <p className="story-text">
              Just as you were checking the person's vitals, emergency services
              have arrived and take over - your efforts of CPR has saved a
              person's life.
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
