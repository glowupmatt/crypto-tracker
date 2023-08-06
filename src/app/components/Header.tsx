"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import classNames from "classnames";

type Props = {};

const Header = (props: Props) => {
  const [navOpen, setNavOpen] = useState(false);
  const openNav = () => {
    setNavOpen((prev) => !prev);
  };
  return (
    <nav className="relative z-50 md:flex justify-center items-center">
      <div className="flex w-full justify-between relative p-4 lg:max-w-[70rem]">
        <h1>CRYPTO PLANET</h1>
        <div className="relative z-10 md:hidden">
          {!navOpen ? (
            <MenuIcon sx={{ color: grey[900] }} onClick={openNav} />
          ) : (
            <CloseIcon sx={{ color: grey[900] }} onClick={openNav} />
          )}
        </div>
        <div className="w-[40%] hidden md:flex justify-between items-center">
          <Link href={"/"}>Home</Link>
          <Link href={"/market"}>Market</Link>
          <Link href={"/"}>Convert</Link>
          <Link href={"/"}>News</Link>
        </div>
      </div>
      {/* prettier-ignore */}
      <div
        className={classNames(
          "flex flex-col gap-[3rem] right-0 top-0 p-[5rem] backdrop-blur-xl fixed bg-slate-300 h-screen text-black md:hidden",
          { "hidden": !navOpen }
        )}
      >
        <Link href={"/"}>Home</Link>   
        <Link href={"/"}>Market</Link>
        <Link href={"/"}>Convert</Link>
        <Link href={"/"}>News</Link>
      </div>
    </nav>
  );
};

export default Header;
