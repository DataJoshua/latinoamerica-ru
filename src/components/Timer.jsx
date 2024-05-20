import React, { useState, useEffect, useCallback } from 'react';

const Timer = ({ targetHour = 12, targetMinute = 0, targetSecond = 0 }) => {
  const calculateTimeLeft = useCallback(() => {
    const now = new Date();
    const targetTime = new Date(now);
    targetTime.setHours(targetHour, targetMinute, targetSecond, 0);
    
    if (targetTime < now) {
      targetTime.setDate(targetTime.getDate() + 1); // Move to next day if target time is in the past
    }

    const difference = targetTime - now;
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    
    return { hours, minutes, seconds };
  }, [targetHour, targetMinute, targetSecond]) 

  const [time, setTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [calculateTimeLeft]);

  const formatTime = (unit) => {
    return unit.toString().padStart(2, '0');
  };

  return (
    <div className="flex justify-center items-center py-4">
      <h1 className="text-4xl font-bold text-gray-800 bg-white p-4 rounded-lg shadow-lg">
        {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
      </h1>
    </div>
  );
};

export default Timer;
