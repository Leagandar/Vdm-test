import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Document } from '../../types'
import { fetchDocuments, cancelDocuments } from "../../API/DocumentsService";

interface DocumentsState {
    documents: {
        data: Document[],
        status: 'idle' | 'loading' | 'succeeded' | 'failed';
        error: string | undefined;
    };
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | undefined;
}

const initialState: DocumentsState = {
    documents: {
        data: [],
        status: 'idle',
        error: undefined
    },
    status: 'idle',
    error: undefined
}

const getDocuments = createAsyncThunk(
    'documents/fetchDocuments',
    async () => {
        const primaryDocsPromise = fetchDocuments('/posts');
        const secondaryDocsPromise = fetchDocuments('/posts2');
        const [primaryDocs, secondaryDocs] = await Promise.all([primaryDocsPromise, secondaryDocsPromise])
        return [...primaryDocs, ...secondaryDocs];
    }
);

const revokeDocuments = createAsyncThunk(
    'documents/revokeDocuments',
    async (documentsIds: Document['id'][]) => {
        const result = await cancelDocuments(documentsIds);
        return result;
    }
);

const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getDocuments.pending, (state) => {
                state.documents.status = 'loading';
            })
            .addCase(getDocuments.fulfilled, (state, action) => {
                state.documents.status = 'succeeded';
                state.documents.data = action.payload;
            })
            .addCase(getDocuments.rejected, (state, action) => {
                state.documents.status = 'failed';
                state.documents.error = action.error.message
            })
            .addCase(revokeDocuments.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(revokeDocuments.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.documents.data = action.payload;
            })
            .addCase(revokeDocuments.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message
            })
    }
})

const documentsReducer = documentsSlice.reducer

export { documentsReducer, getDocuments, revokeDocuments, type DocumentsState }