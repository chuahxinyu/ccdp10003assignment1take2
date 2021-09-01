import './App.css';
import { useState } from 'react'


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

import Compressions from './Why/Compressions'
import Breaths from './Why/Breaths'
import Vitals from './Why/Vitals'
import WhyEnd from './Why/WhyEnd'

import Summary from './How/Summary'
import HowOne from './How/HowOne'
import HowTwo from './How/HowTwo'
import End from './How/End'

export default function App() {
  const [timerPlay, setTimerPlay] = useState(false)
  const [scene, setScene] = useState("4Aa")
  const [transport, setTransport] = useState("bus")
  return (
    <div className="App">
        
        { scene !== "0" ? <Navbar setScene={setScene} timerPlay={timerPlay}/> : null}
        <div className="anatomy-background-1"></div>
        { scene === "0" ? <LoadingScreen setScene={setScene} /> : null }
        { scene === "1" ? <Landing setScene={setScene} /> : null }

        {/* WHAT */}
        { scene === "3" ? <BusOrTram setScene={setScene} setTransport={setTransport} /> : null }
        { scene === "4" ? <Collapse setScene={setScene} setTimerPlay={setTimerPlay} /> : null }
          { scene === "4A" ? <TimerEnd setScene={setScene} transport={transport} /> : null }
            { scene === "4Aa" ? <BystanderEffect setScene={setScene} transport={transport} /> : null}
          { scene === "4B" ? <TooEarlyCompressions setScene={setScene} /> : null }
          { scene === "4C" ? <TooEarlyBreaths setScene={setScene} /> : null }
          { scene === "4D" ? <TooEarlyCallHelp setScene={setScene} /> : null }
        { scene === "5" ? <InitialVitals setScene={setScene} /> : null }
          { scene === "5A" ? <InitialVitalsAgain setScene={setScene} /> : null }
          { scene === "5B" ? <EarlyCompressions setScene={setScene} /> : null }
          { scene === "5C" ? <EarlyBreaths setScene={setScene} /> : null }
        { scene === "6" ?  <CallHelp setScene={setScene} transport={transport}/> : null }
          { scene === "6A" ? <CallHelpWrong setScene={setScene} /> : null }

        {/* WHY */}
        { scene === "7" ? <Compressions setScene={setScene} /> : null }
        { scene === "8" ? <Breaths setScene={setScene} /> : null }
        { scene === "9" ? <Vitals setScene={setScene} /> : null }
        { scene === "10" ? <WhyEnd setScene={setScene} /> : null }

        {/* HOW */}
        { scene === "11" ? <Summary setScene={setScene} /> : null }
        { scene === "12" ? <HowOne setScene={setScene} /> : null }
        { scene === "13" ? <HowTwo setScene={setScene} /> : null }
        { scene === "14" ? <End setScene={setScene} /> : null }

        {/* <Navbar />
        <Section id="landing"><Landing /></Section>
        <Section id="what"><WhatSection /></Section>
        <Section id="why"><WhySection /></Section>
        <Section id="how"><HowSection /></Section>            
        <Section id="references"><References /></Section> */}
    </div>
  );
}
