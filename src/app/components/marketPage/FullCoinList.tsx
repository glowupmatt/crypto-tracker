import React, { FormEvent, useState } from "react";
import { CoinType } from "@/app/page";
import { coinObjType } from "@/app/mockData/CryptoObjMockData";
import CoinListingDesktop from "../CoinListingDesktop";
import CoinListing from "../CoinListing";
import { fetchSearchedCoin } from "@/app/fetchApi/cryptoFetch";

type Props = {
  graphPriceData: CoinType;
};

const FullCoinList = (props: Props) => {
  const { graphPriceData } = props;

  return (
    <div>
      <div className="md:hidden">
        {graphPriceData.map((data: coinObjType | any, index) => {
          return (
            <div key={index}>
              <CoinListing data={data} />
            </div>
          );
        })}
      </div>
      <div className="hidden md:flex flex-col ">
        <div className="flex justify-between md:pl-[2rem] md:pr-[4rem] lg:px-[2rem] py-[2rem]">
          <p>#</p>
          <p>Coin Name</p>
          <p>Coin Price</p>
          <p>24h%</p>
          <p>23h High</p>
          <p>23h Low</p>
          <p>Chart</p>
        </div>
        <hr />
        {graphPriceData.map((data, index) => {
          return (
            <div key={index}>
              <CoinListingDesktop data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullCoinList;
