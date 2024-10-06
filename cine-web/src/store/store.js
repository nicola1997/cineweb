import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./CounterSlice.js";
export default configureStore({
    reducer: {
        counter: counterReducer,
    },

})