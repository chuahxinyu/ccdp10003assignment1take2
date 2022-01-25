import React, { useState } from 'react'
import ReactTooltip from "react-tooltip";

import choices1 from "./images/choices1.png";
import choices2 from "./images/choices2.png";
import choices3 from "./images/choices3.png";
import choices4 from "./images/choices4.png";
import choices5 from "./images/choices5.png";
import choices6 from "./images/choices6.png";
import choices7 from "./images/choices7.png";

export default function PitchInANutshell({ setScene }) {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState(false)
  const [six, setSix] = useState(false)
  const [seven, setSeven] = useState(false)

  return (
      <div className="container">
        {/* <div className="gameplay-background"></div> */}
        <div className="overlay"></div>
          {/* <div className="oneline-overlay"></div> */}
          <div className="choices-background">
        <img
          src={choices1}
          alt="The Walking Dead choice gameplay"
          className="pitch-img-1 btn"
          data-tip="custom show and hide"
          data-for="choiceOne"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceOne" afterShow={()=>setOne(true)}>
          <span>with gameplay mechanics similar to Accident</span>
        </ReactTooltip>
        <img
          src={choices2}
          alt="Until Dawn choice gameplay"
          className="pitch-img-2 btn"
          data-tip="custom show and hide"
          data-for="choiceTwo"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceTwo" afterShow={()=>setTwo(true)}>
          <span>as <b>true to reality</b> as possible</span>
        </ReactTooltip>
        <img
          src={choices3}
          alt="Life is Strange choice gameplay"
          className="pitch-img-3 btn"
          data-tip="custom show and hide"
          data-for="choiceThree"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceThree" afterShow={()=>setThree(true)}>
          <span>has a fundamental idea of <b>choices and consequences</b> like in Life is Strange</span>
        </ReactTooltip>
        <img
          src={choices4}
          alt="choice gameplay"
          className="pitch-img-4 btn"
          data-tip="custom show and hide"
          data-for="choiceFour"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceFour" afterShow={()=>setFour(true)}>
          <span>mainly to be played on <b>consoles</b> and <b>VR</b></span>
        </ReactTooltip>
        <img
          src={choices5}
          alt="choice gameplay"
          className="pitch-img-5 btn"
          data-tip="custom show and hide"
          data-for="choiceFive"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceFive" afterShow={()=>setFive(true)}>
          <span><b>move and guide</b> the character similar to Beyond: Two Souls</span>
        </ReactTooltip>
        <img
          src={choices6}
          alt="choice gameplay"
          className="pitch-img-6 btn"
          data-tip="custom show and hide"
          data-for="choiceSix"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceSix" afterShow={()=>setSix(true)}>
          <span>as <b>emotionally-hooking</b> as The Last of Us</span>
        </ReactTooltip>
        <img
          src={choices7}
          alt="choice gameplay"
          className="pitch-img-7 btn"
          data-tip="custom show and hide"
          data-for="choiceSeven"
          data-event="click focus"
        ></img>
        <ReactTooltip className="tooltip" id="choiceSeven" afterShow={()=>setSeven(true)}>
          <span><b>realistic graphics</b> like Detroit: Become Human</span>
        </ReactTooltip>
        </div>
          <div className="question">
              <h2>What's your elevator pitch?</h2>
          </div>
          <div className="center">
              <div className="narration">
                  <h2>A <i>first-player action-adventure game</i> in which the player is put into emergency medical situations and applies first aid to help others.</h2>
              </div>
              <br></br>
              <p className="explanation">(click all seven image shards to continue)</p>

            { one && two && three && four && five && six && seven ?
            <div className={`story-choice active`} onClick={() => {setScene("3")}}>Continue</div>
            : null}
            
          </div>
          
      </div>
  )
}
