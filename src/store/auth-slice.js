import { createSlice } from "@reduxjs/toolkit";


const authslice = createSlice({
    name:"auth",
    initialState:{isloggedin:false,email:""},
    reducers:{
        login(state,action){
            state.isloggedin = true;
            state.email = action.payload.email;
        },
        logout(state){
            state.isloggedin = false;
        }
    }
})

export const authactions = authslice.actions;

export default authslice;


