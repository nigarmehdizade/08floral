import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk=createAsyncThunk('./product/get',async()=>{
    const res=await axios.get("http://localhost:5000/pro")
    return res.data
})
export const postProductThunk=createAsyncThunk('/product/post',async()=>{
    await axios.post("http://localhost:5000/pro")
    return res.data
})
export const deleteProductThunk =createAsyncThunk('/product/delete',async()=>{
    await axios.delete("http://localhost:5000/pro")
    return id
})
const productSlice=createSlice({
    name:'product',
    initialState:{},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getProductThunk.pending, (state) => {
            state.loading = true;
          })
          .addCase(getProductThunk.fulfilled, (state, action) => {
            state.loading = false; 
            state.products = action.payload; 
          })
          .addCase(getProductThunk.rejected, (state, action) => {
            state.loading = false;  
            state.error = action.error.message;
        })
       .addCase(postProductThunk.fulfilled,(state,action)=>{
        state.loading= false;
        state.products.push(action.payload)
       })
    }
})

export default productSlice.reducer