import React from "react";
import { coinType } from "../market/[cryptoId]/page";

type Props = {
  coin: coinType;
  timeLength: string;
  setTimeLength: React.Dispatch<React.SetStateAction<string>>;
};

function TimeFilters(props: Props) {
  const { coin } = props;

  const timeFilter = [];

  return (
    <div>
      <h2 className="font-bold text-[.8rem]">{coin?.symbol} to USD Chart</h2>
      <div></div>
    </div>
  );
}

export default TimeFilters;
