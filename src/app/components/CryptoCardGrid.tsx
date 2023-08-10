"use client";

import React, { useEffect } from "react";
import CryptoGraph from "./CryptoGraph";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  graphPriceData: {
    uuid: string;
    symbol: string;
    name: string;
    color: string | null;
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

  const filteredGraphPriceData = graphPriceData
    .sort((highest, lowest) => +highest.price + +lowest.price)
    .filter((data, index) => index <= 2);

  // console.log(filteredGraphPriceData);

  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const url = `${pathName}`;
    console.log(url);
  }, [pathName]);

  return (
    <div className={cryptoCardStyles}>
      {graphPriceData.map((data, index) => {
        const onClickHandler = () => {
          router.push(`/market/${data.uuid}`);
        };
        return (
          <div
            key={index}
            onClick={onClickHandler}
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
