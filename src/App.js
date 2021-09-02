import "./App.css";
import { useState, useRef } from "react";
import ReactTooltip from "react-tooltip";

import choices1 from "./images/choices1.png";
import choices2 from "./images/choices2.png";
import choices3 from "./images/choices3.png";
import choices4 from "./images/choices4.png";
import choices5 from "./images/choices5.png";
import choices6 from "./images/choices6.png";
import choices7 from "./images/choices7.png";

import scenario1 from "./images/scenario1.png";
import scenario2 from "./images/scenario2.png";
import scenario3 from "./images/scenario3.png";
import scenario4 from "./images/scenario4.png";
import scenario5 from "./images/scenario5.png";
import scenario6 from "./images/scenario6.png";
import scenario7 from "./images/scenario7.png";

import know2 from "./images/know2.png";
import know3 from "./images/know3.png";
import know4 from "./images/know4.png";
import know5 from "./images/know5.png";
import know6 from "./images/know6.png";

import Navbar from "./Navbar";
import LoadingScreen from "./LoadingScreen";
import Landing from "./Landing";
import PitchInANutshell from "./PitchInANutshell";

import BusOrTram from "./What/BusOrTram";
import Collapse from "./What/Collapse";
import TimerEnd from "./What/TimerEnd";
import InitialVitals from "./What/InitialVitals";
import CallHelp from "./What/CallHelp";
import BystanderEffect from "./What/BystanderEffect";

import PreCPR from "./Why/PreCPR";
import PreCPRA from "./Why/PreCPRA";
import PreCPRB from "./Why/PreCPRB";
import CPROne from "./Why/CPROne";
import CPRTwo from "./Why/CPRTwo";
import References from "./References"

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PunishmentOne from "./PunishmentOne";

