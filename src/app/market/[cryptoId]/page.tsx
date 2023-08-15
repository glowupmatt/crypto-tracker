"use client";

import React, { useEffect, useState } from "react";
import { fetchAllCrypto, fetchCoin } from "@/app/fetchApi/cryptoFetch";
import SelectedCryptoToUSD from "@/app/components/SelectedCryptoToUSD";
import TimeFilters from "@/app/components/TimeFilters";
import CoinChartInformation from "@/app/components/chartPage/CoinChartInformation";
import { fullCoinDetailType } from "@/app/mockData/CryptoObjMockData";
import CoinInfoData from "@/app/components/chartPage/CoinInfoData";
import CoinListing from "@/app/components/CoinListing";
import { SingleCoinTypeArray } from "@/app/mockData/topFourCoins";
import FullCoinList from "@/app/components/marketPage/FullCoinList";

type Props = {
  params: {
    cryptoId: string;
  };
};

export type coinType = fullCoinDetailType;

function CoinGraph(props: Props) {
  const { params } = props;
  const [coin, setCoin] = useState<coinType>();
  const [timeLength, setTimeLength] = useState<string>("24h");
  const [coinList, setCoinList] = useState<SingleCoinTypeArray[]>();
  const [showIndex, setShowIndex] = useState<number>(9);

  useEffect(() => {
    const url = `${params.cryptoId}`;
    fetchCoin(url).then((data) => setCoin(data.data.coin));
    fetchAllCrypto(100).then((data) => setCoinList(data.data.coins));
  }, [params]);

  if (coin !== undefined && coinList) {
    const price = parseFloat(coin?.price).toFixed(2);
    const trending: string = coin?.change;
    const negativeTrend: boolean = trending.includes("-");
    const graphPriceData: SingleCoinTypeArray[] = coinList?.filter(
      (data, index) => index <= 4
    );

    return (
      <section className="flex justify-center items-center bg-slate-200 min-h-screen">
        <div className="flex flex-col justify-center items-center w-full p-4 gap-4 max-w-[75rem]">
          <div className="w-full bg-white p-4 rounded-lg md:p-8">
            <CoinChartInformation
              coin={coin}
              price={price}
              trending={trending}
              negativeTrend={negativeTrend}
            />
            <CoinInfoData coin={coin} negativeTrend={negativeTrend} />
          </div>
          <div className="bg-white p-4 rounded-md w-full lg:flex">
            <div className="w-full lg:w-[70%]">
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
            <div className="bg-white rounded-lg w-full lg:flex flex-col justify-between lg:w-[20rem]">
              <div className="p-4 lg:h-full lg:flex lg:items-center lg:justify-center">
                <h2 className="font-bold text-[.8rem] self-start lg:self-center">
                  Top Five Coins:
                </h2>
              </div>
              <div className="w-full lg:w-[90%]">
                {graphPriceData.map((data, index) => {
                  return (
                    <div key={index}>
                      <CoinListing data={data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CoinGraph;
