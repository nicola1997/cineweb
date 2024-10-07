// redux/moviesSlice.js
import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
    name: 'movies',
    initialState: [],
    reducers: {
        setMovies: (state, action) => {
            return action.payload; // Imposta il nuovo stato con i film ottenuti
        },
    },
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
