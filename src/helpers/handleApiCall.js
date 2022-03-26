import axios from "axios";

import config from "./config";

const handleApiCall = async (url, method, dispatch, onSuccess) => {
  console.log(url);
  let options = {
    baseURL: config.baseUrl,
    method: method,
    url: `${url}&apiKey=${config.apiKey}`,
  };

  try {
    const res = await axios.request(options);
    dispatch(onSuccess(res.data.articles));
  } catch (err) {
    console.log(err);
  }
};

export default handleApiCall;
