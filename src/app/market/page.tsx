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

type Props = {};

const Market = (props: Props) => {
  const cryptoCardStyles = "flex flex-row";
  const [CryptoObj, setCryptoObj] = useState<CoinType | undefined>();
  // useEffect(() => {
  //   fetchAllCrypto().then((data) => setCryptoObj(data.data.coins));
  // }, []);
  // if (CryptoObj) {
  const [showMore, setShowMore] = useState<number>(0);
  const [showIndex, setShowIndex] = useState<number>(9);
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
      <section className="">
        <div className="flex flex-col gap-3 bg-white justify-end md:hidden">
          <div className="flex items-center justify-center">
            <div className="flex flex-col gap-3 p-4 bg-slate-200 rounded-lg w-[90%]">
              <h3>Top Cryptocurrencies by Price</h3>
              <p>
                Track real-time cryptocurrency prices, market trends, and
                portfolio performance effortlessly with our user-friendly crypto
                tracker website
              </p>
            </div>
          </div>
          <EmblaCarousel graphPriceData={graphPriceData} />
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
        <div className="hidden md:flex flex-col">
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
      </section>
    );
  }
};

export default Market;
