import React, {useState} from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function InitialVitals({ setScene, setPunishmentOpen }) {
    const [isOneActive, setIsOneActive] = useState(true)
    const [isTwoActive, setIsTwoActive] = useState(true)
    const [isThreeActive, setIsThreeActive] = useState(true)

    return (
        <div className={`container`}>
            <div className="collapse-background"></div>
            <div className="overlay"></div>
            <div className="question">
                <h2>What will gameplay be like?</h2>
            </div>
            
            <div className="narration">
                <Typical 
                    steps={["Every second counts", 3000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="1500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">The person is unconscious and not breathing. What do you do next?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice ${isOneActive ? 'active' : 'inactive'}`} onClick={() => {setIsOneActive(false); setPunishmentOpen(true)}}>
                            <p>check if they are conscious and/or breathing again</p>
                        </div>

                        <div className={`story-choice ${isTwoActive ? 'active' : 'inactive'}`} onClick={() => {setIsTwoActive(false); setPunishmentOpen(true)}}>
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice ${isThreeActive ? 'active' : 'inactive'}`} onClick={() => {setIsThreeActive(false); setPunishmentOpen(true)}}>
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
