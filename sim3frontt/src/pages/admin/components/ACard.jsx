import React from 'react'
import styles from '../components/ACard.module.scss'
import {useDispatch} from "react-redux";
import { deleteProductThunk } from '../../../redux/reducer/productSlice';

const ACard = ({item}) => {

    const dispatch = useDispatch()
    const deleteItem = (id) => {
        dispatch( deleteProductThunk(id))
    }

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name}/>
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={() => deleteItem(item._id)}>Delete</button>
            </div>
        </div>
    )
}
export default ACard