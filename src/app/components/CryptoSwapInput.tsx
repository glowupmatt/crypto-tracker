"use client";

import React from "react";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import CryptoDropdown from "./CryptoDropdown";

type Props = {
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

const CryptoSwapInput = (props: Props) => {
  const { coins } = props;

  return (
    <div className="flex flex-col items-center w-[90%] justify-between">
      <div className="w-full p-4 border-solid border-2 border-slate-200 rounded-xl flex relative z-[10]">
        <div className="">
          <p className="text-[.6rem] text-gray-400">Amount</p>
          <input className="w-full" type="number" />
        </div>
        <CryptoDropdown coins={coins} />
      </div>
      <SwapVerticalCircleIcon sx={{ width: 50, height: 50 }} />
      <div className="w-full p-4 border-solid border-2 border-slate-200 rounded-xl flex">
        <div>
          <p className="text-[.6rem] text-gray-400">Amount</p>
          <input className="w-full" type="number" />
        </div>
        <CryptoDropdown coins={coins} />
      </div>
    </div>
  );
};

export default CryptoSwapInput;
