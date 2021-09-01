import React, {useState} from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function InitialVitals({ setScene }) {
    const [isOneActive, setIsOneActive] = useState(true)
    const [isTwoActive, setIsTwoActive] = useState(true)
    const [isThreeActive, setIsThreeActive] = useState(true)

    return (
        <div className={`container`}>
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            
            <div className="narration">
                <Typical 
                    steps={["and every scenario is one that can happen in our own lives", 3000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="3000" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">The person is unconscious and not breathing. What do you do next?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice ${isOneActive ? 'active' : 'inactive'}`} onClick={() => setIsOneActive(false)}>
                            <p>check if they are conscious and/or breathing again</p>
                        </div>

                        <div className={`story-choice ${isTwoActive ? 'active' : 'inactive'}`} onClick={() => setIsTwoActive(false)}>
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice ${isThreeActive ? 'active' : 'inactive'}`} onClick={() => setIsThreeActive(false)}>
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => {setScene("6")}}>
                            <p>ask another passenger to call emergency services</p>
                        </div>
                    </div>
                </div>
            </FadeIn>

        </div>
    )
}
