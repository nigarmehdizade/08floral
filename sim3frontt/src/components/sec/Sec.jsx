import React from 'react'
import styles from  "./Sec.module.scss"
const Sec = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1>FLORAL STUDIO</h1>
        </div>
    
        <div className={styles.pages}>
            <a href="/">Home</a>
                <a href="/about us">About US</a>
                <a href="/portfollo">Portfollo</a>
                <a href="/pricing">Pricing</a>
                <a href="/contact">Contact</a>
            </div>
      
    </div>
  )
}

export default Sec
