import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        accessToken: ''
    },
    reducers: {
        setAuth: (state, action) => {
            state = action.payload
        }
    }
});

export const { setAuth } = authSlice.actions;

export const initLogin = () => {

}

export default authSlice.reducer;