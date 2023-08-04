import axios from "axios";

const baseURL = "https://newsapi.org/v2/everything";

const options = {
  url: baseURL,
  params: {
    q: "Cryptocurrency",
  },
};

const headers = process.env.NEXT_PUBLIC_NEWS_API;
export const broadCryptoNews = async (queries: string, pageSize: number) => {
  try {
    const { data } = await axios.get(
      `${baseURL}?q=${queries}&searchIn=title,description&pageSize=${pageSize}&apiKey=704498f5f332417f8f959c0aed695b2d`
    );
    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
};
