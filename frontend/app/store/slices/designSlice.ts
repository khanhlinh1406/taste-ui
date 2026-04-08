import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE } from "@/app/lib/api";

export const extractColorsThunk = createAsyncThunk(
    "design/extractColors",
    async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch(`${API_BASE}/extract-colors`, {
            method: "POST",
            body: formData,
        });

        if (!res) throw new Error("API error");
        return res.json();
    },
);

interface DesignState {
    colors: { name: string; code: string }[];
    loading: boolean;
    previewPic: string | null;
}

const DEFAULT_PALETTE = [
    { name: "Primary", code: "#0052D0" },
    { name: "Secondary", code: "#4D5D73" },
    { name: "Tertiary", code: "#8D3A8B" },
    { name: "Accent", code: "#D1DCFF" },
    { name: "On Surface", code: "#272E42" },
    { name: "Outline", code: "#6F768E" },
];

const initialState: DesignState = {
    colors: DEFAULT_PALETTE,
    loading: false,
    previewPic: null,
};

const designSlice = createSlice({
    name: "design",
    initialState,
    reducers: {
        setColors: (state, action) => {
            state.colors = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(extractColorsThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(extractColorsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.colors = action.payload;
            })
            .addCase(extractColorsThunk.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { setColors } = designSlice.actions;

export default designSlice.reducer;
