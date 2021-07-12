import React from 'react'
import '../static/operate-section.css'


function OperateSection ({i,all_done,next_question,calculate,set_done}){

    return(
        <>
            <div className="operate-section">
                <button className="operate" id="submit" onClick={()=>{
                    console.log("Submitting")
                    calculate()
                }}>Submit</button>
                <span className="questionNumber">{"Question: "+(parseInt(i)+1)+"/10"}</span>
                <button className={"operate "+(all_done?"all-done":'')} id="next" onClick={()=>{next_question()}}>Next</button>
            </div>
        </>
    )
}

export default OperateSection;