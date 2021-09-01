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

export default function TimerEnd({ setScene, transport }) {
    return (
        <div className="container">
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="timer">
                <CountdownCircleTimer
                    isPlaying
                    duration={17}
                    colors={[["#FFFFFF"]]}
                    trailColor={["#4b1616"]}
                    size={50}
                    strokeWidth={2}
                    onComplete={() => setScene("4Aa")}
                >
                {renderTime}
                </CountdownCircleTimer>
            </div>
            <div className="narration">
                <Typical 
                    steps={["every situation is one that can and does happen in reality", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You start backing away from the situation and so does everyone around you. Surely, someone else on the {transport} will do something...right?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("4Aa") }}>
                            <p>Continue</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
