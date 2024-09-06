// src/store/slices/serviceSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ServiceState {
    title: string;
    price: string;
    deadline: string;
    description: string;
    imageUrl: string;
}

const initialState: ServiceState = {
    title: '',
    price: '',
    deadline: '',
    description: '',
    imageUrl: ''
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        selectService: (state, action: PayloadAction<ServiceState>) => {
            return { ...action.payload };
        }
    }
});

export const { selectService } = serviceSlice.actions;
export default serviceSlice.reducer;
