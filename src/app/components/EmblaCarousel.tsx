"use client";

import React, { useEffect } from "react";
import CryptoGraph from "./CryptoGraph";
import useEmblaCarousel from "embla-carousel-react";
import "../emblaStyles/cardCarousel.css";
import Autoplay from "embla-carousel-autoplay";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  graphPriceData:
    | {
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
      }[]
    | any[];
};

const EmblaCarousel = (props: Props) => {
  const { graphPriceData } = props;

  //Embla Crypto Carousel Data
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

  const filteredGraphPriceData = graphPriceData
    .sort((highest, lowest) => +highest.price + +lowest.price)
    .filter((data, index) => index <= 4);

  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const url = `${pathName}`;
    console.log(url);
  }, [pathName]);

  return (
    <div className="embla p-[1rem]" ref={emblaRef}>
      <div className="embla__container lg:pr-[7rem] lg:pl-[27rem]">
        {filteredGraphPriceData.map((data, index) => {
          const onClickHandler = () => {
            router.push(`/market/${data.uuid}`);
          };
          return (
            <div
              onClick={onClickHandler}
              key={index}
              className="embla__slide bg-white border-slate-200 border-2 rounded-lg p-4 shadow-lg "
            >
              <CryptoGraph data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmblaCarousel;
