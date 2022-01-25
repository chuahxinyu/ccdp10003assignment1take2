import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function BusOrTram({ setScene, setTransport, setTimerPlay }) {
    return (
        <div className="container">
            <div className="scene-zero-background"></div>
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="bustram-background"></div>
            <div className="narration">
                <Typical 
                    steps={["A game that brings you into the real-life stories of others", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            
            <FadeIn delay="3500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You are taking the</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => {setTransport("bus") ; setScene("4"); setTimerPlay(true)}}>
                            <p>bus</p>
                        </div>
                        <div className={`story-choice active`} onClick={() => {setTransport("tram") ; setScene("4"); setTimerPlay(true)}}>
                            <p>tram</p>
                        </div>
                    </div>
                    <p className="story-text">on your way to work.</p>
                </div>
            </FadeIn>
        </div>
    )
}
