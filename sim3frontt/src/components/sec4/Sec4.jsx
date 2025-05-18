import React from 'react'
import styles from './Sec4.module.scss'
const Sec4 = () => {
  return (
     <div className={styles.container}>
        <div className={styles.content}>
            <div className={styles.title}>
                <h3 id={styles.top}>Devoted to wonderful beauty</h3>
                <h3>Events Pricing</h3>
            </div>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <h6><span id={styles.big}>$16</span> per table</h6>
                    <p id={styles.top}>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.card}>
                    <h6><span id={styles.big}>$16</span> per table</h6>
                    <p id={styles.top}>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.card}>
                    <h6><span id={styles.big}>$16</span> per table</h6>
                    <p id={styles.top}>Birthday Events</p>
                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sec4
