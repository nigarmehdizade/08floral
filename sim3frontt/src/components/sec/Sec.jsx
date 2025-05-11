import React from 'react'
import styles from  "./Sec.module.scss"
import { Link } from 'react-router'
const Sec = () => {
  return (
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1>FLORAL STUDIO</h1>
        </div>
    
        <div className={styles.pages}>
            <a href="/">Home</a>
                <Link to="/basket">Basket </Link>
                <Link to="/wishlist">Wishlist </Link>
            </div>
      
    </div>
  )
}

export default Sec
