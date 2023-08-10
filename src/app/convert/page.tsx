"use client";

import React, { useEffect, useState } from "react";
import { CoinType } from "../page";
import { fetchAllCrypto } from "../fetchApi/cryptoFetch";
import CoinInputConversionPage from "../components/convertPage/CoinInputConversionPage";
import { SingleCoinTypeArray } from "../mockData/topFourCoins";
import { grey } from "@mui/material/colors";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import CoinInputConversionPageTwo from "../components/convertPage/CoinInputConversionPageTwo";

type Props = {};
export type selectCryptoType = {
  name: string;
  price: string;
};

const Convert = (props: Props) => {
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  const [selectCryptoOne, setSelectedCryptoOne] = useState<selectCryptoType>();
  const [selectCryptoTwo, setSelectedCryptoTwo] = useState<selectCryptoType>();
  const [amount, setAmount] = useState("");
  useEffect(() => {
    fetchAllCrypto().then((data) => setCryptoObj(data.data.coins));
  }, []);

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value);
  };

  console.log(selectCryptoOne);
  let inputTwo: number | undefined;
  if (
    selectCryptoOne !== null &&
    selectCryptoOne !== undefined &&
    selectCryptoTwo !== undefined
  ) {
    const conversionFunction = (
      userAmount: number,
      selectedCrypto: number,
      wantedCrypto: number
    ) => {
      inputTwo = (userAmount * selectedCrypto) / wantedCrypto;
    };
    conversionFunction(
      +amount,
      +selectCryptoOne?.price,
      +selectCryptoTwo?.price
    );
  }

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-center h-screen max-w-[70rem]">
        <div className="p-4 flex justify-center items-center">
          <p className="text-[.8rem]  p-[3rem] md:w-[48%] rounded-md bg-blue-200 font-semibold text-center">
            Crypto Planet Converter will enable you to make quick and easy
            currency conversions. Based on those calculations, you can plan out
            your financially independent future with more ease.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 h-[25rem] p-4 md:w-[50%] md:h-[75%] relative">
          <div className="flex gap-[1rem] p-4 bg-slate-300 rounded-lg h-1/2 items-center justify-center md:w-full">
            <CoinInputConversionPage
              CryptoObj={CryptoObj}
              setSelectedCryptoOne={setSelectedCryptoOne}
            />
            <input
              type="number"
              placeholder="Input Amount"
              className="w-[8rem] h-[2rem] p-4 text-black bg-slate-300 focus:outline-none focus:border-none focus:rounded-lg focus:ring-0 focus:ring-sky-500 md:w-[45%]"
              onChange={onChangeHandler}
            />
          </div>
          <div className="absolute">
            <CurrencyExchangeIcon
              sx={{ width: 50, height: 50, color: grey[500] }}
              className="drop-shadow-md"
            />
          </div>
          <div className="flex gap-[1rem] p-4 bg-slate-300 rounded-lg h-1/2 items-center justify-center md:w-full">
            <CoinInputConversionPageTwo
              CryptoObj={CryptoObj}
              setSelectedCryptoTwo={setSelectedCryptoTwo}
            />
            <p className="w-[8rem] h-[4rem] bg-slate-300 p-4 flex flex-col justify-center items-start text-black overflow-x-scroll overflow-y-hidden  md:w-[45%]">
              {inputTwo?.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
