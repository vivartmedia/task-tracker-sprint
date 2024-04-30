'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavBarComponent } from "../Components/NavBarComponent";
import  PfpPic  from '../Assets/image (2).png'
import plus from '../Assets/image (4).png'

export default function Home() {

  const router = useRouter();

  return (
    <div className="bg-[#F1FFFC] heightPage" >
    <div>
    <NavBarComponent/>
    </div>
    <div className="grid grid-cols-12">
        <div className="col-span-4 flex justify-center items-center flex-col pt-16"> 
          <img className="w-80 mb-4" src={PfpPic.src} alt="Profile Pic" /> 
          <h1 className="hammer text-black text-4xl text-center">USERNAME</h1>
          <h1 className="hammer text-2xl text-center pt-4">Joined 12/31/1937</h1>
        </div>
        <div className="col-span-8"> 
        <div className="h-96 w-full" >
            <div className="w-full border justify-center" >
        <div className="flex justify-center items-center pt-16">
            <h1 className="hammer text-4xl text-center pr-6 pt-1">MY BOARDS</h1>
            <img src={plus.src} alt="plus png" className="w-6 h-6" />
        </div>
        <div className="h-12 pl-2 items-center bg-[#AEE6D9] w-96 justify-center" >
            <h1 className="text-2xl text-black hammer" >YOUR BOARD</h1>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
