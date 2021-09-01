import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function BystanderEffect({ setScene, transport }) {
    return (
        <div className="container">
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="narration">
                <Typical 
                    steps={["but unlike reality, gives players freedom for trial, error and an opportunity to learn"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="5500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text"><u>The Bystander Effect.</u> Thousands of lives are lost due to this phenomenon, including the person who collapsed in your {transport} ride.</p>
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
