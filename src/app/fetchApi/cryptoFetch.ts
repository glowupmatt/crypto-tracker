import axios from "axios";

const BASE_URL = "https://api.coinranking.com/v2/coins";

const options = {
  url: BASE_URL,
  params: {
    orderBy: "marketCap",
    limit: "4",
  },
  headers: {
    "x-access-token": process.env.NEXT_PUBLIC_CRYPTO_API,
  },
};

// Fetch top four coins
export const fetchTopFour = async () => {
  const { data } = await axios.get(options.url, options);
  return data;
};

export const fetchCoinHistory = async (id: string, timeParam: string) => {
  try {
    const { data } = await axios.get(
      `https://api.coinranking.com/v2/coin/${id}/history?timePeriod=${timeParam}`
    );

    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
};

export const fetchAllCrypto = async () => {
  try {
    const { data } = await axios.get(`https://api.coinranking.com/v2/coins`);

    return data;
  } catch (err) {
    console.error("Error: ", err);
  }
};

const individualCoinOptions = {
  headers: {
    "x-access-token": process.env.NEXT_PUBLIC_CRYPTO_API,
  },
};

export const fetchCoin = async (id: string) => {
  try {
    const { data } = await axios.get(
      `https://api.coinranking.com/v2/coin/${id}`,
      options
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
