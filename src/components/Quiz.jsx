import React from 'react'
import { useState, useCallback,useRef } from 'react'
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import Question from './Question.jsx'

export default function Quiz() {
    
   
    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;// acts as an increment

    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;// reaches ends of questions


    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
        
        setUserAnswers((prevUserAnswer) => { return [...prevUserAnswer, selectedAnswer] });

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz completed</h2>
            </div>
        )
    }
    
    return (
        <div id="quiz">
            <Question 
            key={activeQuestionIndex}
            index={activeQuestionIndex}
            onSelectAnswer={handleSelectAnswer}
            onSkipAnswer={handleSkipAnswer}
            />
        </div>
    )
}

