import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/CounterSlice.js'
import moviesReducer from '../redux/MovieSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
        movies: moviesReducer, // Aggiungi il nuovo reducer per i film

    },
})