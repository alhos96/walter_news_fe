import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "news",
  initialState: {
    resultsLoading: true,
    // one of this arrays must remain empty at all times because cards are rendered based upon their length
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
      news.searchedHeadlines = []; // remove elements so top headlines can be shown
      news.resultsLoading = false;
    },
    searchedHeadlinesRecieved: (news, { payload }) => {
      news.searchedHeadlines = payload;
      news.topHeadlines = []; // remove elements so searched headlines can be shown
      news.resultsLoading = false;
    },
    articleSelected: (news, { payload }) => {
      news.article = payload;
      news.resultsLoading = false;
    },
  },
});

export const { topHeadlinesRecieved, searchedHeadlinesRecieved, articleSelected, loadingStarted } = slice.actions;

export default slice.reducer;
