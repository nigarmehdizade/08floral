import React, { useEffect } from 'react';
import styles from './Sec3.module.scss';
import { useDispatch, useSelector } from "react-redux";
import FCard from './components/FCard.jsx';
import { getProductThunk } from '../../redux/reducer/productSlice.js';

const Sec3 = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p id={styles.top}>Devoted to wonderful beauty</p>
          <h2>Our Portfolio</h2>
        </div>
        <div className={styles.cards}>
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {products?.map(item => (
            <FCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sec3;
