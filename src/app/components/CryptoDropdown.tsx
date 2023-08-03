"use client";

import React from "react";
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

type Props = {
  coins: {
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
  }[];
};

const CryptoDropdown = (props: Props) => {
  const { coins } = props;
  const coinsLimit = coins.slice(0, 7);
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Choose Coin</NavigationMenuTrigger>
          <NavigationMenuContent className="overflow-scroll h-[25rem] w-full flex flex-col gap-2 items-center">
            {coinsLimit.map((coin, index) => {
              return (
                <NavigationMenuLink
                  key={index}
                  className="p-[1rem] w-[90%] flex justify-evenly items-center gap-[1rem] bg-slate-200 rounded"
                >
                  <p>{coin.symbol}</p>
                  <Image
                    alt={coin.name}
                    src={coin.iconUrl}
                    width={30}
                    height={30}
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

export default CryptoDropdown;
