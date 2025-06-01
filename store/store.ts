import { configureStore } from '@reduxjs/toolkit';

//Import your slices here
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    });

    // Types for hooks (Optional for Ts projects)

    export type RootState = ReturnType<typeof store.getState>;
    export type AppDispatch = typeof store.dispatch;