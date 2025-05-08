import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './Sec3.module.scss'
import { getProductThunk } from '../../redux/reducer/productSlice';
const Sec3 = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);
  
    useEffect(() => {
      dispatch(getProductThunk()); 
    }, []);
  
    if (loading) return <span>Yüklenir...</span>;
    if (error) return <span>Yüklənmir: {error}</span>;
  return (
    <div className={styles.sec6}>
      {data && data.map(item => (
        <div className={styles.cart} key={item._id}>
          <div className={styles.imigic}>
            <img src={item.image} alt={item.name} />
            <span>{item.name}</span>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Sec3
