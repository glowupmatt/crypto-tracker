"use client";

import React, { useState, useEffect } from "react";
import { coinType } from "../market/[cryptoId]/page";
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
import { fetchCoinHistory } from "../fetchApi/cryptoFetch";
import { Line } from "react-chartjs-2";

type Props = {
  coin: coinType;
  timeLength: string;
  setTimeLength: React.Dispatch<React.SetStateAction<string>>;
};

type graphDataType = {
  price: string | undefined;
  timestamp: number | undefined;
}[];

const SelectedCryptoToUSD = (props: Props) => {
  const { coin, timeLength, setTimeLength } = props;

  const [graphData, setGraphData] = useState<graphDataType>();

  useEffect(() => {
    fetchCoinHistory(coin.uuid, timeLength).then((data) =>
      setGraphData(data.data.history)
    );
  }, [coin.uuid, timeLength]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  if (graphData) {
    const priceData = graphData.map((data) => {
      return data.price;
    });
    const timeStampData = graphData.map((data) => {
      return data.timestamp;
    });

    const unixTimestamp = timeStampData.map((data) => {
      return data;
    });

    const date = unixTimestamp.map((data) => {
      if (data) {
        return new Date(data * 1000);
      }
    });

    const todaysDate = new Date().toLocaleDateString("en-US");

    const result = date.filter((data) => {
      data?.toLocaleDateString("en-US") === todaysDate;
      return data?.toLocaleTimeString("en-US");
    });
    const finalResult = result.map((data) => data?.toLocaleTimeString("en-US"));

    const chartData = {
      labels: finalResult,
      datasets: [
        {
          data: priceData,
          pointBackgroundColor: "transparent",
          pointBorderColor: "transparent",
          borderColor: "blue",
          pointHoverBackgroundColor: "white",
          pointHoverBorderColor: "white",
          pointBorderWidth: 10,
          order: 0,
        },
      ],
    };
    const options = {
      chart: {
        type: "line",
      },
      scales: {
        y: {
          display: true,
          grid: {
            drawBorder: false,
            display: false,
          },
          position: "right" as const,
          reverse: true,
        },
        x: {
          display: true,
          grid: {
            drawBorder: true,
            display: true,
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    return (
      <div className="border-solid border-[2px] border-gray w-full h-[20rem]">
        <Line options={options} data={chartData} />
      </div>
    );
  }
};

export default SelectedCryptoToUSD;
