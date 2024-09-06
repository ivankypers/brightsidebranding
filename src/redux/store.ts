// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './slices/serviceSlice';
// Добавьте другие редьюсеры, если они есть
// import userReducer from './slices/userSlice';

export const store = configureStore({
    reducer: {
        service: serviceReducer,
        // user: userReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
