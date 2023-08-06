"use client";

import React, { useEffect, useState } from "react";
import { fetchCoinHistory } from "../fetchApi/cryptoFetch";
import { data } from "../mockData/topFourCoins";
import classNames from "classnames";
import EmblaCarousel from "./EmblaCarousel";
import CryptoCardGrid from "./CryptoCardGrid";
import { CoinType } from "../page";

type Props = {
  CryptoObj: CoinType | undefined;
};

const CryptoPreviewSection = (props: Props) => {
  const { CryptoObj } = props;

  if (CryptoObj) {
    let graphPriceData = CryptoObj.map((coin) => {
      return coin;
    }).filter((coin) => {
      return coin.rank <= 4;
    });

    return (
      <div className="flex flex-col bg-white h-[15rem] justify-evenly rounded-lg shadow-lg md:h-[30rem]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-blue-500">Top Market</p>
          <h3 className="text-[1.2rem] font-bold">Up To Date Crypto Prices</h3>
        </div>
        <div className="hidden md:block">
          <CryptoCardGrid graphPriceData={graphPriceData} />
        </div>
        <div className="flex flex-col gap-3 bg-white justify-end md:hidden">
          <EmblaCarousel graphPriceData={graphPriceData} />
        </div>
      </div>
    );
  }
};

export default CryptoPreviewSection;
