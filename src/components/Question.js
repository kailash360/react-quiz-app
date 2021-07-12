import React from 'react';
import '../static/question.css'

function Question({question,options,key,set_option,update_option_list}){

    const set=(opt)=>{
        set_option(opt)
        update_option_list(opt)
    }

    return(
        <>       
            <div className="question slide-in-right">{"Q. "+question}</div>
            <div className="options-section slide-in-right">
                <button name="option" onClick={()=>{set(options[0])}} className="option">{options[0]}</button>
                <button name="option" onClick={()=>{set(options[1])}} className="option">{options[1]}</button>
                <button name="option" onClick={()=>{set(options[2])}} className="option">{options[2]}</button>
                <button name="option" onClick={()=>{set(options[3])}} className="option">{options[3]}</button>
            </div>
        </>
    )
}

export default Question;