// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';
import accordionReducer from "@/redux/slices/accordionSlice";
import cursorSlice from "@/redux/slices/CursorSlice";

export const store = configureStore({
    reducer: {
        service: serviceReducer,
        accordion: accordionReducer,
        cursor: cursorSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
