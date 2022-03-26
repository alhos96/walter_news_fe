const config = {
  baseUrl: "https://newsapi.org/v2",
  endpoints: {
    topHeadlines: `/top-headlines?country=us`,
    everything: "/everything",
  },
  apiKey: process.env.REACT_APP_API_KEY,
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

export default config;
