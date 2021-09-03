import React, { useState, useEffect } from 'react'
import { findRegressionLine } from './LinearRegression';
import { FaUndo } from 'react-icons/fa'

export default function CompressionsTwo({ setCompressionPass }) {
    const RESET_TIME = 30000;

    const [taps, setTaps] = useState([])
    const [startTime, setStartTime] = useState(null)
    const [bpmCount, setBPMCount] = useState('0')
    const [resetTimerId, setResetTimerId] = useState(null)

    useEffect(() => {}, []);

    const handleTap = () => {
        if (taps.length >= 30) {
            return null
        }
        if (!startTime) {
            setStartTime(Date.now());
        }
        const tapsCount = taps.length;
        const timeDiff = startTime ? Date.now() - startTime : 0;
        setTaps([...taps, [tapsCount, timeDiff]]);
        setBPMCount(calculateBPM(taps));
        startResetTimer();
    }

    const handleReset = () => {
        reset();
    }

    const startResetTimer = () => {
        clearTimeout(resetTimerId);
        const id = setTimeout(() => reset(), RESET_TIME);
        setResetTimerId(id);
    }

    const reset = () => {
        setBPMCount('0');
        setTaps([]);
        setStartTime(null);
    }

    const calculateBPM = timestamps => {
        if (timestamps.length < 2) {
            return 0;
        }
        const sampleNumbers = timestamps.map(stamp => stamp[0]);
        const timeDiffs = timestamps.map(stamp => stamp[1]);
        const [a] = findRegressionLine(sampleNumbers, timeDiffs);
        return Math.round(60000 / a);
    }

    return (
        <div>
            <div className="chest-compressions-background"></div>
            <div className="overlay"></div>
            <div className="narration">
            { taps.length === 0 ? 
                <h2>How do we move forward with this concept?</h2>
            : null }
            { 0 < taps.length && taps.length < 5 ?
                <p>Clearly, factual accuracy is extremely important for this game</p>
            : null }
            { 5 <= taps.length && taps.length < 15 ?
                <p>as creating a game that disseminates false information is <i>much worse</i> than not making a game at all</p>
            : null }
            { 15 <= taps.length && taps.length < 20 ?
                <p>As such, pre-production of this game would require heavy involvement of medical professionals,</p>
            : null }
            { 20 <= taps.length && taps.length < 27 ?
                <p>especially emergency responders, such as first aiders, emergency medical technicians (EMT) and paramedics</p>
            : null}
            { 27 <= taps.length ?
                <p>to understand what average bystanders are able to do in these types of situations and implement these actions into the game.</p>
            : null}

            </div>


            <div className="divider"></div>
                <div className="story">
                <p className="story-text">You can hear emergency services arriving nearby, but keep doing CPR until they take over!</p>
                    <p>Continue chest compressions by tapping on the button below</p>
                    <div className="compressions-container">
                        <div className="compressions-display">
                            <p style={{color: "grey"}}>COUNT</p>
                            <h2 className="compressions-display-text">{taps.length}<span className="explanation"><p>/30</p></span></h2>
                        </div>
                        
                        { taps.length < 30 ? 
                        <div className={`circle noselect active`} onClick={handleTap}>
                            <div className="circle-text"><h2>{`TAP`}</h2></div>
                        </div>
                        : null}

                        { taps.length >= 30 && (bpmCount < 90 || bpmCount > 130) ?
                        <div>
                            <p className="explanation">make sure your compressions are between 100-120BPM (try singing a song like Stayin' Alive (by Bee Gees) to help you stay on tempo)</p>
                            <br></br>
                            <p className="explanation">(click the reset button below)</p>
                            <div className="reset">
                                <FaUndo className="btn" onClick={handleReset} />
                            </div>
                        </div>
                        : null}

                        { (taps.length >= 30 && 90 <= bpmCount && bpmCount <= 130) ?
                        <div className="story-choice active" onClick={ () => setCompressionPass(true) }>
                            RESCUE BREATHS
                        </div>
                        : null }

                        <div className="compressions-display">
                            <p style={{color: "grey"}}>BPM</p>
                            <h2 className="compressions-display-text">{bpmCount}<span className="explanation"><p>/100-120</p></span></h2>
                        </div>
                    </div>
                </div>
            
            
            
        </div>
    )
}
