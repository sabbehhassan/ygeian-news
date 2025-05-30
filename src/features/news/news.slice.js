import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllNews } from "./api";

export const fetchNews = createAsyncThunk("news/fetchNews", async () => {
  const response = await fetchAllNews();
  return response.articles ? response.articles : response;
});


const newsSlice = createSlice({
  name: "news",
  initialState: {
    items: [],
    loading: false,
    error: null,
    singleArticle: null, // add this here
  },
  reducers: {
    setSingleArticle: (state, action) => {
      state.singleArticle = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
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


export const { setSingleArticle } = newsSlice.actions;
export default newsSlice.reducer;
