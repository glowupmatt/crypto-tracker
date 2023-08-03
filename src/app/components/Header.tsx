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
    <nav>
      <div className="flex w-full justify-between relative p-4">
        <h1>CRYPTO PLANET</h1>
        <div className="relative z-10">
          {!navOpen ? (
            <MenuIcon sx={{ color: grey[900] }} onClick={openNav} />
          ) : (
            <CloseIcon sx={{ color: grey[900] }} onClick={openNav} />
          )}
        </div>
      </div>
      {/* prettier-ignore */}
      <div
        className={classNames(
          "flex flex-col gap-[3rem] right-0 top-0 p-[5rem] backdrop-blur-xl fixed bg-slate-300 h-screen text-black",
          { "hidden": !navOpen }
        )}
      >
        <Link href={"/"}>Market</Link>
        <Link href={"/"}>Convert</Link>
        <Link href={"/"}>News</Link>
      </div>
    </nav>
  );
};

export default Header;
