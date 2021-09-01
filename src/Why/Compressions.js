import React, { useState, useEffect } from 'react'
import { findRegressionLine } from './LinearRegression';
import { FaAngleLeft, FaUndo, FaAngleRight } from 'react-icons/fa'

export default function ChestCompressions({ setScene }) {
    const RESET_TIME = 30000;

    const [taps, setTaps] = useState([])
    const [startTime, setStartTime] = useState(null)
    const [bpmCount, setBPMCount] = useState('0')
    const [resetTimerId, setResetTimerId] = useState(null)

    const [showAnswerOne, setShowAnswerOne] = useState(false)
    const [showAnswerTwo, setShowAnswerTwo] = useState(false)

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
       <div className="container">
            <div className="chest-compressions-background"></div>
            <div className="overlay"></div>
            
            <div className="story">
                <h2 style={{fontSize: "1.5em"}}>how many chest compressions should you give? <span className="showanswer" onClick={() => setShowAnswerOne(!showAnswerOne)}><u>[{showAnswerOne ? 'hide' : 'show'} answer]</u></span>
                </h2>
                <p style={{fontSize: "3em"}}>{taps.length} <span className={`${showAnswerOne ? 'show' : 'hide'}`}>/ 30</span></p>
                <h2 style={{fontSize: "1.5em"}}>how fast should the chest compressions? (BPM = beats per minute) <span className="showanswer" onClick={() => setShowAnswerTwo(!showAnswerTwo)}><u>[{showAnswerTwo ? 'hide' : 'show'} answer]</u></span></h2>
                <p style={{fontSize: "3em"}}>{bpmCount} <span className={`${showAnswerTwo ? 'show' : 'hide'}`}>/ 100</span> BPM</p>
                <div style={{paddingTop: "40px"}}></div>
                <div className={`circle noselect ${taps.length>=30 ? 'correct' : 'active'}`} onClick={handleTap}>
                    <div className="circle-text"><h2>TAP</h2></div>
                </div>
            </div>
            <div style={{padding: "10px"}}></div> 
            <div className="prologue-content">
                <h2 className="explanation">The beats of these popular songs can help you keep rhythm when doing CPR: Eye of the Tiger (Survivor), Stayin' Alive (Bee Gees), Uptown Funk (Mark Ronson, Bruno Mars), Everybody (Backstreet Boys) and hundreds more.</h2>
            </div>

            <div className="reset">
                <FaUndo className="btn" onClick={handleReset} />
            </div>

            <div className="prev">
                <FaAngleLeft className="btn" onClick={() => setScene(3)}/>
            </div>

            <div className={`next ${taps.length>=30 ? 'show' : 'hide'}`}>
                <FaAngleRight className="btn" onClick={() => setScene(5)}/>
            </div>

       </div>
    )
}
