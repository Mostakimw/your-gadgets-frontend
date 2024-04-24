"use client";
import  { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const EndTimeCounter = () => {
  const [isClient, setIsClient] = useState(false);

  // this is for avoiding react hydrating error
  useEffect(() => {
    setIsClient(true);
  }, []);
    
  // end time of the flash sale
  const endTime = new Date("2024-04-24T14:19:43.000Z");

  // Calculate the remaining time until the flash sale ends
  const remainingTime = endTime.getTime() - Date.now();

  const formatTime = (time: number) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <>
      {isClient ? (
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime / 1000}
          size={80}
          strokeWidth={6}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => formatTime(remainingTime * 1000)}
        </CountdownCircleTimer>
      ) : (
        ""
      )}
    </>
  );
};

export default EndTimeCounter;
