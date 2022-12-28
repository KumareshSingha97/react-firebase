
import { createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
    name: 'common',
    initialState: {
        user: null,
       
    },
    reducers: {
        setUser: (state, { payload }) => {
            state.user = payload;
        },
        logout: (state) => {
            state.user = null;
        }

    }
});


// Action creators are generated for each case reducer function
export const { setUser, logout} = userSlice.actions;

export default userSlice.reducer;