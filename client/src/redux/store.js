import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import productReducer from './porductRedux';

export default configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }

})