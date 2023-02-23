import userSlice from "./reducers/userReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        userReducer: userSlice
    },
});

export default store;