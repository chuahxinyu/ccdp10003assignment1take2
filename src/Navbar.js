import React, {useRef, useState} from 'react'
// import { FaBars } from 'react-icons/fa'

import { CountdownCircleTimer } from "react-countdown-circle-timer"

function RenderTime ({ remainingTime }) {
    const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender(val => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  )
}

export default function Navbar({ setScene, timerPlay }) {
    return (
        <div className="navbar">
            <div className="navbar-item" onClick={() => {setScene("1")}}>start</div>
            <div className="navbar-item" onClick={() => {setScene("3")}}>what</div>
            <div className="navbar-item" onClick={() => {setScene("7")}}>why</div>
            <div className="navbar-item" onClick={() => {setScene("11")}}>how</div>
            <div className="navbar-item">end</div>
            {/* <div className="navbar-item">
                <FaBars className="" />
            </div> */}
            <div className="navbar-item">
                <CountdownCircleTimer
                    isPlaying
                    duration={600}
                    colors={[["#FFFFFF"]]}
                    trailColor={["#4b1616"]}
                    size={40}
                    strokeWidth={2}
                    onComplete
                >
                {RenderTime}
                </CountdownCircleTimer>
            </div>
            
        </div>
    )
}
