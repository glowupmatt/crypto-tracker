import React from "react";
import CryptoGraph from "./CryptoGraph";

type Props = {
  graphPriceData: {
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
  }[];
  cryptoCardStyles: string;
};

function CryptoCardGrid(props: Props) {
  const { graphPriceData, cryptoCardStyles } = props;
  return (
    <div className={cryptoCardStyles}>
      {graphPriceData.map((data, index) => {
        return (
          <div
            key={index}
            className="bg-white border-slate-200 border-2 rounded-lg p-4 shadow-lg max-w-[25rem] w-full"
          >
            <CryptoGraph data={data} />
          </div>
        );
      })}
    </div>
  );
}

export default CryptoCardGrid;
