import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import "./header.css";
import { logo, searchIcon, filterIcon, backIcon } from "../../assets/images";
import { SlideFromLeft, SlideFromRight, SlideFromTop } from "../animations";
import { handleBlur, handleChange, handleFocus, handleSubmit, handleBackButtonClick } from "./handlers";
import { handleApiCall, config } from "../../helpers";
import { searchedHeadlinesRecieved, backToTopHeadlines, loadingStarted, recievedError } from "../../store/newsSlice";

const filters = [
  // name is shown to user value is searched by
  { name: "relevancy", value: "relevancy" },
  { name: "popularity", value: "popularity" },
  { name: "date", value: "publishedAt" },
];

function Header({ setTopHeadlinesTrigger, showAmount }) {
  // helpers
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchInput = useRef();
  const { endpoints, get } = config;

  // global state
  const searchedHeadlines = useSelector((state) => state.news.searchedHeadlines);

  // local state
  const [isVisible, setIsVisible] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(50);
  const [userInput, setUserInput] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  // functions
  const search = () => {
    handleApiCall(
      `${endpoints.everything}?q=${userInput}&sortBy=${activeFilter}&pageSize=${showAmount}`,
      get,
      dispatch,
      searchedHeadlinesRecieved,
      recievedError
    );
  };

  // side effects
  useEffect(() => {
    setIsVisible(true); // handle animation
  }, []);

  useEffect(() => {
    userInput && search(); // search again on filter change but prevent search on initial render when input is empty
    // eslint-disable-next-line
  }, [activeFilter, showAmount]);

  return (
    <div className="header p-5 h-80 relative">
      <SlideFromTop
        isVisible={isVisible}
        children={
          <>
            <img className="m-auto cursor-pointer" src={logo} alt="logo" onClick={() => navigate("/")} />

            <form
              tabIndex="0"
              className="search-wrapp m-auto mt-7 max-w-[400px] relative"
              onFocus={(e) => handleFocus(e, setButtonOpacity)}
              onBlur={(e) => handleBlur(e, setButtonOpacity)}
              onSubmit={(e) => handleSubmit(e, search, navigate)}
            >
              <input
                className="search-input bg-transparent w-[81%] md:w-[87%] lg:w-[87%]"
                placeholder="Search..."
                ref={searchInput}
                type="text"
                onChange={(e) => handleChange(e, setUserInput)}
              />

              <button
                children={<img alt="seacrh ico" src={searchIcon} />}
                className={`search-button absolute right-0 bottom-0 opacity-${buttonOpacity} px-4 py-1`}
                type="submit"
              />

              {/* these commands are shown only if user is curently in search mode */}
              {searchedHeadlines.length > 0 && (
                <>
                  <SlideFromLeft
                    isVisible={searchedHeadlines.length > 0}
                    children={
                      <>
                        <button
                          children={<img alt="filter ico" src={filterIcon} />}
                          className={`search-button absolute right-0 bottom-[-27px] opacity-${buttonOpacity} px-[16.5px] py-2`}
                          // toggle filters list
                          onClick={() => setShowFilters((prev) => !prev)}
                        />

                        <button
                          children={<img alt="back ico" src={backIcon} />}
                          className={`search-button absolute right-0 bottom-[27px] opacity-${buttonOpacity} px-[15px]`}
                          disabled={userInput.length === 0}
                          onClick={() =>
                            handleBackButtonClick(
                              dispatch,
                              backToTopHeadlines,
                              loadingStarted,
                              setTopHeadlinesTrigger,
                              searchInput,
                              setUserInput
                            )
                          }
                        />
                      </>
                    }
                  />

                  <SlideFromRight
                    isVisible={showFilters}
                    children={
                      <ul className="flex absolute justify-around text-sm lg:text-base mt-1 pl-1">
                        {filters.map((filter, index) => (
                          <li
                            className="filter cursor-pointer mr-2 lg:mr-4"
                            id={filter.value}
                            key={index + filter}
                            children={filter.name}
                            onClick={(e) => setActiveFilter(e.target.id)}
                          />
                        ))}
                      </ul>
                    }
                  />
                </>
              )}
            </form>
          </>
        }
      />
    </div>
  );
}

export default Header;
