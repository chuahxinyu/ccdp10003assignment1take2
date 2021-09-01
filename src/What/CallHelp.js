import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function CallHelp({ setScene, transport }) {
    return (
        <div className="container">
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
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
                    <p className="story-text">You instruct a passenger to call 000. Then what do you do?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("7")}}>
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("8")}}>
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("6A")}}>
                            <p>check if the person is conscious and/or breathing again</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("6B")}}>
                            <p>instruct another passenger to call for help again</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
        </div>
    )
}
