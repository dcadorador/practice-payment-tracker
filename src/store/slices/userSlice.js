import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        token: localStorage.getItem('token') || null,
    },
    reducers: {
        login(state, action) {
            localStorage.setItem('token',action.payload);
            state.token = action.payload;
        },
        logout(state, action) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        update(state, action) {
            state.user = action.payload;
            localStorage.setItem('user',JSON.stringify(action.payload));
        },
    }
})

export const { login, logout, update } = userSlice.actions;
export const userReducer = userSlice.reducer;