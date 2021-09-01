import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function BusOrTram({ setScene, setTransport }) {
    return (
        <div className="container">
            <div className="bustram-background"></div>
            {/* <div className="overlay"></div> */}
            <div className="narration">
                <Typical 
                    steps={["a game that revolves around choice", 2000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            
            <FadeIn delay="2500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">You are taking the</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => {setTransport("bus") ; setScene("4")}}>
                            <p>bus</p>
                        </div>
                        <div className={`story-choice active`} onClick={() => {setTransport("tram") ; setScene("4")}}>
                            <p>tram</p>
                        </div>
                    </div>
                    <p className="story-text">on your way to work.</p>
                </div>
            </FadeIn>
        </div>
    )
}
