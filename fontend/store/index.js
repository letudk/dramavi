import {configureStore, createrSlice} from "@reduxjs/toolkit";

const authSlice = createrSlice({
    name: 'login',
    initialState:{isLoggedIn: false},
    reducers:{
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        },
    },
});
export const authAction = authSlice.actions;
export const store = configureStore({
    reducer: authSlice.reducer
});