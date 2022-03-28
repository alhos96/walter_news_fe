import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "news",
  initialState: {
    resultsLoading: true,
    // one of this arrays must remain empty at all times because cards are rendered based upon their length
    topHeadlines: [],
    searchedHeadlines: [],
    article: [],
    errorMessage: "", // error component is rendered based on this state. Reset it to something falsy on all non-error actions
  },
  reducers: {
    loadingStarted: (news, data) => {
      news.resultsLoading = true;
      news.errorMessage = "";
    },
    recievedError: (news, { payload }) => {
      news.errorMessage = payload;
    },
    topHeadlinesRecieved: (news, { payload }) => {
      news.topHeadlines = payload;
      news.searchedHeadlines = []; // remove elements so top headlines can be shown
      news.resultsLoading = false;
      news.errorMessage = "";
    },
    searchedHeadlinesRecieved: (news, { payload }) => {
      news.searchedHeadlines = payload;
      news.topHeadlines = []; // remove elements so searched headlines can be shown
      news.resultsLoading = false;
      news.errorMessage = "";
    },
    articleSelected: (news, { payload }) => {
      news.article = payload;
      news.resultsLoading = false;
      news.errorMessage = "";
    },
    backToTopHeadlines: (news, data) => {
      news.searchedHeadlines = []; // emptying searched headlines in redux store will trigger new call for top headlines
      news.errorMessage = "";
    },
  },
});

export const { topHeadlinesRecieved, searchedHeadlinesRecieved, articleSelected, loadingStarted, backToTopHeadlines, recievedError } =
  slice.actions;

export default slice.reducer;
