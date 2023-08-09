"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { fetchCoin } from "@/app/fetchApi/cryptoFetch";
import { usePathname, useRouter } from "next/navigation";
import { coin } from "@/app/mockData/CryptoChart";
import { coinObjType } from "@/app/mockData/CryptoObjMockData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Image from "next/image";
import red from "@mui/material/colors/red";
import green from "@mui/material/colors/green";
import TimelineIcon from "@mui/icons-material/Timeline";
import classNames from "classnames";
import InfoIcon from "@mui/icons-material/Info";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import SelectedCryptoToUSD from "@/app/components/SelectedCryptoToUSD";
import TimeFilters from "@/app/components/TimeFilters";

type Props = {
  params: {
    cryptoId: string;
  };
};

export type coinType = coinObjType;

function CoinGraph(props: Props) {
  const { params } = props;
  const [coin, setCoin] = useState<any>();
  const [timeLength, setTimeLength] = useState<string>("24h");

  useEffect(() => {
    const url = `${params.cryptoId}`;
    fetchCoin(url).then((data) => setCoin(data.data.coin));
  }, [params]);

  if (coin !== undefined) {
    const price = parseFloat(coin?.price).toFixed(2);
    const trending = coin?.change;
    const negativeTrend = trending.includes("-");
    const twentyFourHrVolume = parseFloat(coin?.["24hVolume"]).toFixed(2);
    const marketCap = parseFloat(coin?.marketCap).toFixed(2);
    const fullyDilutedMarketCap = parseFloat(
      coin?.fullyDilutedMarketCap
    ).toFixed(2);
    const circulatingSupply = parseFloat(coin?.supply.total).toFixed(2);

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
      <div className="flex flex-col justify-center items-center bg-slate-200 p-4 gap-4">
        <div className="w-full bg-white p-4 rounded-lg">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="flex flex-col gap-8">
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
            <div className="">
              <p className="text-[.6rem]">{coin?.description}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-items-start items-center justify-start py-4 gap-[.5rem]">
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
                      className={classNames("text-[10px] text-black", {
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
        </div>
        <div className="bg-white p-4 rounded-md w-full">
          <TimeFilters
            coin={coin}
            timeLength={timeLength}
            setTimeLength={setTimeLength}
          />
          <SelectedCryptoToUSD
            coin={coin}
            timeLength={timeLength}
            setTimeLength={setTimeLength}
          />
        </div>
      </div>
    );
  }
}

export default CoinGraph;
