import React, { useState, useRef } from "react";
import FadeIn from "../utils/FadeIn";

export default function BreathsOne({ setBreathsPass }) {
  const [breaths, setBreaths] = useState(0);
  const [counter, setCounter] = useState(0);

  const intervalRef = useRef(null);

  function startCounter() {
    if (intervalRef.current) return;
    if (breaths === 2) return;
    intervalRef.current = setInterval(() => {
      setCounter((prevCounter) =>
        prevCounter < 100 ? prevCounter + 1 : prevCounter
      );
    });
  }

  function stopCounter() {
    if (counter === 100 && breaths < 2) {
      setBreaths(breaths + 1);
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setCounter(0);
  }

  return (
    <div className="">
      <div className="breath-background"></div>
      <div className="overlay"></div>
      <div className="narration">
        <p>
          and all of this would require no less than the usual army of talented
          individuals (artists, modellers, riggers, designers, animators, voice
          actresses/actors, sound designers, developers, writers etc.)
        </p>
      </div>
      <div className="divider"></div>

      <FadeIn delay="2000">
        <div className="story">
          <p className="story-text">CONTINUE RESCUE BREATHS</p>
          <p>by long-pressing on the button below</p>
          <h2 className="compressions-display-text">{breaths}</h2>
          <div style={{ paddingTop: "20px" }}></div>
          <div className="breath-bar-border">
            <div
              className="breath-bar"
              style={{ width: `${Math.min(counter)}%` }}
            ></div>
          </div>

          {breaths !== 2 ? (
            <div
              className={`circle noselect active`}
              onClick={null}
              onMouseDown={startCounter}
              onMouseUp={stopCounter}
              onMouseLeave={stopCounter}
            >
              <div className="circle-text">
                <h2>LONG PRESS</h2>
              </div>
            </div>
          ) : null}

          {breaths === 2 ? (
            <div
              className="story-choice active"
              onClick={() => setBreathsPass(true)}
            >
              Continue
            </div>
          ) : null}
        </div>
      </FadeIn>
    </div>
  );
}
