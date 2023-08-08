"use client";

import React, { useEffect, useState } from "react";
import CryptoCardGrid from "../components/CryptoCardGrid";
import { fetchAllCrypto } from "../fetchApi/cryptoFetch";
import { CoinType } from "../page";
import EmblaCarousel from "../components/EmblaCarousel";
import { graphPriceData } from "../mockData/CryptoObjMockData";
import CoinListing from "../components/CoinListing";
import { coinObjType } from "../mockData/CryptoObjMockData";
import classNames from "classnames";
import CoinListingDesktop from "../components/CoinListingDesktop";
import CrytpoConverter from "../components/CrytpoConverter";

type Props = {};

const Market = (props: Props) => {
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  // useEffect(() => {
  //   fetchAllCrypto().then((data) => setCryptoObj(data.data.coins));
  // }, []);
  const [showMore, setShowMore] = useState<number>(0);
  const [showIndex, setShowIndex] = useState<number>(9);

  // if (CryptoObj) {
  if (graphPriceData) {
    // let graphPriceData = CryptoObj.map((coin) => {
    //   return coin;
    // });

    const nextPage = () => {
      setShowMore((prev) => prev + 1);
      setShowIndex((prev) => prev * 2);
    };

    const topOfPage = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      setShowMore(0);
      setShowIndex(9);
    };

    return (
      <section className="lg:flex lg:justify-center lg:items-center md:p-[2rem] lg:p-[4rem] ">
        <div className="lg:flex lg:flex-col lg:justify-center lg:items-center md:bg-white lg:w-full md:rounded-lg max-w-[75rem] shadow-xl">
          <div className="md:flex flex-col gap-3 bg-white justify-end lg:p-[1rem] lg:w-[70%]">
            <div className="flex items-center p-4 justify-center">
              <div className="flex flex-col gap-3 p-8 bg-slate-200 rounded-lg md:w-[90%] lg:w-full shadow-xl">
                <h3 className="font-bold md:text-[2rem]">
                  Top Cryptocurrencies by Price
                </h3>
                <p>
                  Track real-time cryptocurrency prices, market trends, and
                  portfolio performance effortlessly with our user-friendly
                  crypto tracker website
                </p>
              </div>
            </div>
            <div className="md:hidden">
              <EmblaCarousel graphPriceData={graphPriceData} />
            </div>
          </div>
          <div className="md:hidden">
            {graphPriceData
              .filter((data, index) => index <= showIndex)
              .map((data: coinObjType | any, index) => {
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
            {graphPriceData
              .filter((data, index) => index <= showIndex)
              .map((data: coinObjType | any, index) => {
                return (
                  <div key={index}>
                    <CoinListingDesktop data={data} />
                  </div>
                );
              })}
          </div>
          {/* prettier-ignore */}
          <div className="flex justify-center items-center p-4 cursor-pointer">
          {showMore === 3 ?  
          <div onClick={topOfPage} className={classNames("flex justify-center items-center w-[8rem] bg-blue-700 rounded-md p-4 text-white text-[.8rem]")}>
              <p>Top of the page</p> 
        </div> :
        <div onClick={nextPage} className={classNames("flex justify-center items-center w-[8rem] bg-blue-700 rounded-md p-4 text-white text-[.8rem]")}>
           <p>Show More</p>
          </div>
          }
        </div>
        </div>
      </section>
    );
  }
};

export default Market;
