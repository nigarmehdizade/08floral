import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  postProductThunk } from '../../redux/reducer/productSlice';
import { useFormik } from 'formik';

const Admin = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.product.products);
  const loading = useSelector(state => state.product.loading);
  const error = useSelector(state => state.product.error);

  useEffect(() => {
    dispatch(postProductThunk());
  }, [dispatch]);

  if (loading) return <span>Yüklənir...</span>;
  if (error) return <span>Yüklənmir: {error}</span>;

  const formik = useFormik({
    initialValues: {
      Name: '',
      Price: '',
      Image: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="Name">Name</label>
      <input
        id="Name"
        name="Name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Name}
      />
      <label htmlFor="Price">Price</label>
      <input
        id="Price"
        name="Price"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Price}
      />
      <label htmlFor="Image">Image</label>
      <input
        id="Image"
        name="Image"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.Image}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Admin;
