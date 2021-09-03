import React, { useState, useEffect } from 'react'
import { findRegressionLine } from './LinearRegression';
import { FaUndo } from 'react-icons/fa'

export default function CompressionsOne({ setCompressionPass }) {
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
                <p>Start CPR to continue the pitch.</p>
            : null }
            { 0 < taps.length && taps.length < 10 ?
                <p>Hundreds of thousands of people die every year from circumstances that could be saved with first aid</p>
            : null }
            { 10 <= taps.length && taps.length < 15 ?
                <p>yet fewer than one in five of us know basic first aid.</p>
            : null }
            { 15 <= taps.length && taps.length < 20 ?
                <p>It's disheartening, to live in a world where it is a necessity for us to</p>
            : null }
            { 20 <= taps.length && taps.length < 27 ?
                <p>'find the area under graphs'</p>
            : null}
            { 21 < taps.length && taps.length < 27 ?
                <p>be able to recite the process of photosynthesis</p>
            : null }
            { 23 < taps.length && taps.length < 27?
                <p>and remember the birthdates of historical figures</p>
            : null }
            { 27 <= taps.length ?
                <p>but when faced with situations that require just basic first aid, most of us will freeze and have no idea what to do.</p>
            : null}

            </div>


            <div className="divider"></div>
                <div className="story">
                    <p className="story-text">START CHEST COMPRESSIONS</p>
                    <p>by tapping on the button below</p>
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
                            {/* <div className="story-choice active" onClick={ () => setCompressionPass(true) }>
                                RESCUE BREATHS
                            </div> */}
                            <br></br>
                            <p className="explanation">(click the reset button below if you want to try again)</p>
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
