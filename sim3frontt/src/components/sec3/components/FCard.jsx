import React from 'react'
import styles from './FCard.module.scss'
import { useDispatch } from "react-redux";
import { postBasketThunk } from '../../../redux/reducer/basketSlice';
import { postWishlistThunk, deleteWishlistThunk } from '../../../redux/reducer/wishlistSlice'; // ✅ burda import var

const FCard = ({ item }) => {
    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch(postBasketThunk(item));
    };

    const addToWishlist = () => {
        dispatch(postWishlistThunk(item));
    };

    const handleDelete = () => {
        dispatch(deleteWishlistThunk(item.id)); 
    };

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={addToBasket}>Add To Basket</button>
                <button onClick={addToWishlist}>Add To Wishlist</button>
                <button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default FCard;
