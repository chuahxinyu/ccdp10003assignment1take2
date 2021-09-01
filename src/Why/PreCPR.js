import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function PreCPR({ setState }) {
    return (
        <div className="container">
            <div className="question">
                <h2>Why this game matters.</h2>
            </div>
            <div className="narration">
                <Typical 
                    steps={["less than 50% of most populations know CPR", 3000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="3000" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">Do you know CPR? How many chest compressions and rescue breaths should you give?</p>
                    
                </div>
            </FadeIn>
        </div>
    )
}
