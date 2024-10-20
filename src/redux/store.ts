// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';
import accordionReducer from "@/redux/slices/accordionSlice";
import cursorSlice from "@/redux/slices/CursorSlice";
import splineSlice from "@/redux/slices/splineSlice";
import requestsSlice from "@/redux/slices/RequestsSlice";

export const store = configureStore({
    reducer: {
        service: serviceReducer,
        accordion: accordionReducer,
        cursor: cursorSlice,
        spline: splineSlice,
        requests: requestsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
