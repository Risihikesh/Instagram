import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/usersSlice";
import postsReducer from "./slices/postsSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        posts: postsReducer,
    }
});

export default store;

