import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/user.slice.js';

export const store = configureStore({
    reducer: {
        userReducer
    },
    devTools: false
});