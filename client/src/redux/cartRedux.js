import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) => {

            const itemIndex = state.products.findIndex(
                (item) => item.productcode === action.payload.product.productcode
            )

            if (itemIndex >= 0) {
                state.products[itemIndex].quantity += 1
            } else {
                state.quantity += 1;
                state.products.push(action.payload.product);
                state.total += action.payload.price;
            }
        },
        updateProduct: (state, actions) => {
            state.products = state.products.map((item) =>
                item.productcode == actions.payload.productcode ? actions.payload : item
            )
            state.total += state.price * state.quantity
        }
    }

})

export const { addProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;