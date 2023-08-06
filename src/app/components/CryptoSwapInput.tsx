"use client";

import React, { ChangeEvent, ReactHTMLElement, useState } from "react";
import SwapVerticalCircleIcon from "@mui/icons-material/SwapVerticalCircle";
import CryptoDropdown from "./CryptoDropdown";
import CryptoDropdownTwo from "./CryptoDropdownTwo";
import { CoinType } from "../page";

type Props = {
  CryptoObj: CoinType;
};

const INITIAL_TOKEN = {
  uuid: "HIVsRcGKkPFtW",
  symbol: "USDT",
  name: "Tether USD",
  color: "#22a079",
  iconUrl: "https://cdn.coinranking.com/mgHqwlCLj/usdt.svg",
  marketCap: "83754078762",
  price: "0.9992224751679594",
  listedAt: 1420761600,
  tier: 1,
  change: "-0.13",
  rank: 3,
  sparkline: [
    "1.0008129235982977",
    "1.001072089332243",
    "1.0016308372775324",
    "1.00090573192413",
    "1.0004571728270468",
    "1.0005047465949528",
    "1.0004141274116898",
    "1.000755243007801",
    "1.0008874601842563",
    "1.0006673961576282",
    "1.0000794374005446",
    "0.9998656624324582",
    "0.9996670697042128",
    "0.9999059783114437",
    "1.0005610123083917",
    "0.9998991376076409",
    "0.9997568418104351",
    "0.9997191640972436",
    "0.9997704926250262",
    "1.0000465218014858",
    "1.0012064676488697",
    "1.000205689332932",
    "0.9996485298235879",
    "0.9993829876304263",
  ],
  lowVolume: false,
  coinrankingUrl: "https://coinranking.com/coin/HIVsRcGKkPFtW+tetherusd-usdt",
  "24hVolume": "23531042838",
  btcPrice: "0.000034550828506316",
};

export type TokenType = typeof INITIAL_TOKEN;

const CryptoSwapInput = (props: Props) => {
  const { CryptoObj } = props;
  const [selectedTokenOne, setSelectedTokenOne] = useState<TokenType>();
  const [selectedTokenTwo, setSelectedTokenTwo] =
    useState<TokenType>(INITIAL_TOKEN);

  const [inputOne, setInputOne] = useState("");
  // const [inputTwo, setInputTwo] = useState<number | undefined>();

  const onChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
    setInputOne(e.target.value);
  };

  //Create On click For Function
  let inputTwo: number | undefined;
  if (selectedTokenOne !== null && selectedTokenOne !== undefined) {
    const conversionFunction = (
      userAmount: number,
      selectedCrypto: number,
      wantedCrypto: number
    ) => {
      inputTwo = (userAmount * selectedCrypto) / wantedCrypto;
    };
    conversionFunction(
      +inputOne,
      +selectedTokenOne.price,
      +selectedTokenTwo.price
    );
  }

  return (
    <div className="flex flex-col items-center w-[90%] justify-between">
      <div className="w-full p-4 border-solid border-2 border-slate-200 rounded-xl flex relative z-[10] justify-between">
        <div className="md:w-full">
          <p className="text-[.6rem] text-gray-400">Amount</p>
          <input
            className="w-full"
            type="number"
            onChange={onChangeOne}
            value={inputOne}
          />
        </div>
        <CryptoDropdown
          CryptoObj={CryptoObj}
          selectedTokenOne={selectedTokenOne}
          setSelectedTokenOne={setSelectedTokenOne}
        />
      </div>
      <SwapVerticalCircleIcon sx={{ width: 50, height: 50 }} />
      <div className="w-full p-4 border-solid border-2 border-slate-200 rounded-xl flex relative justify-between">
        <div>
          <p className="text-[.6rem] text-gray-400">Amount</p>
          {inputTwo ? (
            <p className="w-full">
              {inputTwo.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          ) : (
            <p></p>
          )}
        </div>
        <CryptoDropdownTwo
          CryptoObj={CryptoObj}
          selectedTokenTwo={selectedTokenTwo}
          setSelectedTokenTwo={setSelectedTokenTwo}
        />
      </div>
    </div>
  );
};

export default CryptoSwapInput;
