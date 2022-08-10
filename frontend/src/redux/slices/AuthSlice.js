import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    auth: false,
    authToken: null
}

export const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.auth = true;
            state.authToken = actions.payload.token;
        },
        logout: (state) => {
            state.auth = false;
            state.authToken = null
        }
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;