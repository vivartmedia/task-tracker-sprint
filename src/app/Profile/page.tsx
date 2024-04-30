'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { NavBarComponent } from "../Components/NavBarComponent";
import  PfpPic  from '../Assets/image (2).png'

export default function Home() {

  const router = useRouter();

  return (
    <div className="bg-[#F1FFFC] heightPage" >
    <div>
    <NavBarComponent/>
    </div>
    <div className="grid grid-cols-12">
        <div className="col-span-4 flex justify-center items-center flex-col"> 
          <img className="w-80 mb-4" src={PfpPic.src} alt="Profile Pic" /> 
          <h1 className="hammer text-2xl text-center">USERNAME</h1>
        </div>
        <div className="col-span-8"> 
        </div>
      </div>
    </div>
  );
}
