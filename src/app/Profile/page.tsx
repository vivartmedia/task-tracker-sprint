"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { BoardListComponent } from "../Components/BoardListComponent";
import paintImage from "../Assets/image (7).png";
import PencilImage from "../Assets/image (6).png";
import randomColorImage from "../Assets/image (9).png";

import pfpImage from "../Assets/image (8).png";
import { CreateBoardComponent } from "../Components/CreateBoardComponent";

import { Button } from "flowbite-react";
import { NavBarComponent } from "../Components/NavBarComponent";

const Profile = () => {

  const [username, setUsername] = useState("USERNAME");
  const [accountColor, setaccountColor] = useState("#57CDFF");

  const [pencilIcon, setpencilIcon] = useState(false);
  const [painColor, setpainColor] = useState(false);

  const [dateJoined, setDateJoined] = useState("12/31/1937");
  let accountColorPic = [
    "#FFA07A",
    "#FF6E6E",
    "#9370DB",
    "#7FFF00",
    "#FFC56E",
    "#57CDFF",
    "#FF69B4",
    "#57CDFF",
    "#8A2BE2",
  ];
  let backgroundColorDiv = ["#AEE6D9", "#6FDFC4", "#3EBE9F"];

  const handlePfpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();
    const file = e.target.files?.[0];
    if (file) {
      reader.onload = () => {
        setaccountColor(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAccountColor = () => {
    let random = Math.floor(Math.random() * accountColorPic.length);
    setaccountColor(accountColorPic[random]);
  };


  const handleHoverPaint = () => {
    setpainColor(true);
  };
  const handleHoverTwoPaint = () => {
    setpainColor(false);
  };

  const handleHoverPencil = () => {
    setpencilIcon(true);
  };
  const handleHoverTwoPencil = () => {
    setpencilIcon(false);
  };

  return (
   
    <>
  <NavBarComponent accountColor={accountColor} />
  <div className="bg-[#F1FFFC] h-screen hammer">
    <div className="grid grid-cols-3 gap-8 py-8 px-8">
      {/* Top Section */}
      <div className="flex flex-col items-center gap-7 col-span-3 md:col-span-1">
        <div className="pt-4 flex justify-center items-baseline relative">
          {/* Add Icon Button */}
          <div>
            <Image
              src={paintImage}
             alt="png image"
              height={30}
              onClick={handleAccountColor}
              className="cursor-pointer"
              onMouseOut={handleHoverTwoPaint}
              onMouseOver={handleHoverPaint}
            />
            <Image
              src={randomColorImage}
              alt="random color"
              height={60}
              className={`absolute right-40 ${painColor ? "block" : "hidden"}`}
            />
          </div>

          {/* User Color Preview */}
          <div
            className="border border-black rounded-full h-44 w-44"
            style={{
              background: accountColor.startsWith("#")
                ? accountColor
                : `url(${accountColor})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          ></div>
          <div>
            <label htmlFor="uploadImage">
              <Image
                src={PencilImage}
               alt="png image"
                height={30}
                className="cursor-pointer"
                onMouseOver={handleHoverPencil}
                onMouseOut={handleHoverTwoPencil}
              />
            </label>
            <input
              id="uploadImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handlePfpChange}
            />
            <Image
              src={pfpImage}
              alt="random color"
              height={60}
              className={`absolute left-40 ${pencilIcon ? "block" : "hidden"}`}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl">{username.toUpperCase()}</h1>
          <p className="text-2xl pt-4">
            Joined <span>{dateJoined}</span>
          </p>
        </div>
      </div>
      {/* My Boards Section */}
      <div className="col-span-3 md:col-span-2 bg-white border border-black rounded-sm p-4 h-[75%] md:h-auto md:flex flex-col">
        <div className="pt-5 pb-8 flex justify-center items-baseline gap-3">
          <h2 className="text-4xl order-1 md:order-none">MY BOARDS</h2>
          <CreateBoardComponent />
        </div>
        <div className="flex flex-col items-center gap-10 overflow-y-scroll h-[75%] md:h-auto">
          <BoardListComponent
            nameBoard={"OUR BOARD"}
            backgroundColorDiv={backgroundColorDiv[0]}
          />
          <BoardListComponent
            nameBoard={"chores"}
            backgroundColorDiv={backgroundColorDiv[1]}
          />
          <BoardListComponent
            nameBoard={"Board #3"}
            backgroundColorDiv={backgroundColorDiv[2]}
          />
          <BoardListComponent
            nameBoard={"OUR BOARD"}
            backgroundColorDiv={backgroundColorDiv[0]}
          />
          <BoardListComponent
            nameBoard={"chores"}
            backgroundColorDiv={backgroundColorDiv[1]}
          />
          <BoardListComponent
            nameBoard={"Board #3"}
            backgroundColorDiv={backgroundColorDiv[2]}
          />
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Profile;
