import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../pages/home/Home';
import NotFound from '../pages/NotFound';
import Basket from '../pages/basket/Basket';
import Wishlist from '../pages/wishlist/Wishlist';
import Admin from '../pages/admin/Admin';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/basket' element={<Basket/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
