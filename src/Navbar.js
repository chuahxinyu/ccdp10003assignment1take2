import React from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar({ setState }) {
    return (
        <div className="navbar">
            <div className="navbar-item">start</div>
            <div className="navbar-item">what</div>
            <div className="navbar-item">why</div>
            <div className="navbar-item">how</div>
            <div className="navbar-item">end</div>
            <div className="navbar-item">
                <FaBars className="" />
            </div>
            
        </div>
    )
}
