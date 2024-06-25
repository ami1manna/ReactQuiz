import { useRef } from "react";

const Answer = ({answers,selectedAnswer,answerState,onSelect}) => {
    const shuffledAnswers = useRef();

    if(!shuffledAnswers.current){
        console.log(shuffledAnswers.current)
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);// sort answers randomly
    }

  return (
    <>
       <ul id="answers">
                    {shuffledAnswers.current.map(answer => {
                        const isSelected = selectedAnswer === answer;
                        let cssClasses = '';
                        if(answerState === 'answered' && isSelected){
                            cssClasses = ' selected';
                        }
                        if((answerState==='correct'||answerState==='wrong')&& isSelected){
                           cssClasses = answerState;
                        }

                        return (
                        <li key={answer} className='answer'>
                            <button onClick={() => { onSelect(answer) }} className={cssClasses } >
                                {answer}
                            </button>
                        </li>
                        )
                    }
                    )}
                </ul>
    </>
  )
}

export default Answer
