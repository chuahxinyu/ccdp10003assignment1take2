import React, { useState } from "react";
import FadeIn from "../utils/FadeIn";

import CompressionsOne from "./CompressionsOne";
import BreathsOne from "./BreathsOne";

import choices2 from "../images/games2.png";
import choices3 from "../images/games3.png";
import choices4 from "../images/games4.png";
import choices7 from "../images/games7.png";

export default function CPROne({ setScene }) {
  const [compressionPass, setCompressionPass] = useState(false);
  const [breathsPass, setBreathsPass] = useState(false);

  return (
    <div className="container">
      <img src={choices4} alt="choice gameplay" className="choices-img-4"></img>
      <div className="question">
        <h2>Why does this game matter?</h2>
      </div>

      {!compressionPass ? (
        <CompressionsOne setCompressionPass={setCompressionPass} />
      ) : null}

      {compressionPass && !breathsPass ? (
        <BreathsOne setBreathsPass={setBreathsPass} />
      ) : null}

      {compressionPass && breathsPass ? (
        <div>
          <div className="vitals-background"></div>
          <div className="overlay"></div>
          <div>
            <img
              src={choices3}
              alt="Life is Strange choice gameplay"
              className="pitch-img-3"
            ></img>
            <img
              src={choices2}
              alt="Until Dawn choice gameplay"
              className="choices-img-2"
            ></img>
            <img
              src={choices7}
              alt="choice gameplay"
              className="pitch-img-7"
            ></img>
          </div>
          <div className="narration">
            <p>
              If only we knew how to make people recall and remember vast
              amounts of information and react almost instinctively in stressful
              situations, right?
            </p>
          </div>
          <p className="explanation">(look at the shards)</p>
          <div className="divider"></div>

          <p>CHECKING VITALS...</p>
          <FadeIn delay="2000">
            <div className="">
              <p>The person is still unconscious and not breathing.</p>
              <div
                className="story-choice active"
                onClick={() => setScene("9")}
              >
                Start another cycle of CPR (and yea, we get it, everything can
                be solved with games)
              </div>
            </div>
          </FadeIn>
        </div>
      ) : null}
    </div>
  );
}
