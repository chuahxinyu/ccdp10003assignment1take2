import React from 'react'
import Typical from 'react-typical'
import FadeIn from './utils/FadeIn'

export default function PunishmentOne({ setPunishmentOpen }) {
    return (
        <div className="punishment-popup">
            <div className="narration">
                <Typical 
                    steps={["every second counts"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <p>(hover over the countdown clock to learn more)</p>
            <div className="divider"></div>
            <p className="story">In the actual game, different choices and actions would bring you down separate storylines with different outcomes - but I don't have enough time to code that up right now so here's a punishment message that wastes 5 seconds of your time :))</p>

            <FadeIn delay="4000" transitionDuration="1000">
                <div className="story-choice active" style={{width: "100%"}} onClick={() => {setPunishmentOpen(false)}}>Exit punishment</div>
            </FadeIn>
        </div>
    )
}
