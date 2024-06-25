import React from 'react'
import { useState ,useCallback } from 'react'
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer.jsx';
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;// acts as an increment
    console.log(userAnswers)
    console.log(activeQuestionIndex)
    console.log(QUESTIONS.length)
    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;// reaches ends of questions
    
    
    const handleSelectAnswer = useCallback( function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => { return [...prevUserAnswer, selectedAnswer] });
        
    },[])
    
    const handleSkipAnswer = useCallback(()=>handleSelectAnswer(null),[handleSelectAnswer]);
    
    if (quizIsComplete) {
        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon"/>
                <h2>Quiz completed</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);// sort answers randomly
    return (
        <div id="quiz">
            <div id="question">
                {/* key will mout new and unmount old one */}
                <QuestionTimer key={activeQuestionIndex} timeout={10000} onTimeout={handleSkipAnswer} />
                <h2>
                    {QUESTIONS[activeQuestionIndex].text}
                </h2>
                <ul id="answers">
                    {shuffledAnswers.map(answer => (
                        <li key={answer} className='answer'>
                            <button onClick={() => { handleSelectAnswer(answer) }} >
                                {answer}
                            </button>
                        </li>))}
                </ul>
            </div >
        </div>
    )
}

