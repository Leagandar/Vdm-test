import { configureStore } from "@reduxjs/toolkit";
import { documentsReducer } from "./slices/documents";

const store = configureStore({
    reducer: {
        documents: documentsReducer
    }
})

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export { store, type AppState, type AppDispatch }