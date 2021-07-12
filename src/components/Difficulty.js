import React from 'react';
import '../static/difficulty.css';

function Difficulty({difficulty_level,set_difficulty}) {

    const set_easy = () => {
        set_difficulty(difficulty_level = 'Easy')
    }

    const set_medium=(difficulty_level)=>{
        set_difficulty(difficulty_level='Medium');
    }

    const set_hard=()=>{
        set_difficulty(difficulty_level='Hard')
    }

    return(
        <>
            <ul>
                <li onClick={set_easy} className={(difficulty_level=='Easy')?'selected':''} >Easy</li>
                <li onClick={set_medium} className={(difficulty_level=='Medium')?'selected':''}>Medium</li>
                <li onClick={set_hard} className={(difficulty_level=='Hard')?'selected':''}>Hard</li>
                {console.log(difficulty_level)}
            </ul>
        </>
    )
}

export default Difficulty;