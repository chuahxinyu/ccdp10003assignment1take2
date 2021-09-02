import './App.css';
import { useState, useRef } from 'react'
import FadeIn from 'react-fade-in'

import choices1 from "./images/choices1.png"
import choices2 from "./images/choices2.png"
import choices3 from "./images/choices3.png"
import choices4 from "./images/choices4.png"
import choices5 from "./images/choices5.png"
import choices6 from "./images/choices6.png"
import choices7 from "./images/choices7.png"

import scenario1 from "./images/scenario1.png"
import scenario2 from "./images/scenario2.png"
import scenario3 from "./images/scenario3.png"
import scenario4 from "./images/scenario4.png"
import scenario5 from "./images/scenario5.png"
import scenario6 from "./images/scenario6.png"
import scenario7 from "./images/scenario7.png"

import know2 from "./images/know2.png"
import know3 from "./images/know3.png"
import know4 from "./images/know4.png"
import know5 from "./images/know5.png"
import know6 from "./images/know6.png"

import Navbar from './Navbar'
import LoadingScreen from './LoadingScreen'
import Landing from './Landing'

import BusOrTram from './What/BusOrTram'
import Collapse from './What/Collapse'
import TimerEnd from './What/TimerEnd'
import TooEarlyCompressions from './What/TooEarly/TooEarlyCompressions'
import TooEarlyBreaths from './What/TooEarly/TooEarlyBreaths'
import TooEarlyCallHelp from './What/TooEarly/TooEarlyCallHelp'
import InitialVitals from './What/InitialVitals'
import InitialVitalsAgain from './What/InitialVitalsAgain'
import EarlyCompressions from './What/Early/EarlyCompressions'
import EarlyBreaths from './What/Early/EarlyBreaths'
import CallHelp from './What/CallHelp'
import CallHelpWrong from './What/CallHelpWrong'
import BystanderEffect from './What/BystanderEffect'

import PreCPR from './Why/PreCPR'
import PreCPRA from './Why/PreCPRA'
import PreCPRB from './Why/PreCPRB'
import CPR from './Why/CPR'
import Breaths from './Why/Breaths'
import Vitals from './Why/Vitals'
import WhyEnd from './Why/WhyEnd'

import Summary from './How/Summary'
import HowOne from './How/HowOne'
import HowTwo from './How/HowTwo'
import End from './How/End'

