import styles from '../styles/components/Profile.module.css'

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/58645846?s=60&v=4" alt="Leonardo Frasson"/>
      <div>
        <strong>Leonardo Frasson</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}