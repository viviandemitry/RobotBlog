import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: 'vivian@hotmail.com',

};

const sliceReducer = createSlice ({
    name:"rootReducer",
    initialState,
    reducers: {
        GetEmail: (state, action) => {
            state.email = action.payload;
        }

    }
})

export const { GetEmail } = sliceReducer.actions;

export default sliceReducer.reducer;