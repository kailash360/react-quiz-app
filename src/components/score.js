import React, { Component } from 'react';
import '../static/scorecard.css'


class scorecard extends Component{
    constructor(){
        this.score=this.score.bind(this)
        
    }
    
    score=()=>{
        
    }


    render(){
        return(<>
            <div className="score-container">
                <p>Your score is</p>
                <p className="score">5</p>
            </div>
        
        </>)
    }
}