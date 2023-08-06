import React from "react";
import Image from "next/image";

type Props = {};

function HomeHeader({}: Props) {
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-lg md:flex md:flex-row-reverse md:p-[3rem]">
      <div className="p-8">
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[100%] h-[100%] z-[1]">
            <Image
              src={"/Crypto Folder/pngkey.com-spectre-png-10093866.png"}
              fill
              alt=""
            />
          </div>
          <div className="relative w-[15rem] h-[15rem] bg-blue-200 rounded-lg rounded-tr-[10rem]  rounded-bl-[10rem]"></div>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem]">
        <div className="flex flex-col">
          <h2 className="text-[1.5rem] font-bold">Track Your Crypto</h2>
          <h2 className="text-blue-700 font-bold text-[1.5rem]">Instantly</h2>
        </div>
        <p className="text-[.8rem] lg:w-[60%]">
          Empowering crypto enthusiasts to monitor their digital assets,
          investments, and market data seamlessly with our all-in-one crypto
          tracker platform
        </p>
        <button className="bg-indigo-600 p-[1rem] text-white rounded-lg w-[80%] self-center shadow-md">
          Check The Charts
        </button>
      </div>
    </div>
  );
}

export default HomeHeader;
