import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllNews } from "./api";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const data = await fetchAllNews();
  return data;
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],       // use 'items' to match your Home.jsx
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default newsSlice.reducer;
