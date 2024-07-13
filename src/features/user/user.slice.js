import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
    user: {
        fullName: '',
        username: '',
        email: '',
        avatarUrl: '',
        coverImageUrl: '',
        watchHistory: [],
    },
    isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,             
    reducers: {
        userLogin: (state, action) => {        
            state.user.fullName= action.payload.fullName,
            state.user.username= action.payload.username,
            state.user.email= action.payload.email,
            state.user.avatarUrl= action.payload.avatarUrl,
            state.user.coverImageUrl= action.payload.coverImageUrl,
            state.user.watchHistory= action.payload.watchHistory,
            state.isLogin = true
        },
        userLogout: (state) => {
            state.user.fullName= '',
            state.user.username= '',
            state.user.email= '',
            state.user.avatarUrl= '',
            state.user.coverImageUrl= '',
            state.user.watchHistory= [],
            state.isLogin = false
        },
        userSignup: (state, action) => {
            state.user.fullName= action.payload.fullName,
            state.user.username= action.payload.username,
            state.user.email= action.payload.email,
            state.user.avatarUrl= action.payload.avatarUrl,
            state.user.coverImageUrl= action.payload.coverImageUrl,
            state.user.watchHistory= action.payload.watchHistory,
            state.isLogin = true
        }
    }
});

export const {userLogin, userLogout, userSignup} = userSlice.actions;

export default userSlice.reducer;