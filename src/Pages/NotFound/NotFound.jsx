import React from 'react'
import styles from "./NotFound.module.css"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.fullScreenBackground}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          Go Back
        </button>
    </div>
  )
}

export default NotFound