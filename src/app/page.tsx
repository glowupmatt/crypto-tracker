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

export default function Home() {
  const [cryptoData, setCryptoData] = useState<any>();
  // const cryptoData = data;

  useEffect(() => {
    fetchAllCrypto().then((data) => setCryptoData(data));
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="z-10 relative">
        <Header />
      </div>
      <div className="p-2 flex flex-col gap-8">
        <HomeHeader />
        <CryptoPreviewSection />
        <CrytpoConverter cryptoData={cryptoData} />
      </div>
    </div>
  );
}
