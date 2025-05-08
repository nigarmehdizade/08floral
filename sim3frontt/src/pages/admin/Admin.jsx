import React, { useEffect } from 'react';
import styles from './Admin.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
// import {
//   createProduct,
//   deleteProductThunk,
//   updateProduct
// } from '../redux/reducer/productSlice';
import axios from 'axios';
import { deleteProductThunk, getProductThunk } from '../../redux/reducer/productSlice';

const Admin= () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductThunk());
  }, [dispatch]);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Ad çox qısadır')
      .required('Ad boş ola bilməz'),
    description: Yup.string()
      .min(2, 'Təsvir çox qısadır')
      .required('Təsvir boş ola bilməz'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post('http://localhost:5000/pro', values);
        dispatch(createProduct(response.data));
        resetForm();
      } catch (error) {
        console.error('Yeni məhsul əlavə olunarkən xəta:', error);
      }
    },
  });

  if (loading) return <p>Yüklənir...</p>;

  return (
    <div className={styles.dashboard}>
      <h1>Admin Panel</h1>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <label htmlFor="name">Məhsul Adı</label>
        <input
          id="name"
          name="name"
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <div className={styles.error}>{formik.errors.name}</div>
        )}

        <label htmlFor="description">Təsvir</label>
        <input
          id="description"
          name="description"
          type="text"
          {...formik.getFieldProps('description')}
        />
        {formik.touched.description && formik.errors.description && (
          <div className={styles.error}>{formik.errors.description}</div>
        )}

        <button type="submit" className={styles.submitBtn}>Əlavə et</button>
      </form>

      <ul className={styles.categoryList}>
        {items.map((item) => (
          <li key={item._id} className={styles.categoryItem}>
            <span>{item.name} - {item.description}</span>
            <div className={styles.buttonGroup}>
              <button
                onClick={() => dispatch(deleteProductThunk(item._id))}
                className={styles.deleteBtn}
              >
                Sil
              </button>
              <button
                onClick={() =>
                  dispatch(updateProduct({
                    id: item._id,
                    name: 'Yenilənmiş ad',
                    description: 'Yenilənmiş təsvir'
                  }))
                }
                className={styles.editBtn}
              >
                Redaktə et
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
