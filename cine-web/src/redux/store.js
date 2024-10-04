import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/CounterSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
    },
})