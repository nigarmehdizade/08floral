import React from 'react'
import Home from '../pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router'
import Admin from '../pages/admin/Admin'

const Router = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/admin' element={<Admin/>} />
</Routes>
</BrowserRouter>
  )
}

export default Router