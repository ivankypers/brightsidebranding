import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface cursorState {
    cursorVariant: string | null,
    cursorText: string | null,

}

const initialState: cursorState = {
    cursorVariant: 'default',
    cursorText: '',

}

const cursorSlice = createSlice({
    name: "cursor",
    initialState,
    reducers: {
        setCursorVariant: (state, action: PayloadAction<string | null>) => {
            state.cursorVariant = action.payload;
        },
        setCursorText: (state, action: PayloadAction<string | null>) => {
            state.cursorText = action.payload;
        }
    }

})

export const {setCursorVariant, setCursorText} = cursorSlice.actions;

export default cursorSlice.reducer;