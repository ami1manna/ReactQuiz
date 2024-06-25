import React from 'react'
import QuestionTimer from './QuestionTimer'
import Answer from './Answer'

const Question = ({
    questionText,
    answers,
    onSelectAnswer,
    selectedAnswer,
    answerState,
    onSkipAnswer,
}) => {
  return (
    <div id="question">
    {/* key will mout new and unmount old one */}
    <QuestionTimer 
    
    timeout={10000} 
    onTimeout={onSkipAnswer} />

    <h2>
        {questionText}
    </h2>

   <Answer 
   
   answers={answers} 
   selectedAnswer={selectedAnswer} 
   answerState={answerState} 
   onSelect={onSelectAnswer} />
</div >
  )
}

export default Question
