import React from 'react'
import Typical from 'react-typical'
import FadeIn from 'react-fade-in'

export default function BystanderEffect({ setScene, transport, setKey }) {
    return (
        <div className="container">
            <div className="question">
                <h2>What kind of game is this?</h2>
            </div>
            <div className="narration">
                <p>Unlike reality, the game gives players freedom for trial, error and an opportunity to learn</p>
            </div>
            <div className="divider"></div>
            <FadeIn delay="1000" transitionDuration="1000">
                <div className="story">
                    <p className="story-text">Well, looks like time ran out.</p>
                    <br></br>
                    <p className="story-text">Hopefully, you were able to complete the pitch before this happened and my horrific coding skills just forgot to stop the countdown.</p>
                    <br></br>
                    <p className="story-text">But if you did nothing in the pitch and just waited for the timer to run out, here's a fun fact for you: The Bystander Effect is the idea that people are less likely to offer help if there are other people around - the more bystanders, the less likely it is that one will stop to help. When you do nothing, it is highly likely that other people/NPCs will do nothing too. Thousands of lives are lost due to this phenomenon, including the person who collapsed in your {transport} ride.</p>
                    <div className="story-choices-container">
                        <div className={`story-choice active`} onClick={() => { setScene("1"); setKey((prevKey) => prevKey + 1); }}>
                            <p>Rewind Time</p>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    )
}
