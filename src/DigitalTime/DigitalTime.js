import React, {useState , useEffect} from 'react'
import "./DigitalTime.css"

export const DigitalTime = () => {
    const [time, setTime] =useState(new Date());

    useEffect (()=>{
        const Timer =setInterval(()=>{
            setTime(new Date().toLocaleTimeString([], {hour:"numeric", minute:"2-digit", hour12: true}));
            setTime(new Date());
        } ,[1000]);

        return()=> clearInterval(Timer);
    },[] )

  return (
    <div  className='digital-time-container'>
        <div className='digital-time'>{time.toLocaleTimeString()}</div>
    </div>
  )
};
