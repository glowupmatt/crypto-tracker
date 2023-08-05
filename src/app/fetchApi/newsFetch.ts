import axios from "axios";

const baseURL = "https://newsapi.org/v2/everything";

const options = {
  url: baseURL,
  params: {
    q: "Cryptocurrency",
  },
  "X-Api-Key": "704498f5f332417f8f959c0aed695b2d",
};

export const broadCryptoNews = async (queries: string, pageSize: number) => {
  try {
    const { data } = await axios.get(
      `${baseURL}?q=${queries}&searchIn=title,description&pageSize=${pageSize}&apiKey=${options["X-Api-Key"]}`
    );
    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
};
