import React from 'react'
import Typical from 'react-typical'

export default function Extra() {
    return (
        <div className="container">
            <div className="narration">
                <Typical 
                    steps={["You're still here?", 3000, "It's over.", 3000, "Go home", 3000]}
                    loop={1}
                    wrapper="p" 
                />
            </div>

        </div>
    )
}
