"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTopFour } from "./fetchApi/cryptoFetch";
import Header from "./components/Header";
import { data } from "./mockData/allCryptoData";
import { fetchAllCrypto } from "./fetchApi/cryptoFetch";
import HomeHeader from "./components/homePage/HomeHeader";
import CryptoPreviewSection from "./components/CryptoPreviewSection";
import CrytpoConverter from "./components/CrytpoConverter";
import NewsFeedPreviewSlide from "./components/NewsFeedPreviewSlide";
import Footer from "./components/Footer";

export type CryptoObjType = {
  CryptoObj: {
    stats: {
      total: number;
      totalCoins: number;
      totalMarkets: number;
      totalExchanges: number;
      totalMarketCap: string;
      total24hVolume: string;
    };
    coins: {
      uuid: string;
      symbol: string;
      name: string;
      color: string;
      iconUrl: string;
      marketCap: string;
      price: string;
      listedAt: number;
      tier: number;
      change: string;
      rank: number;
      sparkline: string[];
      lowVolume: boolean;
      coinrankingUrl: string;
      "24hVolume": string;
      btcPrice: string;
    }[];
  };
};

export type CoinType = {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  "24hVolume": string;
  btcPrice: string;
}[];

export default function Home() {
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  // const CryptoObj: CoinType | any = data.data.coins;
  useEffect(() => {
    fetchAllCrypto().then((data) => setCryptoObj(data.data.coins));
  }, []);

  return (
    <div className="lg:flex lg:justify-center">
      <div className="overflow-hidden lg:max-w-[70rem]">
        <div className="p-2 flex flex-col gap-8">
          <HomeHeader />
          <CryptoPreviewSection CryptoObj={CryptoObj} />
          <CrytpoConverter CryptoObj={CryptoObj} />
          <NewsFeedPreviewSlide />
        </div>
      </div>
    </div>
  );
}
