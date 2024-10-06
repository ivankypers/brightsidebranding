import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface RequestsState {
    name: string | null,
    emailOrTelegram: string | null,
    message: string | null,
}


const initialState: RequestsState = {
    name: '',
    emailOrTelegram: '',
    message: '',
}

const requestsSlice = createSlice({
    name: "requests",
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string | null>) => {
            state.name = action.payload;
        },
        setEmailOrTelegram: (state, action: PayloadAction<string | null>) => {
            state.emailOrTelegram = action.payload;
        },
        setMessage: (state, action: PayloadAction<string | null>) => {
            state.message = action.payload;
        },
        resetForm: (state) => {
            state.name = '';
            state.emailOrTelegram = '';
            state.message = '';
        },
    }
})

export const { setName, setEmailOrTelegram, setMessage, resetForm } = requestsSlice.actions;


export default requestsSlice.reducer;