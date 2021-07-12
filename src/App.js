import './static/App.css';
import {useState} from 'react'
import Navbar from './components/Navbar'
import Difficulty from './components/Difficulty'
import QuestionBox from './components/QuestionBox'
import Scorebox from './components/scorebox'

function App() {
    let [difficulty,set_difficulty]=useState('Easy')
    let [option_list,set_option_list]=useState([])
    let [correct_answer_list,set_answer]=useState([])
    let [done,set_done]=useState(false)
    let [score,set_score]=useState(0)

    let update_option_list=(new_option)=>{
      set_option_list([...option_list,new_option])
    }

    let update_correct_answer_list=(new_answer)=>{
      set_answer([...correct_answer_list,new_answer])
    }

    let update_score= async ()=>{
      set_score(score=score+1)
    }

    let calculate= async ()=>{
        console.log(option_list)
        console.log(correct_answer_list)
        for(let i=0;i<option_list.length;i++){
          if(correct_answer_list.includes(option_list[i])){
            await update_score()
          }
        }
        if(score>10){
          set_score(score=10)
        }
        set_done(true)
  }

    return (
      <>
        <Navbar level={difficulty}/>
        <div className="difficulty-section animate_animated animate__backInUp">
          <Difficulty difficulty_level={difficulty} set_difficulty={set_difficulty}/>
        </div>
        {!done?
        <QuestionBox difficulty={difficulty} update_option_list={update_option_list} update_correct_answer_list={update_correct_answer_list} set_done={set_done} calculate={calculate}/>
        :<Scorebox score={score}></Scorebox>
        }
      </>
    );
}

export default App;