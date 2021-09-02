import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function PunishmentOne({ setPunishmentOpen }) {
    return (
        <div className="punishment-popup">
            <div className="narration">
                <Typical 
                    steps={["every second counts."]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <p className="story">Well, in te actual game, different choices and actions would bring you down sparate storylines with different outcomes - but I didn't have enough time to code that up right now (I have other subjects too, David!) - So here's a punishment message that wastes 5 seconds of your time :D</p>

            <FadeIn delay="5000" transitionDuration="1000">
                <div className="story-choice active" style={{width: "100%"}} onClick={() => {setPunishmentOpen(false)}}>Exit punishment</div>
            </FadeIn>
        </div>
    )
}
