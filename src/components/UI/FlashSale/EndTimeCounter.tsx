"use client";
import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";



const EndTimeCounter = () => {
  const [isClient, setIsClient] = useState(false);

  // this is for avoiding react hydrating error
  useEffect(() => {
    setIsClient(true);
  }, []);

  //! Please Read: It will calculate the time based on todays time not 2/3/4 days time.
  // end time of the flash sale
  const endTime = new Date("2024-05-02T00:00:00");
  const currentTime = new Date()

  // calculate the remaining time until the flash sale ends
  const remainingTime = endTime.getTime() - currentTime.getTime()

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
          size={100}
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
