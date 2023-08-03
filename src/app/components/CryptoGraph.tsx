import React from "react";
import Image from "next/image";
import { Line } from "react-chartjs-2";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import classNames from "classnames";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
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
import { red } from "@mui/material/colors";
import { green } from "@mui/material/colors";
import "../emblaStyles/cardCarousel.css";

type Props = {
  data: {
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
  };
};

const CryptoGraph = (props: Props) => {
  const { data } = props;

  // Price Data for chart
  const info = data.sparkline;
  // crypto price Data
  const price = Math.ceil(+data.price).toLocaleString("en-US");
  // Positive Percentage Change
  const trending = data.change;
  // Negative Percentage Change
  const negativeTrend = trending.includes("-");

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
    <div className="">
      <div className="flex gap-4">
        <div className="relative w-[1.5rem] h-[1.5rem]">
          <Image alt={data.name} fill src={data.iconUrl} />
        </div>
        <p className="">{data.name}</p>
      </div>
      <div className="flex justify-center items-center gap-[.5rem] w-[100%] ">
        <div className="flex items-center gap-2 ">
          <p className="text-[1rem] font-bold">${price}.00</p>
          <div className="flex">
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
        <div className="w-[6rem] h-[4rem]">
          <Line options={options} data={chartData} height={62.5} width={100} />
        </div>
      </div>
    </div>
  );
};

export default CryptoGraph;
