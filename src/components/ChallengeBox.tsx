import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
  const {activeChallenge, resetChallenge, completeChallenge} = useContext(ChallengesContext)
  const {resetCountdown} = useContext(CountdownContext)

  function handleChallengeSucceded(){
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed(){
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=" "/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeFailedButton}
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
              className={styles.challengeSucceededButton}
              type="button"
              onClick={handleChallengeSucceded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (

        <div className={styles.challengeNotActive}>
          <strong>Finalize um cilco para receber um desaio</strong>
          <p>
            <img src="icons/level-up.svg" alt="LEvel up"/>
            Avance de level completando desafios.
          </p>
       </div>
      )}
      
    </div>
  )
}