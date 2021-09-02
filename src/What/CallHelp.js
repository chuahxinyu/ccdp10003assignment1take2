import React, {useState} from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function CallHelp({ setScene, transport, setPunishmentOpen }) {
    const [isOneActive, setIsOneActive] = useState(true)
    const [isTwoActive, setIsTwoActive] = useState(true)
    const [isThreeActive, setIsThreeActive] = useState(true)
    return (
        <div className="container">
            <div className="call-help-background"></div>
            <div className="overlay"></div>
            <div className="question">
                <h2>What will gameplay be like?</h2>
            </div>
            <div className="narration">
                <Typical 
                    steps={["Every scenario is one that can and does happen in reality", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="3500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You instruct a passenger to call 000. Then what do you do?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("7")}}>
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice ${isOneActive ? 'active' : 'inactive'}`} onClick={() => {setIsOneActive(false); setPunishmentOpen(true)}}>
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice ${isTwoActive ? 'active' : 'inactive'}`} onClick={() => {setIsTwoActive(false); setPunishmentOpen(true)}}>
                            {/* setScene("6A") */}
                            <p>check if the person is conscious and/or breathing again</p>
                        </div>

                        <div className={`story-choice ${isThreeActive ? 'active' : 'inactive'}`} onClick={() => {setIsThreeActive(false); setPunishmentOpen(true)}}>
                            <p>instruct another passenger to call for help again</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
        </div>
    )
}
