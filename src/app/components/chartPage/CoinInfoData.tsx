"use client";

import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import classNames from "classnames";
import InfoIcon from "@mui/icons-material/Info";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import { fullCoinDetailType } from "@/app/mockData/CryptoObjMockData";

type Props = {
  coin: fullCoinDetailType;
  negativeTrend: boolean;
};

const CoinInfoData = (props: Props) => {
  const { coin, negativeTrend } = props;

  //information variables
  const twentyFourHrVolume = parseFloat(coin?.["24hVolume"]).toFixed(2);
  const marketCap = parseFloat(coin?.marketCap).toFixed(2);
  const fullyDilutedMarketCap = parseFloat(coin?.fullyDilutedMarketCap).toFixed(
    2
  );
  const circulatingSupply = parseFloat(coin?.supply.total).toFixed(2);

  // Array of data displayed on grid
  const coinInfoData = [
    {
      icon: <TimelineIcon sx={{ width: 20, height: 20 }} />,
      title: "Market Cap",
      price: (+marketCap).toLocaleString("en-US"),
    },
    {
      icon: <QueryBuilderIcon sx={{ width: 20, height: 20 }} />,
      title: "24 Volume",
      price: (+twentyFourHrVolume).toLocaleString("en-US"),
    },
    {
      icon: <InfoIcon sx={{ width: 20, height: 20 }} />,
      title: "Full Diluted",
      price: (+fullyDilutedMarketCap).toLocaleString("en-US"),
    },
    {
      icon: <InfoIcon sx={{ width: 20, height: 20 }} />,
      title: "Circulating Supply",
      price: (+circulatingSupply).toLocaleString("en-US"),
    },
  ];
  return (
    <div className="grid grid-cols-2 justify-items-start items-center justify-start py-4 gap-[.5rem] md:flex">
      {coinInfoData.map((data, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-between items-start bg-slate-200 w-full h-[7rem] p-4 rounded-md"
          >
            <div className="flex justify-between w-full text-[.6rem] gap-[.5rem]">
              {data.icon}
              <p className="flex justify-start items-center w-full">
                {data.title}
              </p>
            </div>
            <div className="flex w-[5rem] justify-start items-center">
              <p
                className={classNames("text-[10px] text-green", {
                  "text-red-600": negativeTrend === true,
                })}
              >
                ${data.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoinInfoData;
