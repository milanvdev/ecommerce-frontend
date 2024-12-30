import {configureStore} from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice.jsx"

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});
