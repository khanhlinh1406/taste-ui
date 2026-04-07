import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE } from "@/app/lib/api";

export const extractColorsThunk = createAsyncThunk(
    "design/extractColors",
    async(file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API_BASE}/extract-colors`, {
            method: "POST",
            body: formData
        });
    
        if (!res) throw new Error("API error");
        return res.json();
    }
)

interface DesignState {
    colors: {name: string, code: string}[];
    loading: boolean;
    previewPic: string | null;
}

const initialState: DesignState = {
    colors: [],
    loading: false,
    previewPic: null,
  };
  

const designSlice = createSlice({
    name: "design",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(extractColorsThunk.pending, (state) => {
            state.loading = true;
        })
        .addCase(extractColorsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.colors = action.payload.colors;
        })
        .addCase(extractColorsThunk.rejected, (state) => {
            state.loading = false;
        })
    }
})

export default designSlice.reducer;