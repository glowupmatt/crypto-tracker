"use client";

import React, { useEffect, useState } from "react";
import { fetchAllCrypto } from "../fetchApi/cryptoFetch";
import { CoinType } from "../page";
import EmblaCarousel from "../components/EmblaCarousel";
import MarketPageHeader from "../components/marketPage/MarketPageHeader";
import FullCoinList from "../components/marketPage/FullCoinList";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { fetchNextTokenBatch } from "../fetchApi/cryptoFetch";
import classNames from "classnames";
import LoadingState from "../components/LoadingState";

type Props = {};

const Market = (props: Props) => {
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  const [showIndex, setShowIndex] = useState<number>(0);
  const [clickLimit, setClickLimit] = useState<number>(0);
  useEffect(() => {
    fetchNextTokenBatch(showIndex).then((data) =>
      setCryptoObj(data.data.coins)
    );
    window.scrollTo(0, 0);
  }, [showIndex]);

  const nextButtonHandler = () => {
    setShowIndex((prev) => prev + 50);
    setClickLimit((prev) => prev + 1);
  };
  const prevButtonHandler = () => {
    setShowIndex((prev) => prev - 50);
    setClickLimit((prev) => prev - 1);
  };

  if (CryptoObj) {
    let graphPriceData = CryptoObj.map((coin) => {
      return coin;
    });

    return (
      <section className="lg:flex  lg:justify-center lg:items-center md:p-[2rem] lg:p-[4rem] min-h-screen">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center md:bg-white lg:w-full md:rounded-lg max-w-[75rem] shadow-xl">
          <div className="md:flex flex-col gap-3 bg-white justify-end lg:p-[1rem] lg:w-[70%]">
            <MarketPageHeader />
            <div className="md:hidden">
              <EmblaCarousel graphPriceData={graphPriceData} />
            </div>
          </div>

          <FullCoinList graphPriceData={graphPriceData} />

          <div className="w-full flex justify-evenly p-4">
            <NavigateBeforeIcon
              className={classNames("h-10 w-10 text-gray-500 cursor-pointer", {
                hidden: clickLimit === 0,
              })}
              onClick={prevButtonHandler}
            />
            <NavigateNextIcon
              className={classNames("h-10 w-10 text-gray-500 cursor-pointer", {
                hidden: clickLimit === 3,
              })}
              onClick={nextButtonHandler}
            />
          </div>
        </div>
      </section>
    );
  }
};

export default Market;
