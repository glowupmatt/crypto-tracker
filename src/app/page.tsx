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
  // const [cryptoData, setCryptoData] = useState<CryptoDataType>();
  const CryptoObj: CoinType | any = data.data.coins;
  // useEffect(() => {
  //   fetchAllCrypto().then((data) => setCryptoData(data.data.coins));
  // }, []);

  return (
    <div className="overflow-hidden">
      <div className="z-10 relative">
        <Header />
      </div>
      <div className="p-2 flex flex-col gap-8">
        <HomeHeader />
        <CryptoPreviewSection />
        <CrytpoConverter CryptoObj={CryptoObj} />
      </div>
    </div>
  );
}
