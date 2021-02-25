import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'



export function Countdown(){
  const {
    minutos, 
    seconds, 
    hasFinished, 
    isActive, 
    startCountdown, 
    resetCountdown
  } = useContext(CountdownContext)

  const [minutoLeft, minutoRight] = String(minutos).padStart(2, '0').split('')
  const [secondLeft, decondRight] = String(seconds).padStart(2, '0').split('')

  

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

      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
        { isActive ? (
          <button 
            type="button" 
            onClick={resetCountdown} 
            className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
          >
          Abandonar Ciclo
          </button>

          ): (
            <button 
              type="button" 
              onClick={startCountdown} 
              className={styles.countdownButton}
            >
            Iniciar Ciclo
            </button>
          )}

        </>
      )}

      
    </div>
  )
}