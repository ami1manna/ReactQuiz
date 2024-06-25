import React from 'react'
import { useState,useEffect } from 'react';

const QuestionTimer = ({timeout,onTimeout}) => {
    const [remainingTime,setRemainingTime] = useState(timeout);
    
    useEffect(()=>{
        console.log('timeout');
        const time = setTimeout(onTimeout,timeout);
        return ()=>{clearTimeout(time); console.log('clear timeout');}

    },[timeout,onTimeout]);
     
    useEffect(()=>{
        console.log('setinterval');
        const interval = setInterval(()=>{
        setRemainingTime((prev)=>prev-100)
        },100);
        return ()=>{console.log("clear interval"); clearInterval(interval)};
    },[]); //useEffect
    

    return <progress id='question-timer' max={timeout} value={remainingTime}/>
            
}

export default QuestionTimer
