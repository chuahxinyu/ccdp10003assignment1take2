import React, {useState} from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'


export default function Collapse({ setScene, transport, setPunishmentOpen }) {
    const [isOneActive, setIsOneActive] = useState(true)
    const [isTwoActive, setIsTwoActive] = useState(true)
    const [isThreeActive, setIsThreeActive] = useState(true)
    // const [otherPath, setOtherPath] = useState(false)

    return (
        <div className="container">
            {transport === "bus" ? <div className="bus-background"></div> : <div className="tram-background"></div>}
            <div className="overlay"></div>
            <div className="question">
                <h2>What will gameplay be like?</h2>
            </div>
            <div className="bustram-background"></div>
            
            <div className="narration">
                <Typical 
                    steps={["letting you make the decisions that they had to", 3000, "but also letting you steer off into different paths"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="3500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You hear a loud thud behind you. Someone has collapsed onto the floor. What do you do?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice ${isOneActive ? 'active' : 'inactive'}`} onClick={() => {setIsOneActive(false); setPunishmentOpen(true)}}>
                        {/* () => { setScene("4B") */}
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice ${isTwoActive ? 'active' : 'inactive'}`} onClick={() => {setIsTwoActive(false); setPunishmentOpen(true)}}>
                        {/* { setScene("4C")} */}
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("5") }}>
                            <p>check if the person is conscious and/or breathing</p>
                        </div>

                        <div className={`story-choice ${isThreeActive ? 'active' : 'inactive'}`} onClick={() => {setIsThreeActive(false); setPunishmentOpen(true)}}>
                        {/* { setScene("4D")} */}
                            <p>instruct another passenger to call for help</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
        </div>
    )
}
