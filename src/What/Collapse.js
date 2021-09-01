import React, {useState} from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'


export default function Collapse({ setScene }) {
    const [isOneActive, setIsOneActive] = useState(true)
    const [isTwoActive, setIsTwoActive] = useState(true)
    const [isThreeActive, setIsThreeActive] = useState(true)

    return (
        <div className="container">
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="bustram-background"></div>
            
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
                    <p className="story-text">You hear a loud thud behind you. Someone has collapsed onto the floor. What do you do?</p>
                    <div className="story-choices-container">
                        <div className={`story-choice ${isOneActive ? 'active' : 'inactive'}`} onClick={() => setIsOneActive(false)}>
                        {/* () => { setScene("4B") */}
                            <p>start giving chest compressions</p>
                        </div>

                        <div className={`story-choice ${isTwoActive ? 'active' : 'inactive'}`} onClick={() => setIsTwoActive(false)}>
                        {/* { setScene("4C")} */}
                            <p>start giving mouth-to-mouth rescue breaths</p>
                        </div>

                        <div className={`story-choice active`} onClick={() => { setScene("5") }}>
                            <p>check if the person is conscious and/or breathing</p>
                        </div>

                        <div className={`story-choice ${isThreeActive ? 'active' : 'inactive'}`} onClick={() => setIsThreeActive(false)}>
                        {/* { setScene("4D")} */}
                            <p>instruct another passenger to call for help</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
            
        </div>
    )
}
