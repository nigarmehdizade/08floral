import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Sec3.module.scss'
import { getProductThunk } from '../../redux/reducer/productSlice';

const Sec3 = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const error = useSelector(state => state.product.error);

  const [basket, setBasket] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    dispatch(getProductThunk());
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setBasket(storedBasket);
    setWishlist(storedWishlist);
  }, [dispatch]);

  const handleAddToBasket = (product) => {
    if (!basket.find(item => item._id === product._id)) {
      const updated = [...basket, product];
      setBasket(updated);
      localStorage.setItem("basket", JSON.stringify(updated));
    }
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.find(item => item._id === product._id)) {
      const updated = [...wishlist, product];
      setWishlist(updated);
      localStorage.setItem("wishlist", JSON.stringify(updated));
    }
  };

  if (loading) return <span>Yüklənir...</span>;
  if (error) return <span>Yüklənmədi: {error}</span>;

  return (
    <div className={styles.sec6}>
      {data && data.map(item => (
        <div className={styles.cart} key={item._id}>
          <div className={styles.imigic}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.price} AZN</span>
            <div className={styles.btns}>
              <button onClick={() => handleAddToBasket(item)}>Səbətə əlavə et</button>
              <button onClick={() => handleAddToWishlist(item)}>Favoriyə əlavə et</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sec3;
