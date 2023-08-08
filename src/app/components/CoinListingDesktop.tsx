"use client";

import React, { useEffect } from "react";
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
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const pathName = usePathname();
  useEffect(() => {
    const url = `${pathName}`;
    console.log(url);
  }, [pathName]);

  return (
    <Link
      href={`/market/${data.uuid}`}
      className="flex justify-center items-center"
    >
      <div className="flex justify-between gap-[3rem] px-[2rem] py-4 lg:p-4 w-full lg:gap-0">
        <div className="flex justify-start items-center gap-3 w-[15rem]">
          <p>{data.rank}</p>
          <Image alt="" src={data.iconUrl} width={30} height={30} />
          <h2>{data.name}</h2>
          <p className="text-[.5rem] bg-slate-200 text-blue-700 p-1">
            {data.symbol}
          </p>
        </div>
        <div className="flex gap-[1rem] justify-end items-center w-full">
          <div className="flex gap-[1rem] lg:gap-[3rem] w-[7rem] lg:w-[10rem]">
            <div className="flex justify-start w-[6rem]">
              <p>${(+price).toLocaleString("en-US")}</p>
            </div>
            <div className="flex w-[5rem] justify-start items-center">
              <p
                className={classNames("text-[10px]", {
                  "text-red-600": negativeTrend === true,
                })}
              >
                {data.change}%
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
          <div className="flex gap-3 w-[15rem] justify-end items-center ">
            <p className="w-[6rem]">${biggestNum}</p>
            <p className="w-[6rem]">${lowestNum}</p>
          </div>
          <div className="w-[6rem] h-[4rem]">
            <Line
              options={options}
              data={chartData}
              height={62.5}
              width={100}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CoinListingDesktop;
