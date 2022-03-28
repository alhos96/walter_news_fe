import axios from "axios";

import config from "./config";

const handleApiCall = async (url, method, dispatch, onSuccess, onError) => {
  let options = {
    baseURL: config.baseUrl,
    method: method,
    url: `${url}&apiKey=${config.apiKey}`,
  };

  try {
    const res = await axios.request(options);
    let articlesFound = res.data.articles.length > 0;

    if (articlesFound) {
      dispatch(onSuccess(res.data.articles));
    } else {
      dispatch(onError("No articles found..."));
    }
  } catch (err) {
    console.log(err);
  }
};

export default handleApiCall;
