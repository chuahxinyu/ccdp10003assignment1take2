import React from 'react'
import FadeIn from 'react-fade-in'

export default function Vitals({ setCprCount, setCompressionPass, setBreathsPass, cprCount }) {
    return (
        <div>
            <div className="vitals-background"></div>
            <div className="overlay"></div>
            <div className="narration">
                {cprCount === 1 ?
                <p>If only we knew how to make people recall and remember vast amounts of information and react almost instinctually in stressful situations, right?</p>
                : null}

            </div>
            <div className="divider"></div>

            <p>CHECKING VITALS...</p>
            <FadeIn delay="2000">
                <div className="">
                    <p>The person is still unconscious and not breathing.</p>
                    <div className="story-choice active" onClick={()=>{ setCprCount(cprCount + 1); setCompressionPass(false); setBreathsPass(false)  }}>Start another cycle of CPR {cprCount === 1 ? `(and yea, we get it, everything can be solved with games)` : null}</div>
                </div>
            </FadeIn>
        </div>
    )
}
