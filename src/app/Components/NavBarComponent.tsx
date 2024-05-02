"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../Assets/image.png";
import Link from "next/link";
import SignOut from "../Assets/image (3).png";
import { Dropdown } from "flowbite-react";
import { INavbar } from "../Interfaces/Interfaces";

export const NavBarComponent = ({ accountColor }: INavbar) => {
  return (
    <nav
      className={`h-24 bg-gradient-to-r from-[#AEE6D9] to-[#3EBE9F] flex justify-between items-center px-5 hammer font-bold`}
    >
      <Image src={Logo} alt="Maddie Logo" height={80} className="pb-3" />
      <Dropdown
        label="dropdown"
        dismissOnClick={false}
        renderTrigger={() => (
          <span
            className={`${
              accountColor != null ? "block" : "hidden"
            } border borderSolid rounded-full h-12 w-12 cursor-pointer`}
            style={{
              background: accountColor?.startsWith("#")
                ? accountColor
                : `url(${accountColor})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></span>
        )}
      >
        <Dropdown.Item as={Link} href="/Profile">
          <span className="text-lg ps-7">PROFILE</span>
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/Boardpage">
          <span className="text-[#0B7D61] text-lg">CREATE BOARD</span>
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="/">
          <span className="text-[#CD0000] text-lg ps-3">LOG OUT</span>{" "}
          <Image
            src={SignOut}
            alt="sign out button pic"
            height={30}
            className="pb-1 ps-2"
          />
        </Dropdown.Item>
      </Dropdown>
    </nav>
  );
};
