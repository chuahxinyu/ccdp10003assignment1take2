import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function CallHelp({ setScene }) {
    return (
        <div className="container">
            <div className="narration">
                <Typical 
                    steps={["", 2000]}
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
