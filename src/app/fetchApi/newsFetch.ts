import axios from "axios";

const options = {
  method: "GET",
  url: "https://bing-news-search1.p.rapidapi.com/news/search",
  params: {
    q: "crypto",
    freshness: "Day",
    textFormat: "Raw",
    safeSearch: "Off",
  },
  headers: {
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_NEWS_API,
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
  },
};

export const broadCryptoNews = async () => {
  try {
    const response = await axios.request(options);
    return response.data.value;
  } catch (error) {
    console.error(error);
  }
};
