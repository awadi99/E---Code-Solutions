import { configureStore } from "@reduxjs/toolkit";
import cartreducer from './slice'
const store =configureStore({
    reducer:{
        cart:cartreducer
    }
})

export default store;