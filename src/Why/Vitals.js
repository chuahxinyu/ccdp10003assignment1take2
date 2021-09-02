import React from 'react'

export default function Vitals({ setCprCount, setCompressionPass, setBreathsPass, cprCount }) {
    return (
        <div>
            <div className="vitals-background"></div>
            <div className="overlay"></div>
            <p>CHECKING VITALS...</p>
            <p>The person is still unconscious and not breathing.</p>
            <div className="story-choice active" onClick={()=>{ setCprCount(cprCount + 1); setCompressionPass(false); setBreathsPass(false)  }}>Start another cycle of CPR</div>
        </div>
    )
}
