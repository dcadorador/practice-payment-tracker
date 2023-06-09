import { configureStore } from '@reduxjs/toolkit';
import {
    login,
    logout,
    update,
    userReducer,
} from "./slices/userSlice";

const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export { store, login, logout, update };