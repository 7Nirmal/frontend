import { configureStore } from "@reduxjs/toolkit";
import authslice from "./auth-slice";




export const store = configureStore({
    reducer:{auth:authslice.reducer}
})