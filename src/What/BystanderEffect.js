import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function BystanderEffect({ setScene, transport }) {
    return (
        <div className="container">
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
                    <p className="story-text">The Bystander Effect. Thousands of lives are lost due to this phenomenon, including the person who collapsed in your {transport} ride.</p>
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
