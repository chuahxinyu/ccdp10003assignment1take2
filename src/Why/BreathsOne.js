import React, { useState, useRef } from 'react'
import FadeIn from 'react-fade-in'


export default function BreathsOne({ setBreathsPass }) {
    const [breaths, setBreaths] = useState(0)
    const [counter, setCounter] = useState(0)

    const intervalRef = useRef(null)

    function startCounter () {
        if (intervalRef.current) return
        if (breaths === 2) return
        intervalRef.current = setInterval (() => {
            setCounter((prevCounter) => prevCounter < 100 ? prevCounter + 1 : prevCounter)
        })
    }

    function stopCounter () {
        if (counter === 100 && breaths < 2) {
            setBreaths(breaths + 1)
        }
        clearInterval(intervalRef.current)
        intervalRef.current = null
        setCounter(0)
    }

    // function resetCounter () {
    //     clearInterval(intervalRef.current)
    //     intervalRef.current = null
    //     setCounter(0)
    //     setBreaths(0)
    // }


    return (
        <div className="">
            <div className="breath-background"></div>
            <div className="overlay"></div>
            <div className="narration">
                <p>And even people who have done a first aid course usually forget the information within weeks.</p>
            </div>
            <div className="divider"></div>

            <FadeIn delay="2000">
                <div className="story">
                    <p className="story-text">START RESCUE BREATHS</p>
                    <h2 className="compressions-display-text">{breaths}</h2>
                    <div style={{paddingTop: "20px"}}></div>
                    <div className="breath-bar-border">
                        <div className="breath-bar" style={{width: `${Math.min(counter)}%`}}></div>
                    </div>


                    { breaths !== 2 ?
                        <div className={`circle noselect active`} onClick={null} onMouseDown={startCounter} onMouseUp={stopCounter} onMouseLeave={stopCounter}>
                            <div className="circle-text"><h2>LONG PRESS</h2></div>
                        </div>
                    : null}

                    { breaths === 2 ?
                        <div className="story-choice active" onClick={ () => setBreathsPass(true) }>
                            Continue
                        </div>
                    : null}
                </div>

            </FadeIn>
            
        </div>
    )
}
