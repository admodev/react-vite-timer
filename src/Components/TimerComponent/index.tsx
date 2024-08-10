import React, { useEffect, useState } from 'react';

import styles from './Timer.module.css';

const TimerComponent: React.FC = () => {
  const [minutes, setMinutes] = useState(32);
  const [seconds, setSeconds] = useState(7);

  useEffect(() => {
    if (minutes === 0 && seconds === 0) {
      return;
    }

    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [minutes, seconds]);

  return(
    <div className={styles.timerContainer}>
      <div className={styles.titleContainer}>
        <div className={styles.ellipse}></div>
        <h1 className={styles.title}>UI Design</h1>
      </div>
      <div className={styles.timerInnerContainer}>
        <div className={styles.timer}>
          <h1 className={styles.timerText}>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </div>
      </div>
    </div>
  );
}

export default TimerComponent;
