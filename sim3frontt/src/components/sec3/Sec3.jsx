import React, {useEffect} from 'react'
import styles from './Sec3.module.scss'
import {useDispatch, useSelector} from "react-redux";
import { getProductThunk } from '../../redux/reducer/productSlice';
import FCard from './components/FCard.jsx';


const Sec3 = () => {

    const dispatch = useDispatch()

    const data = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])


    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <p id={styles.top}>Devoted to wonderful beauty</p>
                    <h2>Our Portfolio</h2>
                
                </div>
                <div className={styles.cards}>
                    {data?.map(item => <FCard item={item} />)}
                </div>
            </div>
        </div>
    )
}
export default Sec3
