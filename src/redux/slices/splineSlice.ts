import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialState {
    isLoading: boolean;
    progress: number
}

const initialState: initialState = {
    isLoading: false,
    progress: 0,
}

const splineSlice = createSlice({
    name: "spline",
    initialState,
    reducers: {
        loadStart(state) {
            state.isLoading = true;
            state.progress = 0;
        },
        loadProgress(state, action: PayloadAction<number>) {
            state.progress = action.payload;
        },
        loadEnd(state) {
            state.isLoading = false;
            state.progress = 100;
        },
    }
})

export const { loadStart, loadProgress, loadEnd } = splineSlice.actions;

export default splineSlice.reducer;