import React, { useState, useEffect } from 'react'
import { findRegressionLine } from './LinearRegression';
import { FaAngleLeft, FaUndo, FaAngleRight } from 'react-icons/fa'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

import Compressions from './Compressions'
import Breaths from './Breaths'
import Vitals from './Vitals'

export default function CPR({ setScene }) {
    const [cprCount, setCprCount] = useState(1)
    const [compressionPass, setCompressionPass] = useState(false)
    const [breathsPass, setBreathsPass] = useState(false)
    const [isOne, setOne] = useState(true)
    const [isTwo, setTwo] = useState(false)
    const [isThree, setThree] = useState(false)
    const [isFour, setFour] = useState(false)


    return (
       <div className="container">
           <div className="cprstat"></div>
           <div className="question">
                <h2>Why does this game matter?</h2>
            </div>
            { isOne ?
            <div className="narration">
                <Typical 
                    steps={["please start CPR to continue with the pitch"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            : null }
            { isTwo ?
            <div className="narration-why">
                <Typical 
                    steps={["if the importance of this game isn't already glaringly obvious,"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            : null}
            { isThree ?
            <div className="narration-why">
                <Typical 
                    steps={["i'll go through a bit of it while you're '"]}
                    loop={1}
                    wrapper="p" 
                />
            </div>
            : null}
            
            <div className="divider"></div>

            { (!compressionPass && cprCount !== 3) ?
                <Compressions setCompressionPass={setCompressionPass} setOne={setOne}/>    
            : null}


            { (compressionPass && !breathsPass && cprCount !== 3) ?
                <Breaths setBreathsPass={setBreathsPass} />
            : null}
            
            { (compressionPass && breathsPass && cprCount !== 3) ?
                <Vitals setCprCount={setCprCount} setCompressionPass={setCompressionPass} setBreathsPass={setBreathsPass} cprCount={cprCount}/>
            : null}

            { cprCount === 3 ?
                <div className="story">
                    <p>CPR done - ambulance arrives - hooray</p>
                    <div className="story-choice active" onClick={()=>{setScene("10")}}>Continue</div>
                </div>
            : null}
            

       </div>
    )
}
