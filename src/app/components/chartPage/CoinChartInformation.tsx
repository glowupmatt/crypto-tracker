"use client";

import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { green, red } from "@mui/material/colors";
import Image from "next/image";
import classNames from "classnames";
import { fullCoinDetailType } from "../../mockData/CryptoObjMockData";

type Props = {
  coin: fullCoinDetailType;
  price: string;
  negativeTrend: boolean;
  trending: string;
};

const CoinChartInformation = (props: Props) => {
  const { coin, price, negativeTrend, trending } = props;

  if (coin.iconUrl) {
    return (
      <div className="grid grid-cols-2 items-center gap-4 md:flex md:flex-col">
        <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:w-full">
          <h2 className="text-[1rem] font-bold">Market Stats</h2>
          <div className="flex gap-4">
            <Image
              src={coin?.iconUrl}
              alt={coin?.name}
              width={50}
              height={50}
            />
            <div className="flex flex-col">
              <p>{coin?.name}</p>
              <p className="text-blue-700">{coin?.symbol}</p>
            </div>
          </div>
          <div className="flex gap-4 text-[.8rem] justify-start items-center">
            <p className="p-2 bg-slate-200 text-black rounded-md">
              Rank #{coin?.rank}
            </p>
            <p>{coin?.tags[0]}</p>
          </div>
          <div className="flex gap-4">
            <p>${(+price).toLocaleString("en-US")}</p>
            <div className="flex w-[5rem] justify-start items-center">
              <p
                className={classNames(
                  "text-[10px]",
                  {
                    "text-red-600": negativeTrend === true,
                  },
                  {
                    "text-green-600": negativeTrend === false,
                  }
                )}
              >
                {coin?.change}%
              </p>
              {negativeTrend ? (
                <TrendingDownIcon
                  sx={{ color: red[600], width: 20, height: 20 }}
                />
              ) : (
                <TrendingUpIcon
                  sx={{ color: green[600], width: 20, height: 20 }}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-[.6rem] md:text-[1rem] md:w-1/2">
            {coin?.description}
          </p>
        </div>
      </div>
    );
  }
};

export default CoinChartInformation;
