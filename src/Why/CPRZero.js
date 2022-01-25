import React, { useState } from 'react'
import FadeIn from 'react-fade-in'

import CompressionsOne from './CompressionsOne'
import BreathsOne from './BreathsOne'

export default function CPROne({ setScene }) {
    const [compressionPass, setCompressionPass] = useState(false)
    const [breathsPass, setBreathsPass] = useState(false)

    return (
       <div className="container">
           <div className="question">
                <h2>Why does this game matter?</h2>
            </div>


            { (!compressionPass) ?
                <CompressionsOne setCompressionPass={setCompressionPass}/>
            : null}

            { (compressionPass && !breathsPass) ?
                <BreathsOne setBreathsPass={setBreathsPass} />
            : null}

            { (compressionPass && breathsPass) ?
                <div>
                    <div className="vitals-background"></div>
                    <div className="overlay"></div>
                    <div className="narration">
                        <p>If only we knew how to make people recall and remember vast amounts of information and react almost instinctually in stressful situations, right?</p>
        
                    </div>
                    <div className="divider"></div>
        
                    <p>CHECKING VITALS...</p>
                    <FadeIn delay="2000">
                        <div className="">
                            <p>The person is still unconscious and not breathing.</p>
                            <div className="story-choice active" onClick={()=> setScene("8") }>
                                Start another cycle of CPR</div> 
                        </div>
                    </FadeIn>
                </div>
                
            : null}
            

       </div>
    )
}
