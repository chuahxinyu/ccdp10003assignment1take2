import React, { useState } from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function PreCPR({ setScene }) {
    const [compressionAnswer, setCompressionAnswer] = useState(0)
    const [breathAnswer, setBreathAnswer] = useState(0)
    return (
        <div className="container">
            <div className="question">
                <h2>What will gameplay be like?</h2>
            </div>
            <div className="narration">
                <Typical 
                    steps={["which makes us realise how much we actually know"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            <div className="divider"></div>
            <FadeIn delay="3500" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">How many chest compressions and rescue breaths should you give?</p>
                    <form>
                        <div className="form-container">
                            <div className="form-element">
                                <input 
                                    type="number" 
                                    step="1" 
                                    placeholder="0"
                                    onChange={(e) => setCompressionAnswer(e.target.value)} />
                            </div>
                            <div className="form-element">
                                <label className="form-label">Chest Compressions</label>
                            </div>
                            <div className="form-element">
                                <input 
                                    type="number" 
                                    step="1" 
                                    placeholder="0"
                                    onChange={(e) => setBreathAnswer(e.target.value)} />
                            </div>
                            <div className="form-element">
                                <label className="form-label">Rescue Breaths</label>
                            </div>
                            <br></br>
                        </div>
                        { (compressionAnswer !== 0 && breathAnswer !== 0) ? <div className="explanation">The ratio of chest compressions to rescue breaths in CPR is 30:2</div> : null }
                       { (compressionAnswer === '30' && breathAnswer === '2') ? <div className="story-choice active" onClick={()=>{setScene("7A")}}>Continue</div> : null }
                    </form>
                </div>
            </FadeIn>
        </div>
    )
}
