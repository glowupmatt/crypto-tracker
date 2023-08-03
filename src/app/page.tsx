"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchTopFour } from "./fetchApi/cryptoFetch";
import { data } from "./mockData/topFourCoins";
import Header from "./components/Header";
import HomeHeader from "./components/homePage/HomeHeader";
import CryptoPreviewSection from "./components/CryptoPreviewSection";

export default function Home() {
  const [topFour, setTopFour] = useState();

  // useEffect(() => {
  //   fetchTopFour().then((data) => setTopFour(data.data.coin));
  // }, []);

  return (
    <div className="overflow-hidden">
      <div className="z-10 relative">
        <Header />
      </div>
      <div className="p-2 flex flex-col gap-8">
        <HomeHeader />
        <CryptoPreviewSection />
      </div>
    </div>
  );
}
