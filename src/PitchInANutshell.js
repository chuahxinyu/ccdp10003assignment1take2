import React from 'react'
import FadeIn from 'react-fade-in'
import ReactTooltip from "react-tooltip";

import choices1 from "./images/choices1.png";
import choices2 from "./images/choices2.png";
import choices3 from "./images/choices3.png";
import choices4 from "./images/choices4.png";
import choices5 from "./images/choices5.png";
import choices6 from "./images/choices6.png";
import choices7 from "./images/choices7.png";

export default function PitchInANutshell({setScene}) {
    return (
        <div className="container">
            {/* <div className="oneline-overlay"></div> */}
            <div className="choices-background">
          <img
            src={choices1}
            alt="The Walking Dead choice gameplay"
            className="pitch-img-1"
            data-tip
            data-for="choiceOne"
          ></img>
          <ReactTooltip className="tooltip" id="choiceOne">
            <span>with similar choice and gameplay mechanics to The Walking Dead</span>
          </ReactTooltip>
          <img
            src={choices2}
            alt="Until Dawn choice gameplay"
            className="pitch-img-2"
            data-tip
            data-for="choiceTwo"
          ></img>
          <ReactTooltip className="tooltip" id="choiceTwo">
            <span>as true to reality as possible</span>
          </ReactTooltip>
          <img
            src={choices3}
            alt="Life is Strange choice gameplay"
            className="pitch-img-3"
            data-tip
            data-for="choiceThree"
          ></img>
          <ReactTooltip className="tooltip" id="choiceThree">
            <span>a fundamental idea of choices and consequences like in Life is Strange</span>
          </ReactTooltip>
          <img
            src={choices4}
            alt="choice gameplay"
            className="pitch-img-4"
            data-tip
            data-for="choiceFour"
          ></img>
          <ReactTooltip className="tooltip" id="choiceFour">
            <span>mainly to be played on consoles and VR</span>
          </ReactTooltip>
          <img
            src={choices5}
            alt="choice gameplay"
            className="pitch-img-5"
            data-tip
            data-for="choiceFive"
          ></img>
          <ReactTooltip className="tooltip" id="choiceFive">
            <span>moving and guiding the character similar to Beyond: Two Souls</span>
          </ReactTooltip>
          <img
            src={choices6}
            alt="choice gameplay"
            className="pitch-img-6"
            data-tip
            data-for="choiceSix"
          ></img>
          <ReactTooltip className="tooltip" id="choiceSix">
            <span>as emotionally-hooking as The Last of Us</span>
          </ReactTooltip>
          <img
            src={choices7}
            alt="choice gameplay"
            className="pitch-img-7"
            data-tip
            data-for="choiceSeven"
          ></img>
          <ReactTooltip className="tooltip" id="choiceSeven">
            <span>amazing graphics like Detroit: Become Human</span>
          </ReactTooltip>
          </div>
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="center">
                <div className="narration">
                    <h2>A first-person action-adventure game in which the player is put into emergency medical situations and applies first aid to help others.</h2>
                    
                </div>
                <br></br>
                <p className="explanation">(hover over the image shards for more information)</p>
            <FadeIn delay="6000" transitionDuration="1000">
                <div className={`story-choice active`} onClick={() => {setScene("3")}}>Continue</div>
            </FadeIn>
            </div>
            
        </div>
    )
}
