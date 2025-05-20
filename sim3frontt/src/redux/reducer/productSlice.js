import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk('pro/get', async () => {
    const res = await axios.get("http://localhost:5000/pro");
    return res.data;
});

export const postProductThunk = createAsyncThunk('pro/post', async (data) => {
    const res = await axios.post("http://localhost:5000/pro", data);
    return res.data;
});

export const deleteProductThunk = createAsyncThunk('pro/delete', async (id) => {
    await axios.delete(`http://localhost:5000/pro/${id}`);
    return id;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
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
            .addCase(postProductThunk.fulfilled, (state, action) => {
                state.products.push(action.payload);
            })
            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.products = state.products.filter(item => item.id !== action.payload);
            });
    }
});

export default productSlice.reducer;
