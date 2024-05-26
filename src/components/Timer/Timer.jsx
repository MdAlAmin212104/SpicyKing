import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = ({ expiryTimestamp }) => {
  const { totalSeconds, seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="my-4">
      <div className="text-6xl flex">
        <div className="">
            {days}  <span className="text-[#c33] font-black ml-8">:</span>
            <h1 className="text-xl">Days</h1>
        </div>
        <div className="mx-6">
            {hours} <span className="text-[#c33] font-black ml-8">:</span>
            <h1 className="text-xl">Hours</h1>
        </div>
        <div className="">
            {minutes} <span className="text-[#c33] font-black ml-8">:</span>
            <h1 className="text-xl">Minutes</h1>
        </div>
        <div className="ml-8">
            {seconds} 
            <h1 className="text-xl">Seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default Timer;
