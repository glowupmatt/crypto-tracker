"use client";
import React, { FormEvent, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { CoinType } from "@/app/page";
import Image from "next/image";
import { selectCryptoType } from "@/app/convert/page";
import { fetchSearchedCoin } from "@/app/fetchApi/cryptoFetch";
import { searchTokenType } from "./CoinInputConversionPage";

type Props = {
  CryptoObj: CoinType | undefined;
  setSelectedCryptoTwo: React.Dispatch<
    React.SetStateAction<selectCryptoType | undefined>
  >;
};

const CoinInputConversionPageTwo = (props: Props) => {
  const { CryptoObj, setSelectedCryptoTwo } = props;
  const [selectedToken, setSelectedToken] = useState({
    name: "",
    price: "",
    image: "",
  });
  const [searchCoin, setSearchCoin] = useState("");
  const [searchedToken, setSearchedToken] = useState([]);
  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchCoin(e.currentTarget.value);
  };
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchSearchedCoin(
      (e.currentTarget.elements.namedItem("token") as HTMLInputElement).value
    ).then((data) => setSearchedToken(data.data.coins));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center rounded-lg">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          {selectedToken.image.length === 0 ? (
            <Button variant="outline">Select Token</Button>
          ) : (
            <Button
              variant="outline"
              className="w-[7rem] flex justify-between items-center gap-[.5] h-full"
            >
              <p>{selectedToken.name}</p>
              <Image
                alt={selectedToken.name}
                src={selectedToken.image}
                width={30}
                height={30}
              />
            </Button>
          )}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <form onSubmit={onSubmitHandler}>
                <label htmlFor="token">Select Token</label>
                <div className="flex flex-row border-2 justify-between border-slate-100 rounded-md p-2">
                  <input
                    id="token"
                    type="text"
                    placeholder="Search"
                    value={searchCoin}
                    onChange={onChangeHandler}
                  />
                  <button
                    className="border-slate-400 border rounded-md p-2"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="h-[30vh] overflow-scroll flex gap-4 flex-col">
                {CryptoObj?.filter(
                  (data) =>
                    data.name.toLowerCase().includes(searchCoin) ||
                    data.symbol.toLowerCase().includes(searchCoin) ||
                    data.name.toUpperCase().includes(searchCoin) ||
                    data.symbol.toUpperCase().includes(searchCoin)
                ).map((data) => {
                  const price = parseFloat(data.price).toFixed(2);
                  const { symbol, iconUrl } = data;
                  const onClickHandler = () => {
                    setSelectedToken({
                      name: symbol,
                      price: price,
                      image: iconUrl,
                    });
                    setSelectedCryptoTwo({ name: symbol, price: price });
                  };

                  return (
                    <AlertDialogCancel key={data.name}>
                      <div
                        className="flex items-center gap-4 w-full justify-around bg-slate-100 p-4 rounded-md"
                        onClick={onClickHandler}
                      >
                        <div className="flex flex-col gap-1 w-[6rem]">
                          <p>{data.name}</p>
                          <p>${(+price).toLocaleString("en-US")}</p>
                        </div>
                        <Image
                          alt={data.symbol}
                          src={data.iconUrl}
                          width={40}
                          height={40}
                        />
                      </div>
                    </AlertDialogCancel>
                  );
                })}
                {searchedToken?.map((data: searchTokenType, index) => {
                  const price = parseFloat(data?.price).toFixed(2);
                  const { symbol, iconUrl } = data;
                  const onClickHandler = () => {
                    setSelectedToken({
                      name: symbol,
                      price: price,
                      image: iconUrl,
                    });
                    setSelectedCryptoTwo({ name: symbol, price: price });
                  };
                  return (
                    <AlertDialogCancel key={data?.name}>
                      <div
                        onClick={onClickHandler}
                        className="flex items-center gap-4 w-full justify-around bg-slate-100 p-4 rounded-md"
                      >
                        <div className="flex flex-col gap-1 w-[6rem]">
                          <p>{data?.name}</p>
                          <p>${(+price).toLocaleString("en-US")}</p>
                        </div>
                        <Image
                          alt={data?.symbol}
                          src={data?.iconUrl}
                          width={40}
                          height={40}
                        />
                      </div>
                    </AlertDialogCancel>
                  );
                })}
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Close</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default CoinInputConversionPageTwo;
