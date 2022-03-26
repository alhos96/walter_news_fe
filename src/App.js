import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Header, Main, Spinner, Article } from "./components";
import { handleApiCall, config } from "./helpers";
import { topHeadlinesRecieved } from "./store/newsSlice";

function App() {
  // helpers
  const dispatch = useDispatch();
  const { endpoints, get } = config;

  // global state
  const resultsLoading = useSelector((state) => state.news.resultsLoading);

  // local state
  const [showAmount, setShowAmount] = useState(3); // amount of articles to ask for

  // functions
  const handleLoadMoreClick = () => {
    setShowAmount((prev) => prev + 3);
  };

  // sideffects
  useEffect(() => {
    handleApiCall(`${endpoints.topHeadlines}&pageSize=${showAmount}`, get, dispatch, topHeadlinesRecieved);
  }, [showAmount]);

  return (
    <div className="App relative">
      <Header />

      <Routes>
        <Route path="/" element={resultsLoading ? <Spinner /> : <Main />} />
        <Route path="/article" element={resultsLoading ? <Spinner /> : <Article />} />
      </Routes>
    </div>
  );
}

export default App;
