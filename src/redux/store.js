import { configureStore } from "@reduxjs/toolkit";
import cartSlicer from "./cartSlicer";

export default configureStore({
    reducer: {
        cart: cartSlicer
    }
})