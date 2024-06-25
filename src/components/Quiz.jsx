import React from 'react'
import { useState } from 'react'
import QUESTIONS from '../questions.js'
import quizCompleteImg from '../assets/quiz-complete.png'
export default function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);
    const activeQuestionIndex = userAnswers.length;// acts as an increment

    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;// reaches ends of questions
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

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswers((prevUserAnswer) => { return [...prevUserAnswer, selectedAnswer] });

    }
    return (
        <div id="quiz">
            <div id="question">
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

