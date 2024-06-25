import QuestionTimer from './QuestionTimer'
import Answer from './Answer'
import QUESTIONS from '../questions.js'
import { useState } from 'react'
const Question = ({
    index,
    onSelectAnswer,
    onSkipAnswer,
}) => {
    //state
    const [answer,setAnswer] = useState(
        {
            selectedAnswer:'',
            isCorrect:null
        }
    );

    function handleSelectAnswer(answer){
        setAnswer({
            selectedAnswer: answer,
            isCorrect:null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect:QUESTIONS[index].answers[0] === answer
            })

            setTimeout(() => {onSelectAnswer(answer)},2000); 
        },1000);
    }

    let answerState ='';
    if(answer.selectedAnswer&& answer.isCorrect!== null){
        answerState = answer.isCorrect?'correct':'wrong';
    }
    else if(answer.selectedAnswer){
        answerState = 'answered'
    }
  return (
    <div id="question">
    {/* key will mout new and unmount old one */}
    <QuestionTimer 
    
    timeout={10000} 
    onTimeout={onSkipAnswer} />

    <h2>
        {QUESTIONS[index].text}
    </h2>

   <Answer 
   
   answers={QUESTIONS[index].answers} 
   selectedAnswer={answer.selectedAnswer} 
   answerState={answerState} 
   onSelect={handleSelectAnswer} />
</div >
  )
}

export default Question
