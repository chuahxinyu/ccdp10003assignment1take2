import React, { useState } from "react";
import { FaBars, FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

export default function Navbar({ setScene, setTimerPlay, setKey, setIsPlaying, isPlaying }) {
  
  const [showMore, setShowMore] = useState(true)
  return (
    <div className="navbar">
      { showMore ? 
      <div className="navbar">
        
        <div
          className="navbar-item"
          onClick={() => {
            setIsPlaying(!isPlaying)
          }}
        >
          {!isPlaying?
          <FaVolumeMute />
          : <FaVolumeUp /> }
          
        </div>

        <div
          className="navbar-item"
          onClick={() => {
            setScene("1");
            setKey((prevKey) => prevKey + 1);
            setTimerPlay(false);
          }}
        >
          1. start
        </div>
        
        
        <div
          className="navbar-item"
          onClick={() => {
            setScene("2");
          }}
        >
          2. what
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            setScene("7B");
          }}
        >
          7. why
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            setScene("9");
          }}
        >
          9. how
        </div>
        <div className="navbar-item" onClick={() => {
            setScene("10");
          }}>10. end</div>
      </div>
      :null }
        
        <div className="navbar-btn-menu" onClick={() => setShowMore(!showMore)}>
          <FaBars className="" />
        </div>
    </div>
  );
}
