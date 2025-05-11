import React from 'react'
import style from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={style.main}>
            <div className={style.f}>
                <div className={style.imgbox}>
                    <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                </div> 

                <div className={style.down}>
                    <input type="text" placeholder='Your Email'/>
                    <button>Send</button>
                </div>

            </div> 
            <div className={style.s}>
                <p>About</p> 
                <a href="#">About us</a>
                <a href="#">Our Partners</a>
                <a href="#">Our Services</a>
            </div>
            <div className={style.t}>
                <p>Contact</p> 
                <a href="#">Contact us</a>
                <a href="#">FAQ Page</a>
                <a href="#">About Me</a>
            </div>
            <div className={style.fo}>
                <p>Follow us</p> 
            </div>
        </div>
  )
}

export default Footer