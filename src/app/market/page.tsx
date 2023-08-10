"use client";

import React, { useEffect, useState } from "react";
import { fetchAllCrypto } from "../fetchApi/cryptoFetch";
import { CoinType } from "../page";
import EmblaCarousel from "../components/EmblaCarousel";
import MarketPageHeader from "../components/marketPage/MarketPageHeader";
import FullCoinList from "../components/marketPage/FullCoinList";
import ShowMoreButton from "../components/marketPage/ShowMoreButton";

type Props = {};

const Market = (props: Props) => {
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  useEffect(() => {
    fetchAllCrypto().then((data) => setCryptoObj(data.data.coins));
  }, []);
  const [showMore, setShowMore] = useState<number>(0);
  const [showIndex, setShowIndex] = useState<number>(9);

  if (CryptoObj) {
    let graphPriceData = CryptoObj.map((coin) => {
      return coin;
    });

    return (
      <section className="lg:flex lg:justify-center lg:items-center md:p-[2rem] lg:p-[4rem] min-h-screen">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center md:bg-white lg:w-full md:rounded-lg max-w-[75rem] shadow-xl">
          <div className="md:flex flex-col gap-3 bg-white justify-end lg:p-[1rem] lg:w-[70%]">
            <MarketPageHeader />
            <div className="md:hidden">
              <EmblaCarousel graphPriceData={graphPriceData} />
            </div>
          </div>
          <FullCoinList graphPriceData={graphPriceData} showIndex={showIndex} />
          {/* prettier-ignore */}
          <ShowMoreButton setShowMore={setShowMore} setShowIndex={setShowIndex} showMore={showMore}/>
        </div>
      </section>
    );
  }
};

export default Market;
