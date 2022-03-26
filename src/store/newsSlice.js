import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "news",
  initialState: {
    resultsLoading: true,
    topHeadlines: [],
    searchedHeadlines: [],
    article: [],
  },
  reducers: {
    loadingStarted: (news, data) => {
      news.resultsLoading = true;
    },
    topHeadlinesRecieved: (news, { payload }) => {
      news.topHeadlines = payload;
      news.resultsLoading = false;
    },
    searchedHeadlinesRecieved: (news, { payload }) => {
      news.searchedHeadlines = payload;
      news.resultsLoading = false;
    },
    articleRecieved: (news, { payload }) => {
      news.article = payload;
      news.resultsLoading = false;
    },
  },
});

export const { topHeadlinesRecieved, searchedHeadlinesRecieved, articleRecieved, loadingStarted } = slice.actions;

export default slice.reducer;
