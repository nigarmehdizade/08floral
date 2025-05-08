import React from 'react'
import styles from './Sec4.module.scss'
const Sec4 = () => {
  return (
    <div className={styles.page}>
      <div className={styles.txt}>
        <p>Devoted to wonderful beauty</p>
        <h1>Events Pricing</h1>
      </div>

      <div className={styles.cartlar}>
        <div className={styles.card}>
            <p>$16 <span>per table</span></p>
            <h3>Birthday Events</h3>
            <p>Lorem ipsum dolor sit amet  <br />laudem partem perfecto per</p>
            <button>Shop now</button>
        </div>
        <div className={styles.card}>
            <p>$31 <span>per table</span></p>
            <h3>Weddinbg Events</h3>
            <p>Lorem ipsum dolor sit amet  <br />laudem partem perfecto per</p>
            <button>Shop now</button>
        </div>
        <div className={styles.card}>
            <p>$52 <span>per table</span></p>
            <h3>Party Events</h3>
            <p>Lorem ipsum dolor sit amet  <br />laudem partem perfecto per</p>
            <button>Shop now</button>
        </div>
      </div>
      
    </div>
  )
}

export default Sec4
