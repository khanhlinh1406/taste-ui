import { configureStore } from "@reduxjs/toolkit";
import designReducer from "@/app/store/slices/designSlice";

export const store = configureStore({
    reducer: {
        design: designReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;