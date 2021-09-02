import React, { useState, useEffect } from 'react'
import { findRegressionLine } from './LinearRegression';
import { FaAngleLeft, FaUndo, FaAngleRight } from 'react-icons/fa'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'





export default function Compressions({ setCompressionPass, setOne }) {
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
        setOne(false);
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
            <p>START CHEST COMPRESSIONS</p>
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

                { taps.length >= 30 && (bpmCount < 100 || bpmCount > 120) ?
                <div>
                    <div className="reset">
                        <FaUndo className="btn" onClick={handleReset} />
                    </div>
                    <p className="explanation"> please make sure that your chest compressions are within 100-120 beats per minute</p>
                </div>
                : null}

                { (taps.length >= 30 && 100 <= bpmCount && bpmCount <= 120) ?
                <div className={`circle noselect active correct`} onClick={ () => setCompressionPass(true) }>
                    <div className="circle-text"><h2>RESCUE BREATHS</h2></div>
                </div>
                : null }

                <div className="compressions-display">
                    <p style={{color: "grey"}}>BPM</p>
                    <h2 className="compressions-display-text">{bpmCount}<span className="explanation"><p>/100-120</p></span></h2>
                </div>
                
            </div>
            <div style={{paddingTop:"10px"}}></div>
            
            
        </div>
    )
}
