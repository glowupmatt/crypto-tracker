import React from "react";
import { coinType } from "../market/[cryptoId]/page";
import classNames from "classnames";

type Props = {
  coin: coinType;
  timeLength: string;
  setTimeLength: React.Dispatch<React.SetStateAction<string>>;
};

function TimeFilters(props: Props) {
  const { coin, setTimeLength, timeLength } = props;

  const timeFilter = [
    {
      title: "1D",
      input: "24h",
    },
    {
      title: "7D",
      input: "7d",
    },
    {
      title: "1M",
      input: "30d",
    },
    {
      title: "1Y",
      input: "1y",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <h2 className="font-bold text-[.8rem] self-start">
        {coin?.symbol} to USD Chart
      </h2>
      <div className="flex justify-end w-full bg-gray-300 rounded-md">
        <div className="bg-gray flex justify-between w-full p-4">
          {timeFilter.map((data, index) => {
            return (
              <div
                key={index}
                className="text-[.7rem]"
                onClick={() => setTimeLength(data.input)}
              >
                <p
                  className={classNames("p-2 rounded-md", {
                    "bg-white": timeLength === data.input,
                  })}
                >
                  {data.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TimeFilters;
