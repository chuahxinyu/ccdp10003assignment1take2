import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'


export default function TooEarlyCompressions({ setScene }) {
    return (
        <div className="container">
            <div className="question">
                <h2>What is the core gameplay?</h2>
            </div>
            <div className="narration">
                <Typical 
                    steps={["but also letting you steer off into different paths", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text"></p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("4")}}>
                            <p>Rewind Time</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
