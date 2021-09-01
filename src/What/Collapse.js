import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'
import { CountdownCircleTimer } from "react-countdown-circle-timer"

function renderTime ({ remainingTime }) {
    if (remainingTime === 0){
        return null
    }

    return (
        <div className="timer">
            <div className="value">{remainingTime}</div>
        </div>
    )
}

export default function Collapse({ setScene }) {

    return (
        <div className="container">
            <div className="bustram-background"></div>
            {/* <renderTime /> */}
            <CountdownCircleTimer
                isPlaying
                duration={15}
                colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                onComplete={() => setScene("4A")}
            >
            {renderTime}
            </CountdownCircleTimer>
            <div className="narration">
                <Typical 
                    steps={["where every second counts", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You hear a loud thus behind you. Someone has collapsed onto the floor. What do you do?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("4B")}}>
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("4C")}}>
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("5")}}>
                            <p>check if the person is conscious and/or breathing</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("4D")}}>
                            <p>instruct another passenger to call for help</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
        </div>
    )
}
