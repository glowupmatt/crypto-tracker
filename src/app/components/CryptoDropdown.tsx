"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/app/components/ui/navigation-menu";
import Image from "next/image";
import { CoinType } from "../page";

type Props = {
  CryptoObj: CoinType;
  selectedTokenOne: TokenType | undefined;
  setSelectedTokenOne: React.Dispatch<
    React.SetStateAction<TokenType | undefined>
  >;
};

type TokenType = {
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
};

const CryptoDropdownOne = (props: Props) => {
  const { CryptoObj, selectedTokenOne, setSelectedTokenOne } = props;

  const coinsLimit = CryptoObj.slice(0, 7);

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            {selectedTokenOne === undefined ? (
              <p className="text-[.6rem]">Choose Coin</p>
            ) : (
              <div className="flex flex-row-reverse justify-center items-center gap-3">
                <Image
                  alt={selectedTokenOne.name}
                  src={selectedTokenOne.iconUrl}
                  width={25}
                  height={25}
                />
                <p className="text-[.8rem]">{selectedTokenOne.symbol}</p>
              </div>
            )}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="overflow-scroll h-[10rem] w-full flex flex-col gap-2 items-center">
            {coinsLimit.map((coin: TokenType, index) => {
              const onClickHandler = () => {
                setSelectedTokenOne(coin);
              };
              return (
                <NavigationMenuLink
                  key={index}
                  className="p-[1rem] w-[90%] flex justify-evenly items-center gap-[1rem] bg-slate-200 rounded"
                  onClick={onClickHandler}
                >
                  <p className="text-[.8rem]">{coin.symbol}</p>

                  <Image
                    alt={coin.name}
                    src={coin.iconUrl}
                    width={25}
                    height={25}
                  />
                </NavigationMenuLink>
              );
            })}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CryptoDropdownOne;
