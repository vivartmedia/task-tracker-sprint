'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavBarComponent } from "../Components/NavBarComponent";
import  PfpPic  from '../Assets/image (2).png'
import plus from '../Assets/image (4).png'
import { CreateBoardComponent } from "../Components/CreateBoardComponent";

export default function Home() {

  const router = useRouter();

  return (
    <div className="bg-[#F1FFFC] heightPage" >
    <NavBarComponent/>
    <div className="grid grid-cols-12 pt-24">
        <div className="col-span-4 flex justify-center items-center flex-col pt-16"> 
          <img className="w-80 mb-4" src={PfpPic.src} alt="Profile Pic" /> 
          <h1 className="hammer text-black text-4xl text-center">USERNAME</h1>
          <h1 className="hammer text-2xl text-center pt-4">Joined 12/31/1937</h1>
        </div>
        <div className="col-span-8"> 
        <div className="h-96 w-full" >
            <div className="w-full border justify-center" >
        <div className="flex justify-center items-center pt-16">
            <h1 className="hammer text-4xl text-center pr-2 pt-5">MY BOARDS</h1>
            {/* <img src={plus.src} alt="plus png" className="w-6 h-6 cursor-pointer" /> */}
            <CreateBoardComponent/>
        </div>
        
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
