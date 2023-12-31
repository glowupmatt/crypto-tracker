import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import PublicIcon from "@mui/icons-material/Public";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex flex-col items-center justify-center p-[.5rem]">
      <div className="flex flex-row items-center gap-3 bg-gray-300 rounded-lg relative overflow-hidden p-8 w-full md:h-[13rem]max-w-[75rem] ">
        <PublicIcon className="absolute w-full h-[10rem] top-[-1.75rem] left-[6rem] fill-slate-400 md:hidden" />
        <div className="w-full justify-center items-center z-10">
          <h1 className="text-center z-10">Crypto Planet</h1>
          <div className="flex justify-center items-center relative z-10">
            <div className="flex flex-col gap-4 p-4 rounded-lg justify-between relative text-[.8rem] w-full ">
              <div className="flex h-full justify-evenly shadow-2xl">
                <Link href={"/"} className="shadow-2xl">
                  Home
                </Link>
                <Link href={"/market"} className="shadow-2xl">
                  Market
                </Link>
                <Link href={"/convert"} className="shadow-2xl">
                  Convert
                </Link>
              </div>
              <div className="flex justify-evenly h-full">
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
