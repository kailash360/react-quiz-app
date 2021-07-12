import React from 'react'
import '../static/scorebox.css'

function Scorebox({score}) {

    return(
        <>
            <div className="score-container">
                <p>Your score is {score}/10</p>
                <p>{score==10?
                    'You googled the questions, right?':
                    score>5?
                        "Well Done!":
                        score>0?
                            `You seriously need to work on your skills!`:
                            "LMAO!"
                    
                }</p>
            </div>
        </>
    )

}

export default Scorebox;