"use client";

import React, { useEffect, useState } from "react";
import { fetchCoinHistory } from "../fetchApi/cryptoFetch";
import { data } from "../mockData/topFourCoins";
import CryptoGraph from "./CryptoGraph";
import useEmblaCarousel from "embla-carousel-react";
import "../emblaStyles/cardCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import classNames from "classnames";

type Props = {};

const CryptoPreviewSection = (props: Props) => {
  const [topFourIds, setTopFourIds] = useState<any[]>([]);
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoplayOptions),
  ]);

  // useEffect(() => {
  //   const coinsIds: string[] = data.data.coins.map((coin) => coin.uuid);
  //   coinsIds.forEach((id) => {
  //     fetchCoinHistory(id, "1h").then((data) =>
  //       setTopFourIds((prev) => [...prev, data])
  //     );
  //   });
  // }, []);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  let graphPriceData = data.data.coins.map((coin) => {
    return coin;
  });

  return (
    <div className="flex flex-col bg-white h-[15rem] justify-evenly rounded-lg shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <p className="text-blue-500">Top Market</p>
        <h3 className="text-[1.2rem] font-bold">Up To Date Crypto Prices</h3>
      </div>
      <div className="flex flex-col gap-3 bg-white justify-end">
        <div className="embla p-[1rem]" ref={emblaRef}>
          <div className="embla__container">
            {graphPriceData.map((data, index) => {
              return (
                <div
                  key={index}
                  className="embla__slide bg-white border-slate-200 border-2 rounded-lg p-4"
                >
                  <CryptoGraph data={data} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoPreviewSection;
