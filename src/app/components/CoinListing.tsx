"use client";

import React, { MouseEvent, MouseEventHandler, useEffect } from "react";
import Image from "next/image";
import { coinObjType } from "../mockData/CryptoObjMockData";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import classNames from "classnames";
import { green, red } from "@mui/material/colors";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

type Props = {
  data: coinObjType;
};

const CoinListing = (props: Props) => {
  const { data } = props;

  const trending = data.change;
  // Negative Percentage Change
  const negativeTrend = trending.includes("-");
  const price = parseFloat(data.price).toFixed(2);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const url = `${pathName}`;
    console.log(url);
  }, [pathName]);

  const onClickHandler = () => {
    router.push(`/market/${data.uuid}`);
  };
  return (
    <div
      className="flex justify-between p-4 cursor-pointer"
      onClick={onClickHandler}
    >
      <div className="flex justify-center items-center gap-2 w-[4rem]">
        <p>{data.rank}</p>
        <Image alt="" src={data.iconUrl} width={30} height={30} />
      </div>
      <div className="flex flex-col justify-start text-start items-start gap-2 w-[8rem] lg:w-[5rem]">
        <h2>{data.name}</h2>
        <p>{data.symbol}</p>
      </div>
      <div>
        <p>${(+price).toLocaleString("en-US")}</p>
        <div className="flex w-[5rem]">
          <p
            className={classNames("text-[10px]", {
              "text-red-600": negativeTrend === true,
            })}
          >
            {data.change}%
          </p>
          {negativeTrend ? (
            <TrendingDownIcon sx={{ color: red[600], width: 20, height: 20 }} />
          ) : (
            <TrendingUpIcon sx={{ color: green[600], width: 20, height: 20 }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CoinListing;
