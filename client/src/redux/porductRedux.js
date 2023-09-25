import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchProduct = createAsyncThunk('get/getProddct', async () => {
    try {
        const response = await axios.get("/api/product")
        return response.data
    } catch (err) {
        console.log(err)
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        totalproduct: 0,
        loading: false,
        position: "grid",
    },
    loading: false,
    reducers: {
        changePosition: (state, action) => {
            state.position = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.loading = true
        })

        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.loading = false;
            // state.totalproduct = action.payload.length;
            if (action.meta.arg == "ALL") {
                state.product = action.payload.filter((items) => { return items })
                state.totalproduct = state.product.length
            } else {
                state.product = action.payload.filter((items) => { return items.category === action.meta.arg })
                state.totalproduct = state.product.length
            }
        })
    }
})

export const { changePosition } = productSlice.actions
export default productSlice.reducer;