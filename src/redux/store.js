import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/user'
import movieReducer from "./reducers/movie";

export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});