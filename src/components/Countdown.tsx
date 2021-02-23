import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown(){
  const [time, setTime] = useState(25 * 60)

  const [active, setActive] = useState(false)

  const minutos = Math.floor(time/60);
  const seconds = time % 60;

  const [minutoLeft, minutoRight] = String(minutos).padStart(2, '0').split('')
  const [secondLeft, decondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown(){
    setActive(true)
  }

  useEffect(() => {
    if(active && time > 0){
      setTimeout(() => {
        setTime(time-1)
      }, 1000)
    }
  }, [active, time])

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minutoLeft}</span>
          <span>{minutoRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{decondRight}</span>
        </div>
      </div>

      <button 
        type="button" 
        onClick={startCountdown} 
        className={styles.countdownButton}>
          Iniciar um ciclo
      </button>
    </div>
  )
}