import { CountdownCircleTimer } from "react-countdown-circle-timer";
import PunishmentOne from './PunishmentOne';

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
  const [timerPlay, setTimerPlay] = useState(false)
  const [scene, setScene] = useState("7")
  const [transport, setTransport] = useState("bus")

  const noNav = ["0", "1"]
  const hasChoiceBackground = ["3", "4"]
  const hasScenarioBackground = ["5", "6"]
  const hasKnowBackground = ["7","7A", "8"]
  const [isPunishmentOpen, setPunishmentOpen] = useState(false)
  return (
    <div className="App">
        <div className="anatomy-background-1"></div>
        <div className="fragments-background"></div>
        { !noNav.includes(scene) ?
          <div className="timer">
            <CountdownCircleTimer
              key={key}
              isPlaying={timerPlay}
              duration={600}
              colors={[["#FFFFFF"]]}
              trailColor={["#4b1616"]}
              size={40}
              strokeWidth={2}
              onComplete
            >
              {RenderTime}
            </CountdownCircleTimer>
          </div>
        : null}
        { hasChoiceBackground.includes(scene) ? 
          <div className="choices-background">
            <img src={choices1} alt="The Walking Dead choice gameplay" className="choices-img-1"></img>
            <img src={choices2} alt="Until Dawn choice gameplay" className="choices-img-2"></img>
            <img src={choices3} alt="Life is Strange choice gameplay" className="choices-img-3"></img>
            <img src={choices4} alt="choice gameplay" className="choices-img-4"></img>
            <img src={choices5} alt="choice gameplay" className="choices-img-5"></img>
            <img src={choices6} alt="choice gameplay" className="choices-img-6"></img>
            <img src={choices7} alt="choice gameplay" className="choices-img-7"></img>
          </div>
        :null }
        { hasScenarioBackground.includes(scene) ? 
          <div className="scenarios-background">
            <img src={scenario1} alt="baby playing with electrical outlet" className="choices-img-1"></img>
            <img src={scenario2} alt="baby playing with electrical outlet" className="choices-img-2"></img>
            <img src={scenario3} alt="baby playing with electrical outlet" className="choices-img-3"></img>
            <img src={scenario4} alt="baby playing with electrical outlet" className="choices-img-4"></img>
            <img src={scenario5} alt="baby playing with electrical outlet" className="choices-img-5"></img>
            <img src={scenario6} alt="baby playing with electrical outlet" className="choices-img-6"></img>
            <img src={scenario7} alt="baby playing with electrical outlet" className="choices-img-7"></img>
          </div>
        :null } 
        { hasKnowBackground.includes(scene) ? 
          <div className="scenarios-background">
            <img src={choices1} alt="The Walking Dead choice gameplay" className="choices-img-1"></img>
            <img src={know2} alt="baby playing with electrical outlet" className="choices-img-2"></img>
            <img src={know3} alt="baby playing with electrical outlet" className="choices-img-3"></img>
            <img src={know4} alt="baby playing with electrical outlet" className="choices-img-4"></img>
            <img src={know5} alt="baby playing with electrical outlet" className="choices-img-5"></img>
            <img src={know6} alt="baby playing with electrical outlet" className="choices-img-6"></img>
            <img src={choices7} alt="choice gameplay" className="choices-img-7"></img>
          </div>
        :null } 
        
        
        { !noNav.includes(scene) ? <Navbar setScene={setScene} timerPlay={timerPlay} setTimerPlay={setTimerPlay} setKey={setKey}/> : null}

        { scene === "0" ? <LoadingScreen setScene={setScene} /> : null }
        { scene === "1" ? <Landing setScene={setScene} /> : null }

        {/* WHAT */}
        { scene === "3" ? <BusOrTram setScene={setScene} setTransport={setTransport} /> : null }
        { scene === "4" ? <Collapse setScene={setScene} setTimerPlay={setTimerPlay} setPunishmentOpen={setPunishmentOpen} /> : null }
          { scene === "4A" ? <TimerEnd setScene={setScene} transport={transport} /> : null }
            { scene === "4Aa" ? <BystanderEffect setScene={setScene} transport={transport} /> : null}
          { scene === "4B" ? <TooEarlyCompressions setScene={setScene} /> : null }
          { scene === "4C" ? <TooEarlyBreaths setScene={setScene} /> : null }
          { scene === "4D" ? <TooEarlyCallHelp setScene={setScene} /> : null }
        { scene === "5" ? <InitialVitals setScene={setScene} setPunishmentOpen={setPunishmentOpen} /> : null }
          { scene === "5A" ? <InitialVitalsAgain setScene={setScene} /> : null }
          { scene === "5B" ? <EarlyCompressions setScene={setScene} /> : null }
          { scene === "5C" ? <EarlyBreaths setScene={setScene} /> : null }
        { scene === "6" ? <CallHelp setScene={setScene} transport={transport} setPunishmentOpen={setPunishmentOpen} /> : null }
          { scene === "6A" ? <CallHelpWrong setScene={setScene} /> : null }

        {/* WHY */}
        { scene === "7" ? <PreCPR setScene={setScene} /> : null}
          { scene === "7A" ? <PreCPRA setScene={setScene} /> : null}
          { scene === "7B" ? <PreCPRB setScene={setScene} /> : null}
        { scene === "8" ? <CPR setScene={setScene} /> : null }
        { scene === "9" ? <WhyEnd setScene={setScene} /> : null }

        {/* HOW */}
        { scene === "10" ? <Summary setScene={setScene} /> : null }
        { scene === "11" ? <HowOne setScene={setScene} /> : null }
        { scene === "12" ? <HowTwo setScene={setScene} /> : null }
        { scene === "13" ? <End setScene={setScene} /> : null }

        { isPunishmentOpen ? <PunishmentOne setPunishmentOpen={setPunishmentOpen} /> : null}

        {/* <Navbar />
        <Section id="landing"><Landing /></Section>
        <Section id="what"><WhatSection /></Section>
        <Section id="why"><WhySection /></Section>
        <Section id="how"><HowSection /></Section>            
        <Section id="references"><References /></Section> */}
    </div>
  );
}
