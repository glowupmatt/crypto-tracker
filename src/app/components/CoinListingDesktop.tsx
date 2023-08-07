"use client";

import React from "react";
import Image from "next/image";
import { coinObjType } from "../mockData/CryptoObjMockData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import classNames from "classnames";
import { green, red } from "@mui/material/colors";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

type Props = {
  data: coinObjType;
};

const CoinListingDesktop = (props: Props) => {
  const { data } = props;
  const info = data.sparkline;
  const numberInfo = info.map((num) => parseFloat(num));
  const trending = data.change;
  // Negative Percentage Change
  const negativeTrend = trending.includes("-");
  const price = parseFloat(data.price).toFixed(2);
  const biggestNum = numberInfo
    .reduce((a, c) => Math.max(a, c))
    .toLocaleString("en-US");
  const lowestNum = numberInfo
    .reduce((a, c) => Math.min(a, c))
    .toLocaleString("en-US");

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const chartData = {
    labels: info,
    datasets: [
      {
        data: info,
        pointBackgroundColor: "transparent",
        pointBorderColor: "transparent",
        borderColor: "blue",
        pointHoverBackgroundColor: "white",
        pointHoverBorderColor: "white",
        pointBorderWidth: 10,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          drawBorder: false,
          display: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex justify-between p-4">
      <div className="flex justify-start items-center gap-2 w-full">
        <p>{data.rank}</p>
        <Image alt="" src={data.iconUrl} width={30} height={30} />
        <h2>{data.name}</h2>
        <p className="text-[.5rem]">{data.symbol}</p>
      </div>

      <p>${(+price).toLocaleString("en-US")}</p>
      <div className="flex w-[5rem]">
        <p
          className={classNames("text-[10px]", {
            "text-red-600": negativeTrend === true,
          })}
        >
          {data.change}%
        </p>
        {negativeTrend ? (
          <TrendingDownIcon sx={{ color: red[600], width: 20, height: 20 }} />
        ) : (
          <TrendingUpIcon sx={{ color: green[600], width: 20, height: 20 }} />
        )}
      </div>
      <div className="flex gap-3">
        <p>${biggestNum}</p>
        <p>${lowestNum}</p>
      </div>
      <div className="w-[6rem] h-[4rem]">
        <Line options={options} data={chartData} height={62.5} width={100} />
      </div>
    </div>
  );
};
export default CoinListingDesktop;
