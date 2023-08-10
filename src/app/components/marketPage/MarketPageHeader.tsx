import React from "react";

type Props = {};

const MarketPageHeader = (props: Props) => {
  return (
    <div className="flex items-center p-4 justify-center">
      <div className="flex flex-col gap-3 p-8 bg-slate-200 rounded-lg md:w-[90%] lg:w-full shadow-xl">
        <h3 className="font-bold md:text-[2rem]">
          Top Cryptocurrencies by Price
        </h3>
        <p>
          Track real-time cryptocurrency prices, market trends, and portfolio
          performance effortlessly with our user-friendly crypto tracker website
        </p>
      </div>
    </div>
  );
};

export default MarketPageHeader;
