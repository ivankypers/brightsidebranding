import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface initialState {
    isLoading: boolean;
}

const initialState: initialState = {
    isLoading: true,
}

const splineSlice = createSlice({
    name: "spline",
    initialState,
    reducers: {
        setLoaded: (state, action: PayloadAction<boolean | any>) => {
            state.isLoading = action.payload;
        }
    }
})

export const { setLoaded } = splineSlice.actions;

export default splineSlice.reducer;