"use client";

import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import CryptoSwapInput from "./CryptoSwapInput";

type Props = {
  cryptoData: {
    status: string;
    data: {
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
};

const CrytpoConverter = (props: Props) => {
  const { cryptoData } = props;
  if (cryptoData) {
    const coins = cryptoData.data.coins;
    return (
      <div className="bg-white h-[30rem] shadow-lg flex flex-col items-center justify-center py-8 gap-8">
        <div className="flex flex-col items-center justify-center text-center bg-gray-300 p-4 rounded-lg w-[90%] shadow-md">
          <h2 className="font-bold text-[1rem] mb-1">Easy Conversion</h2>
          <div className="flex items-center justify-center w-full mb-4">
            <CurrencyExchangeIcon sx={{ width: 30, height: 30 }} />
          </div>
          <p className="text-[.8rem]">
            Easily convert between various cryptocurrencies and fiat currencies
            with our intuitive and accurate crypto converter tool.
          </p>
        </div>
        <CryptoSwapInput coins={coins} />
      </div>
    );
  }
};

export default CrytpoConverter;
