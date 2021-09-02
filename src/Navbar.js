import React, { useRef, useState } from "react";
import { FaBars } from 'react-icons/fa'



export default function Navbar({ setScene, setTimerPlay, setKey }) {
  
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="navbar">
      { showMore ? 
      <div className="navbar">
        
          <div
            className="navbar-item"
            onClick={() => {
              setScene("1");
              setKey((prevKey) => prevKey + 1);
              setTimerPlay(false);
            }}
          >
            start
          </div>
        
        
        <div
          className="navbar-item"
          onClick={() => {
            setScene("3");
          }}
        >
          what
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            setScene("8");
          }}
        >
          why
        </div>
        <div
          className="navbar-item"
          onClick={() => {
            setScene("11");
          }}
        >
          how
        </div>
        <div className="navbar-item">end</div>
      </div>
      :null }
        
        <div className="navbar-btn-menu" onClick={() => setShowMore(!showMore)}>
          <FaBars className="" />
        </div>
    </div>
  );
}
