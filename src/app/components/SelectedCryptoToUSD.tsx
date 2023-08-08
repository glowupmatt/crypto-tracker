import React from "react";
import { coinType } from "../market/[cryptoId]/page";
import { Line } from "react-chartjs-2";

type Props = {
  coin: coinType;
};

const SelectedCryptoToUSD = (props: Props) => {
  const { coin } = props;
  console.log(coin);
  return (
    <div>
      <div></div>
    </div>
  );
};

export default SelectedCryptoToUSD;