function RenderTime({ remainingTime }) {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [key, setKey] = useState(0);
  const [timerPlay, setTimerPlay] = useState(false);
  const [scene, setScene] = useState("1");
  const [transport, setTransport] = useState("bus");

  const noNav = ["0", "1"];
  const hasChoiceBackground = ["3", "4"];
  const hasScenarioBackground = ["5", "6", "7", "7A", "7B"];
  const hasKnowBackground = [];
  const [isPunishmentOpen, setPunishmentOpen] = useState(false);

  return (
    <div className="App">
      { scene !== "10" ? <div className="anatomy-background-1"></div> : null}
      { scene !== "10" ? <div className="fragments-background"></div> : null}
      
      
      <div className="stage-display">{scene}/10 stages</div>
      {!noNav.includes(scene) && scene !== "2" && scene !== "10" ? (
        <div className="timer" data-tip data-for="timerInfo">
          <CountdownCircleTimer
            key={key}
            isPlaying={timerPlay}
            duration={600}
            colors={[["#FFFFFF"]]}
            trailColor={["#4b1616"]}
            size={40}
            strokeWidth={2}
            onComplete={() => setScene("4Aa")}
          >
            {RenderTime}
          </CountdownCircleTimer>
          <ReactTooltip className="tooltip" id="timerInfo">
            <span>For every minute a person goes without CPR, their chance of surviving decreases by 10%.<br></br>You only have 10 minutes before there is basically no chance of survival.</span>
          </ReactTooltip>
        </div>
      ) : null}
      
      {hasChoiceBackground.includes(scene) ? (
        <div className="choices-background">
          <img
            src={choices1}
            alt="The Walking Dead choice gameplay"
            className="choices-img-1"
          ></img>
          <img
            src={choices2}
            alt="Until Dawn choice gameplay"
            className="choices-img-2"
          ></img>
          <img
            src={choices3}
            alt="Life is Strange choice gameplay"
            className="choices-img-3"
          ></img>
          <img
            src={choices4}
            alt="choice gameplay"
            className="choices-img-4"
          ></img>
          <img
            src={choices5}
            alt="choice gameplay"
            className="choices-img-5"
          ></img>
          <img
            src={choices6}
            alt="choice gameplay"
            className="choices-img-6"
          ></img>
          <img
            src={choices7}
            alt="choice gameplay"
            className="choices-img-7"
          ></img>
        </div>
      ) : null}
      
      {hasScenarioBackground.includes(scene) ? (
        <div className="scenarios-background">
          <img
            src={scenario1}
            alt="baby playing with electrical outlet"
            className="choices-img-1"
          ></img>
          <img
            src={scenario2}
            alt="baby playing with electrical outlet"
            className="choices-img-2"
          ></img>
          <img
            src={scenario3}
            alt="baby playing with electrical outlet"
            className="choices-img-3"
          ></img>
          <img
            src={scenario4}
            alt="baby playing with electrical outlet"
            className="choices-img-4"
          ></img>
          <img
            src={scenario5}
            alt="baby playing with electrical outlet"
            className="choices-img-5"
          ></img>
          <img
            src={scenario6}
            alt="baby playing with electrical outlet"
            className="choices-img-6"
          ></img>
          <img
            src={scenario7}
            alt="baby playing with electrical outlet"
            className="choices-img-7"
          ></img>
        </div>
      ) : null}
      {hasKnowBackground.includes(scene) ? (
        <div className="scenarios-background">
          <img
            src={choices1}
            alt="The Walking Dead choice gameplay"
            className="choices-img-1"
          ></img>
          <img
            src={know2}
            alt="baby playing with electrical outlet"
            className="choices-img-2"
          ></img>
          <img
            src={know3}
            alt="baby playing with electrical outlet"
            className="choices-img-3"
          ></img>
          <img
            src={know4}
            alt="baby playing with electrical outlet"
            className="choices-img-4"
          ></img>
          <img
            src={know5}
            alt="baby playing with electrical outlet"
            className="choices-img-5"
          ></img>
          <img
            src={know6}
            alt="baby playing with electrical outlet"
            className="choices-img-6"
          ></img>
          <img
            src={choices7}
            alt="choice gameplay"
            className="choices-img-7"
          ></img>
        </div>
      ) : null}

      {!noNav.includes(scene) ? (
        <Navbar
          setScene={setScene}
          timerPlay={timerPlay}
          setTimerPlay={setTimerPlay}
          setKey={setKey}
        />
      ) : null}

      {scene === "0" ? <LoadingScreen setScene={setScene} /> : null}
      {scene === "1" ? <Landing setScene={setScene} /> : null}
      {scene === "2" ? <PitchInANutshell setScene={setScene} /> : null}

      {/* WHAT */}
      {scene === "3" ? (
        <BusOrTram setScene={setScene} setTransport={setTransport} setTimerPlay={setTimerPlay}/>
      ) : null}
      {scene === "4" ? (
        <Collapse
          setScene={setScene}
          
          setPunishmentOpen={setPunishmentOpen}
        />
      ) : null}
      {scene === "4A" ? (
        <TimerEnd setScene={setScene} transport={transport} />
      ) : null}
      {scene === "4Aa" ? (
        <BystanderEffect setScene={setScene} transport={transport} setKey={setKey}/>
      ) : null}
      {scene === "5" ? (
        <InitialVitals
          setScene={setScene}
          setPunishmentOpen={setPunishmentOpen}
        />
      ) : null}
      {scene === "6" ? (
        <CallHelp
          setScene={setScene}
          transport={transport}
          setPunishmentOpen={setPunishmentOpen}
        />
      ) : null}

      {/* WHY */}
      {scene === "7" ? <PreCPR setScene={setScene} /> : null}
      {scene === "7A" ? <PreCPRA setScene={setScene} /> : null}
      {scene === "7B" ? <PreCPRB setScene={setScene} /> : null}
      {scene === "8" ? <CPROne setScene={setScene} /> : null}
      {scene === "9" ? <CPRTwo setScene={setScene} /> : null}
      {scene === "10" ? <References setScene={setScene} /> : null}
      {/* {scene === "11" ? <Extra setScene={setScene} /> : null} */}

      {isPunishmentOpen ? (
        <PunishmentOne setPunishmentOpen={setPunishmentOpen} />
      ) : null}

      {/* <Navbar />
        <Section id="landing"><Landing /></Section>
        <Section id="what"><WhatSection /></Section>
        <Section id="why"><WhySection /></Section>
        <Section id="how"><HowSection /></Section>            
        <Section id="references"><References /></Section> */}
    </div>
  );
}
