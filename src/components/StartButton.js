import React from 'react'
import '../static/start-button.css'

function StartButton({onClick, start_quiz}){
    return(
        <>
        <div className={"start-section "+(start_quiz?'animate_animated animate__bounceOutUp':'')} >
            <button className="start-button" onClick={onClick}>START</button>
        </div>
        </>
    )
}

export default StartButton;