// src/store/splineSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SplineState {
    modelLoaded: boolean;
}

const initialState: SplineState = {
    modelLoaded: false,
};

const splineSlice = createSlice({
    name: 'spline',
    initialState,
    reducers: {
        setModelLoaded: (state, action: PayloadAction<boolean>) => {
            state.modelLoaded = action.payload;
        },
    },
});

export const { setModelLoaded } = splineSlice.actions;
export default splineSlice.reducer;
