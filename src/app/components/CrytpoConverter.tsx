"use client";

import React from "react";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import CryptoSwapInput from "./CryptoSwapInput";
import { CoinType } from "../page";

type Props = {
  CryptoObj: CoinType | undefined;
};

const CrytpoConverter = (props: Props) => {
  const { CryptoObj } = props;

  if (CryptoObj) {
    return (
      <div className="bg-white h-[30rem] shadow-lg flex flex-col items-center justify-center py-8 gap-8 md:flex-row md:p-4">
        <div className="flex flex-col items-center justify-center text-center bg-gray-300 p-4 rounded-lg w-[90%] shadow-md md:h-full">
          <h2 className="font-bold text-[1rem] mb-1">Easy Conversion</h2>
          <div className="flex items-center justify-center w-full mb-4">
            <CurrencyExchangeIcon sx={{ width: 30, height: 30 }} />
          </div>
          <p className="text-[.8rem]">
            Easily convert between various cryptocurrencies and fiat currencies
            with our intuitive and accurate crypto converter tool.
          </p>
        </div>
        <CryptoSwapInput CryptoObj={CryptoObj} />
      </div>
    );
  }
};

export default CrytpoConverter;
