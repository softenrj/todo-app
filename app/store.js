import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlicer";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    }
});