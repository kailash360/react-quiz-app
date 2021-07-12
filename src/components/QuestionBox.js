import React,{Component} from 'react';
import { useState } from 'react';
import Question from './Question'
import StartButton from './StartButton'
import OperateSection from './OperateSection'
import '../static/question-box.css'

class QuestionBox extends Component{
    constructor(){
        super();
        this.state={
            questionList:[],
            q:"",
            i:0,
            all_done:false,
            start:false,
            option:""
        };
        this.fix_string=this.fix_string.bind(this)
        this.next_question=this.next_question.bind(this)
        this.start_quiz=this.start_quiz.bind(this)
        this.set_option=this.set_option.bind(this)
    }

    /*Function to fix the string*/
    fix_string(s){
        s.replaceAll("&quot;",'"')
        s.replaceAll(/(&amp\;)/g,'&');
        s.replaceAll(/(&#039\;)/g,"'");
        return s;
    };

    next_question=()=>{
        if(this.state.i<9){
            this.setState({i:(this.state.i+1)})
        }
        if(this.state.i==8){
            this.setState({all_done:true})
        }
    }

    /*Start button to begin the quiz*/
    start_quiz=()=>{
        this.setState({start:true})

        /*Different parameters based on user's choice*/
        const filters = {
            difficulty: String(this.props.difficulty).toLowerCase(),
        };

        /*Couldn't use POST using params due to CORS Error :(*/
        fetch(`https://opentdb.com/api.php?type=multiple&amount=10&difficulty=${filters.difficulty}`)
        .then(data=>data.json())
        .then((response)=>{
            this.setState({questionList:response.results});
            for(let i of this.state.questionList){
                this.props.update_correct_answer_list(i.correct_answer)
        }
        });
        
    }

    set_option=(value)=>{
        this.state.option=value
    }


    render(){
        return(
                <>
                    <div className="question-box animate__animated animate__backInUp">
                    {
                        this.state.start?    
                            <><div>
                                {/* Adding each question on clicking next  */}
                                {(this.state.questionList.length>0)
                                    ?<Question 
                                        question={this.fix_string(String(this.state.questionList[this.state.i].question))} 

                                        {...this.state.questionList[this.state.i].incorrect_answers.
                                            push(this.state.questionList[this.state.i].correct_answer)}

                                        options={this.state.questionList[this.state.i].incorrect_answers}
                                        key={this.state.i}
                                        set_option={this.set_option}
                                        update_option_list={this.props.update_option_list}
                                        />
                                    :''
                                }
                            </div>
                            <OperateSection i={this.state.i} all_done={this.state.all_done} next_question={this.next_question} calculate={this.props.calculate} set_done={this.props.set_done}/>
                            </>
                        :<StartButton start_quiz={this.state.start} onClick={this.start_quiz}/>
                    }
                    </div>
                </>
            );
        }
}

export default QuestionBox;