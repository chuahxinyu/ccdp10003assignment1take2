import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'


export default function TimerEnd({ setScene, transport }) {
    return (
        <div className="container">
            <div className="narration">
                <Typical 
                    steps={["and not choosing is an option too (albeit, probably not the best one)", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p>You start backing away from the situation and so does everyone around you. Surely, someone on the {transport} will do something... Last chance, will that someone be you?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("4") }}>
                            <p>Yes</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("4Aa") }}>
                            <p>No</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
