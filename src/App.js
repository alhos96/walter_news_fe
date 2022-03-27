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
  const [showAmount, setShowAmount] = useState(20); // amount of articles to ask for

  // sideffects
  useEffect(() => {
    handleApiCall(`${endpoints.topHeadlines}&pageSize=${showAmount}`, get, dispatch, topHeadlinesRecieved);
    // controlled by load more button in main component
  }, [showAmount]);

  return (
    <div className="App relative">
      <Header />

      <Routes>
        <Route path="/" element={resultsLoading ? <Spinner /> : <Main showAmount={showAmount} setShowAmount={setShowAmount} />} />
        <Route path="/article" element={resultsLoading ? <Spinner /> : <Article />} />
      </Routes>
    </div>
  );
}

export default App;
