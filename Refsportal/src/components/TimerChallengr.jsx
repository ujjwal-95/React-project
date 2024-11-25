import { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title,targetTime}){
  const timer=useRef();
  const dialog=useRef();
  const[timeRemaining,setTimeRemaining]=useState(targetTime*100);

const timerIsActive=timeRemaining>0 && timeRemaining<targetTime*1000;

if(timeRemaining<=0){
  clearInterval(timer.current);
  setTimeRemaining(targetTime*1000);
  dialog.current.open();
}

    function handleStart(){
      timer.current= setInterval(()=>{
          setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10);
        },10);
        setTimerstarted(true);
    }
   
    function handleStop(){
        clearInterval(timer.current);
    }

   return(
    <>
   <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} />
   <section className="challenge">
       <h2>{title}</h2>
      
       <p className="challenge-time">
         {targetTime} second{targetTime>1?'s':''}
       </p>
       <p>
        <button onClick={timerIsActive?handleStop:handleStart}>
            {timerIsActive?'stop':'start'} Challenge
        </button>
       </p>
       <p className={timerIsActive?'active':undefined}>
        {timerIsActive?'Time is running...': 'Timer inactive'}
       </p>
   </section> 
   </>
   );
}