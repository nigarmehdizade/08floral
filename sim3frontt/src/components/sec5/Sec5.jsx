import React from 'react'
import styles from './Sec5.module.scss'
const Sec5 = () => {
  return (
    <div className={styles.container}>
        <div className={styles.yazi}>
            <p>Contacts</p>
            <h1>Our Team</h1>
        </div>
        <div  className={styles.flex}>
        <div className={styles.sekil}>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg" alt="" />
        <h3>Velva Kopf</h3>
        <p>Biologist</p>
        </div>
        <div className={styles.sekil}>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
        <h3>Sarah Palmer</h3>
        <p>Biologist</p>
        </div>
        <div className={styles.sekil}>
            <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg" alt="" />
        <h3>Jessica Swift</h3>
        <p>Photograper</p>
        </div>
      </div>
    </div>
  )
}

export default Sec5
