import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function PreCPRB({setScene}) {
    return (
        <div className="container">
            <div>
                <h2>Why does this game matter?</h2>
            </div>
            <div className="divider"></div>
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">Are you ready to start CPR?</p>
                    <div className="story-choices-container">
                        <div className="story-choice active" onClick={()=>{setScene("8")}}>Yes</div>
                        <div className="story-choice active" onClick={()=>{setScene("8")}}>HECK YES</div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
