import { useSelector } from "react-redux";

import "./main.css";
import Card from "../card/Card";
import Button from "../button/Button";

function Main({ setShowAmount }) {
  // global state
  const topHeadlines = useSelector((state) => state.news.topHeadlines);
  const searchedHeadlines = useSelector((state) => state.news.searchedHeadlines);

  // this value will serve as boolean to render certain component upon
  const showTopHeadlines = topHeadlines.length;
  const showSearchedHeadlines = searchedHeadlines.length;

  // functions
  const handleLoadMoreClick = () => {
    setShowAmount((prev) => prev + 3);
  };

  const showCards = (data) => {
    return data.map((article, index) => {
      return (
        <Card
          // pass all data to card.
          key={article?.publishedAt}
          imgUrl={article?.urlToImage}
          title={article?.title}
          description={article?.description}
          publishedAt={article?.publishedAt}
          source={article?.source}
          author={article?.author}
          content={article?.content}
        />
      );
    });
  };

  return (
    <div className="main absolute top-44 lg:left-[50%] max-w-[1000px] lg:translate-x-[-50%] bg-transparent sm:w-full">
      <div className="main-content grid md:gap-1 lg:gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* if top headlines exist in array in redux show them and vice versa */}
        {showCards((showTopHeadlines && topHeadlines) || (showSearchedHeadlines && searchedHeadlines))}
      </div>

      {showTopHeadlines && <Button handler={() => handleLoadMoreClick()} children={"Load More"} />}
    </div>
  );
}

export default Main;
